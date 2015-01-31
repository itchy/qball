json.array!(@insurances) do |insurance|
  json.extract! insurance, :id, :name
  json.url insurance_url(insurance, format: :json)
end
