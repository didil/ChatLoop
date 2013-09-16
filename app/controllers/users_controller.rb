class UsersController < ApplicationController
  respond_to :json

  def create
    user_params = params.permit(:name)
    user = User.get_user(user_params[:name])
    respond_with user
  end

  def sign_out
    redis = Redis.new
    room_channels = Room.all.pluck(:id).map { |id| "room_#{id}"}
    room_channels.each do |channel|
      redis.lrem channel, 0, params[:user_id]
    end

    redis.quit
    render :text => "ok"
  end

end
