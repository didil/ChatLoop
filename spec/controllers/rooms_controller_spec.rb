require 'spec_helper'

describe RoomsController do
  render_views

  it "creates" do
    name = "Main"
    room = FactoryGirl.create(:room)
    Room.stub(:get_room).with(name) { room }

    xhr :post, :create, :name => name

    response.body.should eq room.to_json
  end

end
