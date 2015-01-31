json.array!(@visits) do |visit|
  json.extract! visit, :id, :patient_id, :provider_id, :facility_id, :date
  json.url visit_url(visit, format: :json)
end
