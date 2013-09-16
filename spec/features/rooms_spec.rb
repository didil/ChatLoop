require 'spec_helper'

describe 'chat rooms' do

  it 'go to existing room', :js => true do
    room = "New Room"
    visit "/"
    fill_in "room_name", :with => "New Room"
    fill_in "nickname", :with => "Mike"
    click_button "Go"
    page.should have_content "Welcome to the room: #{room}"
  end

end