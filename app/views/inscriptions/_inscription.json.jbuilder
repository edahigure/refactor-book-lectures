json.extract! inscription, :id, :user_id, :course_id, :payment, :paid, :removed, :created_at, :updated_at
json.url inscription_url(inscription, format: :json)
