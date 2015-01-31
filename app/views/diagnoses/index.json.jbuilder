json.array!(@diagnoses) do |diagnosis|
  json.extract! diagnosis, :id, :icd_code, :icd_description, :icd_version
  json.url diagnosis_url(diagnosis, format: :json)
end
