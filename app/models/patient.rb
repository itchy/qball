class Patient < ActiveRecord::Base

	class << self
		#TODO This is WAY to manual should look at using helpers like sanitize_sql_array
		#  Edge Rails has active record support for JSON queries
		#  WellnessStat.where("data_set->>'type' = ?", "Heart Rate")
		
		#  Patient.get_wellness_stats('patient', 'fd58ef1c-86e2-4a7b-8d35-cc4786d533fc', ["Heart Rate"])
		def get_wellness_stats(kind, id, types, start = '1900-01-01', stop ='2200-01-01', min = -1_000, max = 1_000)
			where_types = prepare_where_types(types)
			params = ["text","uuid", "date", "date", "int", "int"]
			args   = [kind,id,start, stop, min, max]
			if types.present?
				types.each do |t| 
					params << "text"
					args << t
				end
			end
			args.map! {|a| "'#{a}'"}
			deallocate
			sql = "PREPARE get_wellness_stats(#{params.join(',')}) AS
								SELECT * FROM 
								(SELECT *, data_set::json->>'type' as type, data_set::json->>'value' as value
									FROM wellness_stats
										WHERE trackable_type = $1 
										AND trackable_id = $2
										AND created_at BETWEEN $3 AND $4
								ORDER BY created_at DESC) t1
									#{where_types}
									AND CAST(t1.value as int) BETWEEN $5 AND $6;"
			ActiveRecord::Base.connection.execute(sql)			
			stats = WellnessStat.connection.select_all("EXECUTE get_wellness_stats(#{args.join(',')});")
			# wrap results in WellnessStat object
			patient_stats = []
			stats.each do |stat|
				patient_stat = WellnessStat.new()
				patient_stat.id = stat["id"]
				patient_stat.trackable_type = stat["trackable_type"]
				patient_stat.trackable_id = stat["trackable_id"]
				patient_stat.data_set = stat["data_set"]
				if stat["created_at"].present?
					patient_stat.created_at = stat["created_at"].to_datetime
				end
				if stat["updated_at"].present?
					patient_stat.updated_at = stat["updated_at"].to_datetime
				end
				patient_stats << patient_stat
			end
			return patient_stats 
			# r = self.sanitize_sql_array(["SELECT MONTH(created) AS month, YEAR(created) AS year FROM orders WHERE created>=? AND created<=? GROUP BY month ORDER BY month ASC", created1, created2])
			# self.connection.select_all r
		end

		def deallocate
			ActiveRecord::Base.connection.execute("DEALLOCATE get_wellness_stats;")
			rescue
		end

		def prepare_where_types(types)
			return "WHERE true" unless types.present?
			or_types = []
			types.each_with_index do |type, i|
				or_types << "t1.type=$#{7+i}"
			end

			"WHERE(" + or_types.join(' OR ') + ")"
		end
	end
end
