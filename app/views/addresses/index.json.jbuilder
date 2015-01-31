json.array!(@addresses) do |address|
  json.extract! address, :id, :address1, :address2, :city, :county, :state_prov, :zip_code, :country, :addressable_type, :addressable_id
  json.url address_url(address, format: :json)
end
