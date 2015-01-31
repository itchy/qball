json.array!(@visit_records) do |visit_record|
  json.extract! visit_record, :id, :visit_id, :patient_id, :data
  json.url visit_record_url(visit_record, format: :json)
end
