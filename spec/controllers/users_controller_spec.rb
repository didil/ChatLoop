require 'spec_helper'

describe UsersController do
  render_views

  it "creates" do
    name = "Main"
    user_json = "json"
    user = double(:to_json => user_json)
    User.stub(:get_user).with(name) { user }

    xhr :post, :create, :name => name

    response.body.should eq user_json
  end

end
