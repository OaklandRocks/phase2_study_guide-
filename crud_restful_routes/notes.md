| CRUD | HTTP Verb |
| --------| ---------|
| Create | POST (or PUT with a new URI) |
| Read | GET |
| Update | PUT or PATCH (with an existing URI) |
| Delete | DELETE |

PUT/PATCH and DELETE are not supported by browsers
You need to fake out your browser in order to use them

```html
<form action=”/dogs” method=”POST”>
  <input type=”hidden” name=”_method” value=”DELETE”>
  <input type=”submit” value=”Delete this dog”>
</form>
```


| CRUD | Request Type | Path | Purpose |
| -----| ------- | ------- | -----------|
| Read | GET | /resources | list resources (index page) |
| Read | GET | /resources/new | form for resource |
| Create | POST | /resources | new resource |
| Read | GET | /resources/:id | specific resource (show page) |
| Read | GET | /resources/:id/:edit | edit form |
| Update | PUT | /resources/:id | update resources |
| Delete | DELETE | /resources/:id | delete resources |



Two resources


| CRUD | Request Type | Path | Purpose |
| -----| ------- | ------- | -----------|
| Read | GET | /restaurants/:restaurant_id/reviews | list resources (index page) |
| Read | GET | /restaurants/:restaurant_id/reviews/new | form for resource |
| Create | POST | /restaurants/:restaurant_id/reviews | new resource |
| Read | GET | /restaurants/:restaurant_id/reviews/:id | specific resource (show page) |
| Read | GET | /restaurants/:restaurant_id/reviews/:id/:edit | edit form |
| Update | PUT | /restaurants/:restaurant_id/reviews/:id | update resources |
| Delete | DELETE | /restaurants/:restaurant_id/reivews/:id | delete resources |

HELPER FILE:

For sessions/user log-in shit:

```ruby
helpers do
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end
end
```


Example Routes from Multi-User Blog Challenge

```ruby
enable :sessions

get '/' do
  @user = User.find_by(id: session[:user_id])
  @all_entries = Entry.all
  erb :index
end

get '/signout' do
  session.clear
  redirect '/'
end

get '/user/:id/entries' do
  @user = User.find_by(id: session[:user_id])
  @user_entries = @user.entries
  erb :user_entry
end

get '/entry/:id/edit' do
  @entry = Entry.find_by(id: params[:id])
  erb :edit
end

get '/entry/new' do
  erb :new_post
end

post '/entry' do
  entry = Entry.create(user_id: session[:user_id],title: params[:title], content: params[:content])
  redirect '/'
end

put '/entry/:id/edit' do
  user = User.find_by(id: session[:user_id])

  @entry = Entry.find_by(id: params[:id])
  @entry.update_attributes(title: params[:title], content: params[:content])
  redirect "/user/#{user.id}/entries"
end

delete '/entry/:id/delete' do
  @entry = Entry.find_by(id: params[:id])
  @entry.destroy
  redirect '/'
end

post '/login' do
  @current_user = User.find_by(username: params[:username])
  if @current_user = User.authenticate(params[:username], params[:password])
    session[:user_id] = @current_user.id
    redirect '/'
  else
    @login_error = "Invalid username or password"
    erb :index
  end
end
```


