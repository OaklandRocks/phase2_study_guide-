class User < ActiveRecord::Base

  def password
    BCrypt::Password.new(self.password_hash)
  end

  def password=(input)
    self.password_hash = BCrypt::Password.create(input)
  end

  def self.authenticate(user_email, password_attempt)
    user = User.find_by(email: user_email)
    return user if user && user.password == password_attempt
  end

end


# Need to have these three methods as well as validations


REQUIRED:

Gemfile: gem 'bcrypt'
environment: require 'bcrypt'

routes: enable :sessions
