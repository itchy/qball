class CreateProviders < ActiveRecord::Migration
  def change
    create_table :providers, id: false do |t|
    	t.primary_key :id, :uuid, :default => 'uuid_generate_v4()'
      t.string :first_name
      t.string :last_name
      t.string :middle_name
      t.column :npi, :bigint

      t.timestamps
    end
  end
end
