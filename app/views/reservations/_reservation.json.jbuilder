json.extract! reservation, :id, :user_id, :lecture_id, :date, :place, :payment, :paid, :removed, :created_at, :updated_at
json.url reservation_url(reservation, format: :json)
