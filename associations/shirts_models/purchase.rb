class Purchase < ActiveRecord::Base
  belongs_to :purchaser, class_name: "User"
  belongs_to :shirt
end
