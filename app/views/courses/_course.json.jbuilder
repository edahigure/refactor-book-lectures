json.extract! course, :id, :name, :image_url, :description, :web_link, :price, :duration, :start_date, :removed, :teacher_id, :created_at, :updated_at
json.url course_url(course, format: :json)
