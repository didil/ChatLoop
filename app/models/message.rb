class Message < ActiveRecord::Base
  belongs_to :user
  belongs_to :room

  def self.for_room room_id
    Message.where(:room_id => room_id).limit(50).includes(:user)
  end

  def user_name
    user ? user.name : "Anonymous"
  end

  after_create :notify_new_message

  def notify_new_message
    ActiveRecord::Base.connection.execute "NOTIFY #{channel}"
  end

  private
  def channel
    "room_#{room_id}"
  end

end
