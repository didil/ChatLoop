class Room < ActiveRecord::Base
  has_many :users
  has_many :messages

  def self.get_room name
    Room.find_or_create_by(:name => name)
  end

  def on_new_message
    ActiveRecord::Base.connection.execute "LISTEN #{channel}"
    loop do
      ActiveRecord::Base.connection.raw_connection.wait_for_notify do
        yield
      end
    end
  ensure
    ActiveRecord::Base.connection.execute "UNLISTEN #{channel}"
  end

  def channel
    "room_#{id}"
  end

end
