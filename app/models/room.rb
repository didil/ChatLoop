class Room < ActiveRecord::Base
  has_many :users
  has_many :messages

  def self.get_room name
    Room.find_or_create_by(:name => name)
  end

end
