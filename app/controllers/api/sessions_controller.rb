class Api::SessionsController < ApplicationController


  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render "api/users/show"
    else
      # render json: ["Invalid username/password combination"], status: 401
      render json: { login: ["Invalid username/password"] }, status: 401
    end
  end

  def destroy
    # debugger
    @user = current_user
    if @user
      logout!
      render json: {}
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

end
