json.extract! teacher, :id, :name, :email, :phone, :role, :created_at, :updated_at
json.url teacher_url(teacher, format: :json)
