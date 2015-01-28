Six Types:
* belongs_to
* has_one
* has_many
* has_many :through
* has_one :through
* has_and_belongs_to_many




belongs_to
 * one-to-one connection with another model, declaring model "belongs to" one instance of the other model
 * belongs_to associations must use the singular term. If you used the pluralized form in the above example for the customer association in the Order model, you would be told that there was an "uninitialized constant Order::Customers". This is because Rails automatically infers the class name from the association name. If the association name is wrongly pluralized, then the inferred class will be wrongly pluralized too.


has_one
 * also sets up a one-to-one connection with another model, but with somewhat different semantics (and consequences)
 * This association indicates that each instance of a model contains or possesses one instance of another model
 * class Customer < ActiveRecord::Base
  has_many :orders
end

has_many
 * one-to-many connection with another model. You'll often find this association on the "other side" of a belongs_to association.
 * This association indicates that each instance of the model has zero or more instances of another model
 * The name of the other model is pluralized when declaring a has_many association (Customer has_many :orders)


has_many :through
 * often used to set up a many-to-many connection with another model. This association indicates that the declaring model can be matched with zero or more instances of another model by proceeding through a third model
 * Automatic deletion of join models is direct, no destroy callbacks are triggered.
 * class Physician < ActiveRecord::Base
  has_many :appointments
  has_many :patients, through: :appointments
end

class Appointment < ActiveRecord::Base
  belongs_to :physician
  belongs_to :patient
end

class Patient < ActiveRecord::Base
  has_many :appointments
  has_many :physicians, through: :appointments
end



has_one :through
 * sets up a one-to-one connection with another model
 * This association indicates that the declaring model can be matched with one instance of another model by proceeding through a third model.
 * class Supplier < ActiveRecord::Base
  has_one :account
  has_one :account_history, through: :account
end

class Account < ActiveRecord::Base
  belongs_to :supplier
  has_one :account_history
end

class AccountHistory < ActiveRecord::Base
  belongs_to :account
end


has_and_belongs_to_many
 * creates a direct many-to-many connection with another model, with no intervening model.
 *  your application includes assemblies and parts, with each assembly having many parts and each part appearing in many assemblies, you could declare the models this way:'
 * class Assembly < ActiveRecord::Base
  has_and_belongs_to_many :parts
end

class Part < ActiveRecord::Base
  has_and_belongs_to_many :assemblies
end




