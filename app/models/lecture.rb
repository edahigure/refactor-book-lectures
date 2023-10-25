class Lecture < ApplicationRecord
  belongs_to :teacher
  has_many :reservations, dependent: :destroy
end
