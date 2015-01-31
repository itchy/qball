json.array!(@visit_diagnoses) do |visit_diagnosis|
  json.extract! visit_diagnosis, :id, :visit_id, :patient_id, :diagnosis_id
  json.url visit_diagnosis_url(visit_diagnosis, format: :json)
end
