class CreatePharmacies < ActiveRecord::Migration
  def change
    create_table :pharmacies, id: false do |t|
    	t.primary_key :id, :uuid, :default => 'uuid_generate_v4()'
      t.string :name

      t.timestamps
    end
  end
end
