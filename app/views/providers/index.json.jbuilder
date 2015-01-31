json.array!(@providers) do |provider|
  json.extract! provider, :id, :first_name, :last_name, :middle_name, :npi
  json.url provider_url(provider, format: :json)
end
