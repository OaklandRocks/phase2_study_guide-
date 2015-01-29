
get '/surveys/new' do
  erb :"surveys/_survey_new_partial", :layout => false
end

get '/surveys/:id' do
  @survey = Survey.find(params[:id])
  erb :'surveys/show'
end

get '/surveys/:id/edit' do
  @survey = Survey.find(params[:id])
  erb :'surveys/edit'
end

get '/surveys/:id/show' do
  @survey = Survey.find(params[:id])
  erb :'surveys/show'
end

get '/surveys/:id/distribute' do
  @survey = Survey.find(params[:id])
  erb :'surveys/distribute'
end

post '/surveys' do
  survey=Survey.create(title: params[:title], creator_id: session[:user_id])
  puts params
  redirect "/surveys/#{survey.id}/edit"
end

post '/surveys/:id/questions' do
  survey=Survey.find(params[:id])
  question=Question.create(question_text: params[:question_text], survey_id: survey.id)
  Option.create(option_text: params[:option1_text], question_id: question.id)
  Option.create(option_text: params[:option2_text], question_id: question.id)
  Option.create(option_text: params[:option3_text], question_id: question.id)
  Option.create(option_text: params[:option4_text], question_id: question.id)
  puts params
  if params[:finish]
  redirect "/surveys/#{survey.id}/show"
  else
    redirect "/surveys/#{survey.id}/edit"
  end
end

post '/surveys/:id/distribute' do
  survey=Survey.find(params[:id])
  redirect "/surveys/#{survey.id}/distribute"
end


delete '/surveys/:id' do
  survey = Survey.find(params[:id])
  user = User.find(survey.creator_id)
  survey.destroy
  redirect "/users/#{user.id}"
end
