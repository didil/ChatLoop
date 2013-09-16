class MessageSerializer < ActiveModel::Serializer
  attributes :id ,:content , :created_at , :user_nickname

  def user_nickname
    object.user_name
  end

  def created_at
   "#{ApplicationController.helpers.time_ago_in_words(object.created_at)} ago"
  end

end
