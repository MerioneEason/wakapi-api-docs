# Retrieve statistics for a given user

`GET /compat/wakatime/v1/users/{user}/stats/{range}`

Mimics https://wakatime.com/developers#stats

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

- `range` (path, string, required) - Range interval identifier
  Type: string
  
  enum: ["today","yesterday","week","month","year","7_days","last_7_days","30_days","last_30_days","6_months","last_6_months","12_months","last_12_months","last_year","any","all_time"]

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

Type: v1.StatsViewModel

Schema: [v1.StatsViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-statsviewmodel-75c04f9e1c.md)

- `data` (optional)
  Reference: [v1.StatsData](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-statsdata-13d21281ba.md); Type: v1.StatsData

## Examples

### cURL

```bash
curl -X GET 'https://merioneeason.github.io/compat/wakatime/v1/users/string/stats/today' \
  -H 'Authorization: YOUR_TOKEN'
```

### JavaScript

```javascript
const response = await fetch('https://merioneeason.github.io/compat/wakatime/v1/users/string/stats/today', {
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
    'https://merioneeason.github.io/compat/wakatime/v1/users/string/stats/today',
    headers={
        'Authorization': 'YOUR_TOKEN',
    },
)
print(response.text)
```
