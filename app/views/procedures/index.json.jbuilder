json.array!(@procedures) do |procedure|
  json.extract! procedure, :id, :cpt_code, :cpt_description, :cpt_version
  json.url procedure_url(procedure, format: :json)
end
