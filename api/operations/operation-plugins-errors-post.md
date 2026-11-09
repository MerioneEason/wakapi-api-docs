# Push a new diagnostics object

`POST /plugins/errors`

Authentication: no security requirement declared for this operation.

Request body: application/json (required)

A single diagnostics object sent by WakaTime CLI

Type: models.Diagnostics

Schema: [models.Diagnostics](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-diagnostics-c10d82a8db.md)

- `architecture` (optional)
  Type: string

- `cli_version` (optional)
  Type: string

- `id` (optional)
  Type: integer

- `logs` (optional)
  Type: string

- `platform` (optional)
  Type: string

- `plugin` (optional)
  Type: string

- `stacktrace` (optional)
  Type: string

Responses:

- 201: Created

## Examples

### cURL

```bash
curl -X POST 'https://merioneeason.github.io/plugins/errors' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "architecture": "string",
  "cli_version": "string",
  "id": 0,
  "logs": "string",
  "platform": "string",
  "plugin": "string",
  "stacktrace": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "architecture": "string",
  "cli_version": "string",
  "id": 0,
  "logs": "string",
  "platform": "string",
  "plugin": "string",
  "stacktrace": "string"
}`;

const response = await fetch('https://merioneeason.github.io/plugins/errors', {
  method: 'POST',
  headers: {
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
  "architecture": "string",
  "cli_version": "string",
  "id": 0,
  "logs": "string",
  "platform": "string",
  "plugin": "string",
  "stacktrace": "string"
}'''

response = requests.post(
    'https://merioneeason.github.io/plugins/errors',
    data=body.encode('utf-8'),
    headers={
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
