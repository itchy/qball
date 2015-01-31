class FacilitiesProviders < ActiveRecord::Migration
  def change
  	create_table :facilities_providers, id: false do |t|
      t.primary_key :id, :uuid, :default => 'uuid_generate_v4()'
      t.uuid :facility_id
      t.uuid :provider_id

      t.timestamps
    end
  end
end
