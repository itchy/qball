json.array!(@facilities) do |facility|
  json.extract! facility, :id, :name, :npi
  json.url facility_url(facility, format: :json)
end
