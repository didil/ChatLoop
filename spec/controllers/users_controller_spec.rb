require 'spec_helper'

describe UsersController do

  it "creates" do
    name = "Main"
    user = FactoryGirl.create(:user)
    User.stub(:get_user).with(name) { user }

    xhr :post, :create, :name => name

    response.body.should eq "{\"id\":1,\"name\":\"MyString\"}"
  end

end
