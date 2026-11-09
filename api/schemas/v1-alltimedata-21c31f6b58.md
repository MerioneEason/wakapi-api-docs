# v1.AllTimeData

Type: v1.AllTimeData

Schema: [v1.AllTimeData](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-alltimedata-21c31f6b58.md)

- `is_up_to_date` (optional)
  Type: boolean
  
  true if the stats are up to date; when false, a 202 response code is returned and stats will be refreshed soon>

- `range` (optional)
  Reference: [v1.AllTimeRange](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-alltimerange-f9eae541e7.md); Type: v1.AllTimeRange

- `text` (optional)
  Type: string
  
  total time logged since account created as human readable string>

- `total_seconds` (optional)
  Type: number
  
  total number of seconds logged since account created