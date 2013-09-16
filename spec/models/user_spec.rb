require 'spec_helper'

describe User do
  context "gets user" do
    let(:name){"Main"}

    it "exists" do
      user = FactoryGirl.create(:user, :name => name)
      User.get_user(name).should eq user
    end

    it "does not exist" do
      expect do
        User.get_user(name)
      end.to change(User,:count).by(1)

      User.last.name.should eq name
    end

  end
end
