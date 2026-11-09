# List of users ranked by coding activity in descending order.

`GET /compat/wakatime/v1/leaders`

Mimics https://wakatime.com/developers#leaders

Authentication (security requirement alternatives):

```json
[
  {
    "ApiKeyAuth": []
  }
]
```

- ApiKeyAuth: apiKey, header Authorization

Responses:

- 200: OK

Content type: application/json

Type: v1.LeadersViewModel

Schema: [v1.LeadersViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-leadersviewmodel-f47fef1205.md)

- `current_user` (optional)
  Reference: [v1.LeadersCurrentUser](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-leaderscurrentuser-8b16ecc1ab.md); Type: v1.LeadersCurrentUser

- `data` (optional)
  Type: Array<v1.LeadersEntry>
  
  Items:
    Reference: [v1.LeadersEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-leadersentry-d56388d7b8.md); Type: v1.LeadersEntry

- `language` (optional)
  Type: string

- `page` (optional)
  Type: integer

- `range` (optional)
  Reference: [v1.LeadersRange](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-leadersrange-ec17d9cfce.md); Type: v1.LeadersRange

- `total_pages` (optional)
  Type: integer

## Examples

### cURL

```bash
curl -X GET 'https://merioneeason.github.io/compat/wakatime/v1/leaders' \
  -H 'Authorization: YOUR_TOKEN'
```

### JavaScript

```javascript
const response = await fetch('https://merioneeason.github.io/compat/wakatime/v1/leaders', {
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
    'https://merioneeason.github.io/compat/wakatime/v1/leaders',
    headers={
        'Authorization': 'YOUR_TOKEN',
    },
)
print(response.text)
```
