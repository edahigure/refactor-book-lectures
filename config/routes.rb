Rails.application.routes.draw do
  resources :inscriptions
  resources :reservations
  resources :courses
  resources :teachers
  resources :lectures
  devise_for :users
  get 'root/index'
  resources :mesages
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :messages
      resources :lectures
      resources :users, only: [:index, :show] do
        resources :reservations, only: [:index, :create, :update, :destroy]
      end
    end
  end

  root 'root#index'
end
