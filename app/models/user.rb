class User < ActiveRecord::Base
  has_many :messages

  def self.get_user name
    User.find_or_create_by(:name => name)
  end

end
