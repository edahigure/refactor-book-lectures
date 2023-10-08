class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :image_url
      t.string :description
      t.string :web_link
      t.decimal :price
      t.datetime :end_date
      t.datetime :start_date
      t.boolean :removed
      t.references :teacher, null: false, foreign_key: true

      t.timestamps
    end
  end
end
