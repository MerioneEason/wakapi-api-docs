# Retrieve the given user

`GET /compat/wakatime/v1/users/{user}`

Mimics https://wakatime.com/developers#users

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

- `user` (path, string, required) - User ID to fetch (or 'current')
  Type: string

Responses:

- 200: OK

Content type: application/json

Type: v1.UserViewModel

Schema: [v1.UserViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-userviewmodel-259ed4bd55.md)

- `data` (optional)
  Reference: [v1.User](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-user-d38c47dfa9.md); Type: v1.User

## Examples

### cURL

```bash
curl -X GET 'https://merioneeason.github.io/compat/wakatime/v1/users/string' \
  -H 'Authorization: YOUR_TOKEN'
```

### JavaScript

```javascript
const response = await fetch('https://merioneeason.github.io/compat/wakatime/v1/users/string', {
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
    'https://merioneeason.github.io/compat/wakatime/v1/users/string',
    headers={
        'Authorization': 'YOUR_TOKEN',
    },
)
print(response.text)
```
