# Retrieve summary for statusbar

`GET /users/{user}/statusbar/today`

Mimics https://wakatime.com/api/v1/users/current/statusbar/today. Have no official documentation

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

Type: v1.StatusBarViewModel

Schema: [v1.StatusBarViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-statusbarviewmodel-50b8536152.md)

- `cached_at` (optional)
  Type: string

- `data` (optional)
  Reference: [v1.SummariesData](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesdata-56360af692.md); Type: v1.SummariesData

## Examples

### cURL

```bash
curl -X GET 'https://merioneeason.github.io/users/string/statusbar/today' \
  -H 'Authorization: YOUR_TOKEN'
```

### JavaScript

```javascript
const response = await fetch('https://merioneeason.github.io/users/string/statusbar/today', {
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
    'https://merioneeason.github.io/users/string/statusbar/today',
    headers={
        'Authorization': 'YOUR_TOKEN',
    },
)
print(response.text)
```
