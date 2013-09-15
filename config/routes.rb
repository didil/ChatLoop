ChatLoop::Application.routes.draw do

  scope "/api" do
    resources :rooms
    resources :messages
    resources :users
  end


  root :to => "home#index"

  match '*path', to: 'home#index' ,:via => :all
end
