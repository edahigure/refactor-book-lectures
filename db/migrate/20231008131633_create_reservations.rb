class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.references :user, null: false, foreign_key: true
      t.references :lecture, null: false, foreign_key: true
      t.datetime :date
      t.string :place
      t.decimal :payment
      t.boolean :paid
      t.boolean :removed

      t.timestamps
    end
  end
end
