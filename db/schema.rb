# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150131210126) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "uuid-ossp"

  create_table "addresses", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.string   "addressable_type"
    t.uuid     "addressable_id"
    t.string   "address1"
    t.string   "address2"
    t.string   "city"
    t.string   "county"
    t.string   "state_prov"
    t.integer  "zip_code",         limit: 8
    t.string   "country"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "diagnoses", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.string   "icd_code"
    t.string   "icd_description"
    t.string   "icd_version"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "facilities", force: true do |t|
    t.string   "name"
    t.integer  "npi",        limit: 8
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "facilities_providers", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.uuid     "facility_id"
    t.uuid     "provider_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "insurances", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "patients", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "middle_name"
    t.integer  "ssn",         limit: 8
    t.date     "dob"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "pharmacies", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "procedures", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.string   "cpt_code"
    t.string   "cpt_description"
    t.string   "cpt_version"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "providers", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "middle_name"
    t.integer  "npi",         limit: 8
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "providers_insurances", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.uuid     "provider_id"
    t.uuid     "insurance_id"
    t.string   "billing_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "visit_diagnoses", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.uuid     "visit_id"
    t.uuid     "patient_id"
    t.uuid     "diagnosis_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "visit_procedures", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.uuid     "visit_id"
    t.uuid     "patient_id"
    t.uuid     "procedure_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "visit_records", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.uuid     "visit_id"
    t.uuid     "patient_id"
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "visits", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.uuid     "patient_id"
    t.uuid     "provider_id"
    t.uuid     "facility_id"
    t.string   "visit_kind"
    t.date     "date"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
