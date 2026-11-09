# Retrieve summary for all time

`GET /compat/wakatime/v1/users/{user}/all_time_since_today`

Mimics https://wakatime.com/developers#all_time_since_today

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

Responses:

- 200: OK

Content type: application/json

Type: v1.AllTimeViewModel

Schema: [v1.AllTimeViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-alltimeviewmodel-1a081651e3.md)

- `data` (optional)
  Reference: [v1.AllTimeData](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-alltimedata-21c31f6b58.md); Type: v1.AllTimeData

## Examples

### cURL

```bash
curl -X GET 'https://merioneeason.github.io/compat/wakatime/v1/users/string/all_time_since_today' \
  -H 'Authorization: YOUR_TOKEN'
```

### JavaScript

```javascript
const response = await fetch('https://merioneeason.github.io/compat/wakatime/v1/users/string/all_time_since_today', {
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
    'https://merioneeason.github.io/compat/wakatime/v1/users/string/all_time_since_today',
    headers={
        'Authorization': 'YOUR_TOKEN',
    },
)
print(response.text)
```
