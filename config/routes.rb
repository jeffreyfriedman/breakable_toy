Rails.application.routes.draw do
  devise_for :users
  # devise_scope :user do
  #   root to: "devise/registrations#edit"
  # end

  root 'static_pages#index'
end
