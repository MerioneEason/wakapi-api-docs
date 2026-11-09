# Get badge data

`GET /compat/shields/v1/{user}/{interval}/{filter}`

Retrieve total time for a given entity (e.g. a project) within a given range (e.g. one week) in a format compatible with [Shields.io](https://shields.io/endpoint). Requires public data access to be allowed.

Authentication: no security requirement declared for this operation.

Parameters:

- `user` (path, string, required) - User ID to fetch data for
  Type: string

- `interval` (path, string, required) - Interval to aggregate data for
  Type: string
  
  enum: ["today","yesterday","week","month","year","7_days","last_7_days","30_days","last_30_days","6_months","last_6_months","12_months","last_12_months","last_year","any","all_time"]

- `filter` (path, string, required) - Filter to apply (e.g. 'project:wakapi' or 'language:Go')
  Type: string

Responses:

- 200: OK

Content type: application/json

Type: v1.BadgeData

Schema: [v1.BadgeData](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-badgedata-47ade4169f.md)

- `color` (optional)
  Type: string

- `label` (optional)
  Type: string

- `message` (optional)
  Type: string

- `schemaVersion` (optional)
  Type: integer

## Examples

### cURL

```bash
curl -X GET 'https://merioneeason.github.io/compat/shields/v1/string/today/string'
```

### JavaScript

```javascript
const response = await fetch('https://merioneeason.github.io/compat/shields/v1/string/today/string', {
  method: 'GET',
});

const data = await response.text();
```

### Python

```python
import requests

response = requests.get('https://merioneeason.github.io/compat/shields/v1/string/today/string')
print(response.text)
```
