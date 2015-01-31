class ProvidersInsurances < ActiveRecord::Migration
  def change
  	create_table :providers_insurances, id: false do |t|
      t.primary_key :id, :uuid, :default => 'uuid_generate_v4()'
      t.uuid :provider_id
      t.uuid :insurance_id
      t.string :billing_id

      t.timestamps
    end
  end
end
