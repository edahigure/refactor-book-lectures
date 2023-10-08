# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

msg1 = Message.create(text: "Hello world")
msg2 = Message.create(text: "Hello mister")
msg3 = Message.create(text: "good day ")
msg4 = Message.create(text: "good morning ")
msg5 = Message.create(text: "good afternoon")


users = [
  {
    "name": "Edahi Gutierrez",
    "email": "edahigure@gmail.com",
    "phone": "+52 6121078860",
    "password": "123123",
    "role": "teacher",
  },
  {
    "name": "Antonio Reyes",    
    "email": "edahigure@hotmail.com",
    "phone": "+52 1 221 868 4194",
    "password": "123123",
    "role": "admin",
  },
]



users.each do |user|
  User.create(
    name: user[:name],
    email: user[:email],
    password: user[:password],
    phone: user[:phone],
    role: user[:role] )
end