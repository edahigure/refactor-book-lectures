class Teacher < ApplicationRecord
  has_many:courses, dependent: :destroy
  has_many:lectures, dependent: :destroy  
end
