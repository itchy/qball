class CreateDiagnoses < ActiveRecord::Migration
  def change
    create_table :diagnoses, id: false do |t|
    	t.primary_key :id, :uuid, :default => 'uuid_generate_v4()'
      t.string :icd_code
      t.string :icd_description
      t.string :icd_version

      t.timestamps
    end
  end
end
