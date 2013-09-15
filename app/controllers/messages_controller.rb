class MessagesController < ApplicationController
  respond_to :json

  def index
    message_params = params.permit(:room_id)
    messages = Message.for_room(message_params[:room_id])
    respond_with messages
  end

  def create
    message_params = params.permit(:room_id, :content)
    message = Message.create(:room_id => message_params[:room_id], :content => message_params[:content])
    respond_with message
  end

end
