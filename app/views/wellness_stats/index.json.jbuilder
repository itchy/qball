json.array!(@wellness_stats) do |wellness_stat|
  json.extract! wellness_stat, :id, :string, :uuid, :json
  json.url wellness_stat_url(wellness_stat, format: :json)
end
