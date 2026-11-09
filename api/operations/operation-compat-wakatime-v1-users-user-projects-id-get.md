# Retrieve a single project

`GET /compat/wakatime/v1/users/{user}/projects/{id}`

Mimics undocumented endpoint related to https://wakatime.com/developers#projects

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

- `id` (path, string, required) - Project ID to fetch
  Type: string

Responses:

- 200: OK

Content type: application/json

Type: v1.ProjectViewModel

Schema: [v1.ProjectViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-projectviewmodel-8ea550aca8.md)

- `data` (optional)
  Reference: [v1.Project](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-project-f03d608c26.md); Type: v1.Project

## Examples

### cURL

```bash
curl -X GET 'https://merioneeason.github.io/compat/wakatime/v1/users/string/projects/string' \
  -H 'Authorization: YOUR_TOKEN'
```

### JavaScript

```javascript
const response = await fetch('https://merioneeason.github.io/compat/wakatime/v1/users/string/projects/string', {
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
    'https://merioneeason.github.io/compat/wakatime/v1/users/string/projects/string',
    headers={
        'Authorization': 'YOUR_TOKEN',
    },
)
print(response.text)
```
