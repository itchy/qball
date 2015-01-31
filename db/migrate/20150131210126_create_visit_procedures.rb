class CreateVisitProcedures < ActiveRecord::Migration
  def change
    create_table :visit_procedures, id: false do |t|
    	t.primary_key :id, :uuid, :default => 'uuid_generate_v4()'
      t.uuid :visit_id
      t.uuid :patient_id
      t.uuid :procedure_id

      t.timestamps
    end
  end
end
