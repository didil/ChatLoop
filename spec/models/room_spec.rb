require 'spec_helper'

describe Room do
  context "gets room" do
    let(:name){"Main"}

    it "exists" do
      room = FactoryGirl.create(:room, :name => name)
      Room.get_room(name).should eq room
    end

    it "does not exist" do
      expect do
        Room.get_room(name)
      end.to change(Room,:count).by(1)

      Room.last.name.should eq name
    end

  end
end
