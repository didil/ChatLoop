ChatLoop::Application.routes.draw do

  scope "/api" do
    resources :rooms
    resources :messages
    resources :users

    post "users/sign_out", to: "users#sign_out"
    get "stream/messages", to: "stream#messages"
    get "stream/users", to: "stream#users"
  end

  root :to => "home#index"

  match '*path', to: 'home#index', :via => :all
end
