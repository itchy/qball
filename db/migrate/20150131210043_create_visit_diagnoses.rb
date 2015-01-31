class CreateVisitDiagnoses < ActiveRecord::Migration
  def change
    create_table :visit_diagnoses, id: false do |t|
    	t.primary_key :id, :uuid, :default => 'uuid_generate_v4()'
      t.uuid :visit_id
      t.uuid :patient_id
      t.uuid :diagnosis_id

      t.timestamps
    end
  end
end
