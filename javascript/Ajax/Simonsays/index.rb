get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do

  #Create and return a JSON object with the random cell and color given below.

  cell= rand(1..9)
  color= "#" + "%06x" % (rand * 0xffffff)

  content_type :json
  {cell: cell, color: color}.to_json
end


#you have to specify lines 13 and 14 because the request is json.
#json essentially creates a key-value pair that looks like this...
# "{\"key\":\"hello there\",\"key2\":\"I'm going to become json\",\"key3\":3}"
