ChatLoop::Application.routes.draw do

  resource :rooms
  resource :messages
  resource :users

  root :to => "home#index"

  match '*path', to: 'home#index' ,:via => :all
end
