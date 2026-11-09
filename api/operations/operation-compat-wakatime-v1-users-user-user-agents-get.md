# List of unique user agents for given user.

`GET /compat/wakatime/v1/users/{user}/user_agents`

Mimics https://wakatime.com/developers#user_agents

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

Type: v1.UserAgentsViewModel

Schema: [v1.UserAgentsViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-useragentsviewmodel-d67192c07f.md)

- `data` (optional)
  Type: Array<v1.UserAgentEntry>
  
  Items:
    Reference: [v1.UserAgentEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-useragententry-0cb80eb31e.md); Type: v1.UserAgentEntry

- `total_pages` (optional)
  Type: integer

## Examples

### cURL

```bash
curl -X GET 'https://merioneeason.github.io/compat/wakatime/v1/users/string/user_agents' \
  -H 'Authorization: YOUR_TOKEN'
```

### JavaScript

```javascript
const response = await fetch('https://merioneeason.github.io/compat/wakatime/v1/users/string/user_agents', {
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
    'https://merioneeason.github.io/compat/wakatime/v1/users/string/user_agents',
    headers={
        'Authorization': 'YOUR_TOKEN',
    },
)
print(response.text)
```
