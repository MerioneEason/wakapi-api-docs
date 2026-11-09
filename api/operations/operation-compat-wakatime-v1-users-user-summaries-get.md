# Retrieve WakaTime-compatible summaries

`GET /compat/wakatime/v1/users/{user}/summaries`

Mimics https://wakatime.com/developers#summaries.

Authentication (security requirement alternatives):

```json
[
  {
    "ApiKeyAuth": []
  }
]
```

- ApiKeyAuth: apiKey, header Authorization

Parameters:

- `user` (path, string, required) - User ID to fetch data for (or 'current')
  Type: string

- `range` (query, string, optional) - Range interval identifier
  Type: string
  
  enum: ["today","yesterday","week","month","year","7_days","last_7_days","30_days","last_30_days","6_months","last_6_months","12_months","last_12_months","last_year","any","all_time"]

- `start` (query, string, optional) - Start date (e.g. '2021-02-07')
  Type: string

- `end` (query, string, optional) - End date (e.g. '2021-02-08')
  Type: string

- `project` (query, string, optional) - Project to filter by
  Type: string

- `language` (query, string, optional) - Language to filter by
  Type: string

- `editor` (query, string, optional) - Editor to filter by
  Type: string

- `operating_system` (query, string, optional) - OS to filter by
  Type: string

- `machine` (query, string, optional) - Machine to filter by
  Type: string

- `label` (query, string, optional) - Project label to filter by
  Type: string

Responses:

- 200: OK

Content type: application/json

Type: v1.SummariesViewModel

Schema: [v1.SummariesViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesviewmodel-a34e1ba44f.md)

- `cumulative_total` (optional)
  Reference: [v1.SummariesCumulativeTotal](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariescumulativetotal-b01a3ace0a.md); Type: v1.SummariesCumulativeTotal

- `daily_average` (optional)
  Reference: [v1.SummariesDailyAverage](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesdailyaverage-311c81335c.md); Type: v1.SummariesDailyAverage

- `data` (optional)
  Type: Array<v1.SummariesData>
  
  Items:
    Reference: [v1.SummariesData](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesdata-56360af692.md); Type: v1.SummariesData

- `end` (optional)
  Type: string

- `start` (optional)
  Type: string

## Examples

### cURL

```bash
curl -X GET 'https://merioneeason.github.io/compat/wakatime/v1/users/string/summaries' \
  -H 'Authorization: YOUR_TOKEN'
```

### JavaScript

```javascript
const response = await fetch('https://merioneeason.github.io/compat/wakatime/v1/users/string/summaries', {
  method: 'GET',
  headers: {
    'Authorization': 'YOUR_TOKEN',
  },
});

const data = await response.text();
```

### Python

```python
import requests

response = requests.get(
    'https://merioneeason.github.io/compat/wakatime/v1/users/string/summaries',
    headers={
        'Authorization': 'YOUR_TOKEN',
    },
)
print(response.text)
```
