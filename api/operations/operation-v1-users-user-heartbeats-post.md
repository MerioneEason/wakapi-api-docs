# Push a new heartbeat

`POST /v1/users/{user}/heartbeats`

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

A single heartbeat

Type: models.Heartbeat

Schema: [models.Heartbeat](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-heartbeat-c54ef1e7c3.md)

- `ai_input_tokens` (optional)
  Type: integer

- `ai_line_changes` (optional)
  Type: integer

- `ai_output_tokens` (optional)
  Type: integer

- `ai_prompt_length` (optional)
  Type: integer

- `ai_session` (optional)
  Type: string

- `branch` (optional)
  Type: string

- `category` (optional)
  Type: string

- `created_at` (optional)
  Type: number
  
  https://gorm.io/docs/conventions.html#CreatedAt

- `cursorpos` (optional)
  Type: integer

- `editor` (optional)
  Type: string
  
  ignored because editor might be parsed differently by wakatime

- `entity` (optional)
  Type: string

- `human_line_changes` (optional)
  Type: integer

- `is_write` (optional)
  Type: boolean

- `language` (optional)
  Type: string

- `line_additions` (optional)
  Type: integer

- `line_deletions` (optional)
  Type: integer

- `lineno` (optional)
  Type: integer

- `lines` (optional)
  Type: integer

- `machine` (optional)
  Type: string
  
  ignored because wakatime api doesn't return machines currently

- `operating_system` (optional)
  Type: string
  
  ignored because os might be parsed differently by wakatime

- `project` (optional)
  Type: string

- `project_root_count` (optional)
  Type: integer

- `time` (optional)
  Type: number
  
  note: on sqlite, table will have an additional column `time_real`, introduced "manually" by migration 20260111
  see https://github.com/muety/wakapi/issues/882 for details

- `type` (optional)
  Type: string

- `user_agent` (optional)
  Type: string

Responses:

- 201: Created

## Examples

### cURL

```bash
curl -X POST 'https://merioneeason.github.io/v1/users/string/heartbeats' \
  -H 'Authorization: YOUR_TOKEN' \
  -H 'Content-Type: application/json' \
  --data-raw '{
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
}'
```

### JavaScript

```javascript
const body = `{
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
}`;

const response = await fetch('https://merioneeason.github.io/v1/users/string/heartbeats', {
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

body = '''{
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
}'''

response = requests.post(
    'https://merioneeason.github.io/v1/users/string/heartbeats',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'YOUR_TOKEN',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
