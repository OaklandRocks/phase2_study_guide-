get '/' do
  @events = Event.all
  erb :index
end

get '/events/:id/show' do
  @event = Event.find(params[:id])
  erb :event_show
end

get '/events/new' do
  erb :new
end

post '/events/create' do
  @new_event = Event.new(params[:event])
  puts params[:event]
  if @new_event.valid?
    @new_event.save
    redirect "/events/#{@new_event.id}/show"
  else
    @message = @new_event.errors.full_messages
    erb :new
  end
end


# Make sure to put @messages in the view and do full_messages as the error message, it will return all the error messages from the validations in the model
