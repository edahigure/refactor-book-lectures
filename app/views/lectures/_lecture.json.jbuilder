json.extract! lecture, :id, :name, :image_url, :description, :web_link, :price, :removed, :teacher_id, :created_at, :updated_at
json.url lecture_url(lecture, format: :json)
