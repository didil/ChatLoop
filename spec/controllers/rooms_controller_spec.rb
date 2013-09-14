require 'spec_helper'

describe RoomsController do
  render_views

  it "creates" do
    name = "Main"
    room_json = "json"
    room = double(:to_json => room_json)
    Room.stub(:get_room).with(name) { room }

    xhr :post, :create, :name => name

    response.body.should eq room_json
  end

end
