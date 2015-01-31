# CREATE EXTENSION "uuid-ossp";

class CreatePatients < ActiveRecord::Migration
  def change
    create_table :patients, id: false do |t|
      t.primary_key :id, :uuid, :default => 'uuid_generate_v4()'
      t.string :first_name
      t.string :last_name
      t.string :middle_name
      t.column :ssn, :bigint
      t.date :dob

      t.timestamps
    end
  end
end
