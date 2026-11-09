# Retrieve and filter the user's projects

`GET /compat/wakatime/v1/users/{user}/projects`

Mimics https://wakatime.com/developers#projects

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

- `q` (query, string, optional) - Query to filter projects by
  Type: string

Responses:

- 200: OK

Content type: application/json

Type: v1.ProjectsViewModel

Schema: [v1.ProjectsViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-projectsviewmodel-6e85219321.md)

- `data` (optional)
  Type: Array<v1.Project>
  
  Items:
    Reference: [v1.Project](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-project-f03d608c26.md); Type: v1.Project

## Examples

### cURL

```bash
curl -X GET 'https://merioneeason.github.io/compat/wakatime/v1/users/string/projects' \
  -H 'Authorization: YOUR_TOKEN'
```

### JavaScript

```javascript
const response = await fetch('https://merioneeason.github.io/compat/wakatime/v1/users/string/projects', {
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
    'https://merioneeason.github.io/compat/wakatime/v1/users/string/projects',
    headers={
        'Authorization': 'YOUR_TOKEN',
    },
)
print(response.text)
```
