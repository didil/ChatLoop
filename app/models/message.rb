class Message < ActiveRecord::Base
  belongs_to :user
  belongs_to :room

  def self.for_room room_id
    Message.where(:room_id => room_id).limit(50)
  end
end
