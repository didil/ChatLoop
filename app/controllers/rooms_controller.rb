class RoomsController < ApplicationController

  def create
    room_params = params.permit(:name)
    room = Room.get_room(room_params[:name])
    render :json => room.to_json
  end

end
