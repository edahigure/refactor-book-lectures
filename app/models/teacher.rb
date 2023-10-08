class Teacher < ApplicationRecord
  has_many:courses
  has_many:lectures  
end
