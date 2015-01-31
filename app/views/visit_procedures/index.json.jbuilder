json.array!(@visit_procedures) do |visit_procedure|
  json.extract! visit_procedure, :id, :visit_id, :patient_id, :procedure_id
  json.url visit_procedure_url(visit_procedure, format: :json)
end
