require 'spec_helper'

describe Message do
  it "gives messages for room" do
    room_id = 4
    messages = []
    5.times { messages << FactoryGirl.create(:message, :room_id => room_id) }
    FactoryGirl.create(:message, :room_id => room_id+1)
    Message.for_room(4).to_a.should =~ messages
  end
end
