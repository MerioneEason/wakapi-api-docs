# Get heartbeats of user for specified date

`GET /compat/wakatime/v1/users/{user}/heartbeats`

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

- `date` (query, string, required) - Date
  Type: string

- `user` (path, string, required) - Username (or current)
  Type: string

Responses:

- 200: OK

Content type: */*

Type: v1.HeartbeatsResult

Schema: [v1.HeartbeatsResult](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-heartbeatsresult-a519901c6e.md)

- `data` (optional)
  Type: Array<v1.HeartbeatEntry>
  
  Items:
    Reference: [v1.HeartbeatEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-heartbeatentry-098b939fbd.md); Type: v1.HeartbeatEntry

- `end` (optional)
  Type: string

- `start` (optional)
  Type: string

- `timezone` (optional)
  Type: string

- 400: bad date

Content type: */*

Type: string

## Examples

### cURL

```bash
curl -X GET 'https://merioneeason.github.io/compat/wakatime/v1/users/string/heartbeats?date=string' \
  -H 'Authorization: YOUR_TOKEN'
```

### JavaScript

```javascript
const response = await fetch('https://merioneeason.github.io/compat/wakatime/v1/users/string/heartbeats?date=string', {
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
    'https://merioneeason.github.io/compat/wakatime/v1/users/string/heartbeats?date=string',
    headers={
        'Authorization': 'YOUR_TOKEN',
    },
)
print(response.text)
```
