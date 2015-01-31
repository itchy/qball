class CreateVisitRecords < ActiveRecord::Migration
  def change
    create_table :visit_records, id: false do |t|
    	t.primary_key :id, :uuid, :default => 'uuid_generate_v4()'
      t.uuid :visit_id
      t.uuid :patient_id
      t.text :data

      t.timestamps
    end
  end
end
