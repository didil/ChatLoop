require 'spec_helper'

describe MessagesController do
  render_views

  let(:room_id) {"4"}

  it "index" do
    messages = [stub_model(Message), stub_model(Message)]
    Message.stub(:for_room).with(room_id) { messages }

    xhr :get, :index, :room_id => room_id

    response.body.should  eq messages.to_json
  end

  it "creates" do
    content ="Hello all"
    message = stub_model(Message)
    Message.stub(:create).with(:room_id => room_id, :content => content ) { message }

    xhr :post, :create, :room_id => room_id , :content => content

    response.body.should  eq message.to_json
  end

end
