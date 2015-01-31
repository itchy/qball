json.array!(@pharmacies) do |pharmacy|
  json.extract! pharmacy, :id, :name
  json.url pharmacy_url(pharmacy, format: :json)
end
