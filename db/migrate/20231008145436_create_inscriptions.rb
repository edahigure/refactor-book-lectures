class CreateInscriptions < ActiveRecord::Migration[7.0]
  def change
    create_table :inscriptions do |t|
      t.references :user, null: false, foreign_key: true
      t.references :course, null: false, foreign_key: true
      t.decimal :payment
      t.boolean :paid
      t.boolean :cancelled

      t.timestamps
    end
  end
end
