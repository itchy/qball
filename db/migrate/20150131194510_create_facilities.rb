class CreateFacilities < ActiveRecord::Migration
  def change
    create_table :facilities do |t|
      t.string :name
      t.column :npi, :bigint

      t.timestamps
    end
  end
end
