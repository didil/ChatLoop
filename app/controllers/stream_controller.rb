require 'reloader/sse'

class StreamController < ApplicationController
  include ActionController::Live

  def messages
    user_id = params[:user_id]
    room = Room.find(params[:room_id])
    response.headers['Content-Type'] = 'text/event-stream'
    sse = Reloader::SSE.new(response.stream)

    REDIS.rpush room.channel, user_id

    begin
      room.on_new_message do
        REDIS.rpush room.channel, user_id
        Message.connection.clear_query_cache
        messages = room.messages.includes(:user)
        messages_serializer = ActiveModel::ArraySerializer.new messages
        sse.write(messages_serializer, :event => 'messages.refresh')
      end
    rescue IOError
      # When the client disconnects, we'll get an IOError on write
    ensure
      sse.close

      REDIS.lrem room.channel, 0, user_id
    end
  end

  def users
    room = Room.find(params[:room_id])
    response.headers['Content-Type'] = 'text/event-stream'
    sse = Reloader::SSE.new(response.stream)

    begin
      loop do
        users_ids = REDIS.lrange(room.channel, 0, -1).map(&:to_i)
        users = User.where("id in (?)", users_ids)
        users_serializer = ActiveModel::ArraySerializer.new users
        sse.write(users_serializer, :event => 'users.refresh')

        sleep 5
      end
    rescue IOError
      # When the client disconnects, we'll get an IOError on write
    ensure
      sse.close
    end

  end

end