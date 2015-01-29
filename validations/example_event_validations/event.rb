class Event < ActiveRecord::Base


  validates :date, presence: :true
  validate :date_cannot_be_in_the_past
  validate :date_is_a_date

  validates :title, presence: :true, uniqueness: :true
  validates :organizer_name, presence: :true
  validates :organizer_email, presence: :true

  validate :email_is_valid


  def date_cannot_be_in_the_past
    if date.present? && date < Date.today
      errors.add(:date, "Event date cannot be in the past")
    end
  end

  def date_is_a_date
    if !date.is_a?(Date)
      errors.add(:date, "Must be a valid date")
    end
  end

  def email_is_valid
    unless organizer_email =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
      errors.add(:organizer_email, "Must be a valid email")
    end
  end
end

# Must hadd errors.add for each custom validation. Typical validations come with error messages based on what the attributes of the validation are
# When you have event.errors.full_messages, it will print out all of those, PLUS the custom ones
