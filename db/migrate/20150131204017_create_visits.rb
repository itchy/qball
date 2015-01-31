class CreateVisits < ActiveRecord::Migration
  def change
    create_table :visits, id: false do |t|
    	t.primary_key :id, :uuid, :default => 'uuid_generate_v4()'
      t.uuid :patient_id
      t.uuid :provider_id
      t.uuid :facility_id
      t.string :visit_kind
      t.date :date

      t.timestamps
    end
  end
end
