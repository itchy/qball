class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses, id: false do |t|
      t.primary_key :id, :uuid, :default => 'uuid_generate_v4()'
      t.string :addressable_type
      t.uuid :addressable_id
      t.string :address1
      t.string :address2
      t.string :city
      t.string :county
      t.string :state_prov
      t.column :zip_code, :bigint
      t.string :country

      t.timestamps
    end
  end
end
