json.array!(@patients) do |patient|
  json.extract! patient, :id, :first_name, :last_name, :middle_name, :ssn, :dob
  json.url patient_url(patient, format: :json)
end
