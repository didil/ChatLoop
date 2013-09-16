class RoomsController < ApplicationController
  respond_to :json

  def create
    room_params = params.permit(:name)
    room = Room.get_room(room_params[:name])
    respond_with room
  end

end
