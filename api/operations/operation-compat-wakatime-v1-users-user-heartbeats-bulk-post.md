# Push new heartbeats

`POST /compat/wakatime/v1/users/{user}/heartbeats.bulk`

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

- `user` (path, string, required) - Username (or current)
  Type: string

Request body: application/json (required)

Multiple heartbeats

Type: Array<models.Heartbeat>

Items:
  Reference: [models.Heartbeat](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-heartbeat-c54ef1e7c3.md); Type: models.Heartbeat

Responses:

- 201: Created

## Examples

### cURL

```bash
curl -X POST 'https://merioneeason.github.io/compat/wakatime/v1/users/string/heartbeats.bulk' \
  -H 'Authorization: YOUR_TOKEN' \
  -H 'Content-Type: application/json' \
  --data-raw '[
  {
    "ai_input_tokens": 0,
    "ai_line_changes": 0,
    "ai_output_tokens": 0,
    "ai_prompt_length": 0,
    "ai_session": "string",
    "branch": "string",
    "category": "string",
    "created_at": 0,
    "cursorpos": 0,
    "editor": "string",
    "entity": "string",
    "human_line_changes": 0,
    "is_write": true,
    "language": "string",
    "line_additions": 0,
    "line_deletions": 0,
    "lineno": 0,
    "lines": 0,
    "machine": "string",
    "operating_system": "string",
    "project": "string",
    "project_root_count": 0,
    "time": 0,
    "type": "string",
    "user_agent": "string"
  }
]'
```

### JavaScript

```javascript
const body = `[
  {
    "ai_input_tokens": 0,
    "ai_line_changes": 0,
    "ai_output_tokens": 0,
    "ai_prompt_length": 0,
    "ai_session": "string",
    "branch": "string",
    "category": "string",
    "created_at": 0,
    "cursorpos": 0,
    "editor": "string",
    "entity": "string",
    "human_line_changes": 0,
    "is_write": true,
    "language": "string",
    "line_additions": 0,
    "line_deletions": 0,
    "lineno": 0,
    "lines": 0,
    "machine": "string",
    "operating_system": "string",
    "project": "string",
    "project_root_count": 0,
    "time": 0,
    "type": "string",
    "user_agent": "string"
  }
]`;

const response = await fetch('https://merioneeason.github.io/compat/wakatime/v1/users/string/heartbeats.bulk', {
  method: 'POST',
  headers: {
    'Authorization': 'YOUR_TOKEN',
    'Content-Type': 'application/json',
  },
  body,
});

const data = await response.text();
```

### Python

```python
import requests

body = '''[
  {
    "ai_input_tokens": 0,
    "ai_line_changes": 0,
    "ai_output_tokens": 0,
    "ai_prompt_length": 0,
    "ai_session": "string",
    "branch": "string",
    "category": "string",
    "created_at": 0,
    "cursorpos": 0,
    "editor": "string",
    "entity": "string",
    "human_line_changes": 0,
    "is_write": true,
    "language": "string",
    "line_additions": 0,
    "line_deletions": 0,
    "lineno": 0,
    "lines": 0,
    "machine": "string",
    "operating_system": "string",
    "project": "string",
    "project_root_count": 0,
    "time": 0,
    "type": "string",
    "user_agent": "string"
  }
]'''

response = requests.post(
    'https://merioneeason.github.io/compat/wakatime/v1/users/string/heartbeats.bulk',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'YOUR_TOKEN',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
