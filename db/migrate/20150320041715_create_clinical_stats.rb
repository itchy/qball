class CreateClinicalStats < ActiveRecord::Migration
  def change
    create_table :clinical_stats, id: false do |t|
    	t.primary_key :id, :uuid, :default => 'uuid_generate_v4()'
      t.string :trackable_type
      t.uuid :trackable_id
      t.column :data_set, :json

      t.timestamps
    end
  end
end
