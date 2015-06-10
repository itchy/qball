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


icd9File = "/opt/medici/qball/db/icd9.csv"
cptFile = "/opt/medici/qball/db/cpt.csv"

CSV.foreach(icd9File) do |row|
	d = Diagnosis.new
	d.icd_code = row[0]
	d.icd_description = row[1]
	d.icd_version = row[2]
	ds << d
end

CSV.foreach(cptFile) do |row|
	p = Procedure.new
	p.cpt_code = row[0]
	p.cpt_description = row[1]
	p.cpt_version = "4"
	ps << p
end
