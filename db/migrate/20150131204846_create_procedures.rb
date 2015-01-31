class CreateProcedures < ActiveRecord::Migration
  def change
    create_table :procedures, id: false do |t|
    	t.primary_key :id, :uuid, :default => 'uuid_generate_v4()'
      t.string :cpt_code
      t.string :cpt_description
      t.string :cpt_version

      t.timestamps
    end
  end
end
