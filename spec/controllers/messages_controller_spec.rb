require 'spec_helper'

describe MessagesController do

  let(:room_id) { "4" }

  it "index" do
    messages = [FactoryGirl.create(:message), FactoryGirl.create(:message)]
    Message.stub(:for_room).with(room_id) { messages }

    xhr :get, :index, :room_id => room_id

    response.body.should eq "[{\"id\":1,\"content\":\"MyText\",\"created_at\":\"less than a minute ago\",\"user_nickname\":\"Anonymous\"},{\"id\":2,\"content\":\"MyText\",\"created_at\":\"less than a minute ago\",\"user_nickname\":\"Anonymous\"}]"
  end

  it "creates" do
    content ="Hello all"
    message = FactoryGirl.create(:message)
    Message.stub(:create).with("room_id" => room_id, "content" => content) { message }

    xhr :post, :create, :room_id => room_id, :content => content

    response.body.should eq "{\"id\":1,\"content\":\"MyText\",\"created_at\":\"less than a minute ago\",\"user_nickname\":\"Anonymous\"}"
  end

end
