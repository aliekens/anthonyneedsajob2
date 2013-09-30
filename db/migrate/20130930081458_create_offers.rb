class CreateOffers < ActiveRecord::Migration
  def change
    create_table :offers do |t|
      t.string :challenge
      t.string :requirement
      t.string :budget
      t.string :organization
      t.string :name
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end
