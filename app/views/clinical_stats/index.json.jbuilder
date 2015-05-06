json.array!(@clinical_stats) do |clinical_stat|
  json.extract! clinical_stat, :id, :string, :uuid, :json
  json.url clinical_stat_url(clinical_stat, format: :json)
end
