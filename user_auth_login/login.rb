
enable :sessions

get '/' do
  redirect "/login"
end

get '/login' do
  erb :login
end

get '/users/new' do
  erb :new_user
end

post '/login' do
  @current_user = User.find_by(email: params[:email])
  if @current_user = User.authenticate(params[:email], params[:password])
    session[:user_id] = @current_user.id
    redirect "/show_all_users"
  else
    @message = "Invalid login credentials. Please try again."
    erb :login
  end
end

post '/users/new' do
  user = User.new(email: params[:name],
                  name: params[:name],
                  password: params[:password])

  redirect "/users"
end

# must enable sessions so you can use restful routes and have users actually login and save data
