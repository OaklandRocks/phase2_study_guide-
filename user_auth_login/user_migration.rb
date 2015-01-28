class CreateUser < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_hash
    end
  end
end


# must have password_hash, but users will be able to input their password due to the methods in the controller
