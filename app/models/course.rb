class Course < ApplicationRecord
  belongs_to :teacher
  has_many :inscriptions, dependent: :destroy
end
