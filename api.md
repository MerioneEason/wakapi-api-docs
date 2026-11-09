# Wakapi API

REST API to interact with [Wakapi](https://wakapi.dev)

## Authentication
Set header `Authorization` to your API Key encoded as Base64 and prefixed with `Basic`
**Example:** `Basic ODY2NDhkNzQtMTljNS00NTJiLWJhMDEtZmIzZWM3MGQ0YzJmCg==`

Version: 1.0

Authentication:
- ApiKeyAuth: apiKey, header Authorization

## Get badge data

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


## List of users ranked by coding activity in descending order.

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


## Retrieve the given user

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


## Retrieve summary for all time

`GET /compat/wakatime/v1/users/{user}/all_time_since_today`

Mimics https://wakatime.com/developers#all_time_since_today

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

Type: v1.AllTimeViewModel

Schema: [v1.AllTimeViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-alltimeviewmodel-1a081651e3.md)

- `data` (optional)
  Reference: [v1.AllTimeData](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-alltimedata-21c31f6b58.md); Type: v1.AllTimeData

## Examples

### cURL

```bash
curl -X GET 'https://merioneeason.github.io/compat/wakatime/v1/users/string/all_time_since_today' \
  -H 'Authorization: YOUR_TOKEN'
```

### JavaScript

```javascript
const response = await fetch('https://merioneeason.github.io/compat/wakatime/v1/users/string/all_time_since_today', {
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
    'https://merioneeason.github.io/compat/wakatime/v1/users/string/all_time_since_today',
    headers={
        'Authorization': 'YOUR_TOKEN',
    },
)
print(response.text)
```


## Get heartbeats of user for specified date

`GET /compat/wakatime/v1/users/{user}/heartbeats`

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

- `date` (query, string, required) - Date
  Type: string

- `user` (path, string, required) - Username (or current)
  Type: string

Responses:

- 200: OK

Content type: */*

Type: v1.HeartbeatsResult

Schema: [v1.HeartbeatsResult](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-heartbeatsresult-a519901c6e.md)

- `data` (optional)
  Type: Array<v1.HeartbeatEntry>
  
  Items:
    Reference: [v1.HeartbeatEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-heartbeatentry-098b939fbd.md); Type: v1.HeartbeatEntry

- `end` (optional)
  Type: string

- `start` (optional)
  Type: string

- `timezone` (optional)
  Type: string

- 400: bad date

Content type: */*

Type: string

## Examples

### cURL

```bash
curl -X GET 'https://merioneeason.github.io/compat/wakatime/v1/users/string/heartbeats?date=string' \
  -H 'Authorization: YOUR_TOKEN'
```

### JavaScript

```javascript
const response = await fetch('https://merioneeason.github.io/compat/wakatime/v1/users/string/heartbeats?date=string', {
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
    'https://merioneeason.github.io/compat/wakatime/v1/users/string/heartbeats?date=string',
    headers={
        'Authorization': 'YOUR_TOKEN',
    },
)
print(response.text)
```


## Push a new heartbeat

`POST /compat/wakatime/v1/users/{user}/heartbeats`

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
curl -X POST 'https://merioneeason.github.io/compat/wakatime/v1/users/string/heartbeats' \
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

const response = await fetch('https://merioneeason.github.io/compat/wakatime/v1/users/string/heartbeats', {
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
    'https://merioneeason.github.io/compat/wakatime/v1/users/string/heartbeats',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'YOUR_TOKEN',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```


## Push new heartbeats

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


## Retrieve and filter the user's projects

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


## Retrieve a single project

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


## Retrieve statistics for a given user

`GET /compat/wakatime/v1/users/{user}/stats/{range}`

Mimics https://wakatime.com/developers#stats

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

- `range` (path, string, required) - Range interval identifier
  Type: string
  
  enum: ["today","yesterday","week","month","year","7_days","last_7_days","30_days","last_30_days","6_months","last_6_months","12_months","last_12_months","last_year","any","all_time"]

- `project` (query, string, optional) - Project to filter by
  Type: string

- `language` (query, string, optional) - Language to filter by
  Type: string

- `editor` (query, string, optional) - Editor to filter by
  Type: string

- `operating_system` (query, string, optional) - OS to filter by
  Type: string

- `machine` (query, string, optional) - Machine to filter by
  Type: string

- `label` (query, string, optional) - Project label to filter by
  Type: string

Responses:

- 200: OK

Content type: application/json

Type: v1.StatsViewModel

Schema: [v1.StatsViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-statsviewmodel-75c04f9e1c.md)

- `data` (optional)
  Reference: [v1.StatsData](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-statsdata-13d21281ba.md); Type: v1.StatsData

## Examples

### cURL

```bash
curl -X GET 'https://merioneeason.github.io/compat/wakatime/v1/users/string/stats/today' \
  -H 'Authorization: YOUR_TOKEN'
```

### JavaScript

```javascript
const response = await fetch('https://merioneeason.github.io/compat/wakatime/v1/users/string/stats/today', {
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
    'https://merioneeason.github.io/compat/wakatime/v1/users/string/stats/today',
    headers={
        'Authorization': 'YOUR_TOKEN',
    },
)
print(response.text)
```


## Retrieve WakaTime-compatible summaries

`GET /compat/wakatime/v1/users/{user}/summaries`

Mimics https://wakatime.com/developers#summaries.

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

- `range` (query, string, optional) - Range interval identifier
  Type: string
  
  enum: ["today","yesterday","week","month","year","7_days","last_7_days","30_days","last_30_days","6_months","last_6_months","12_months","last_12_months","last_year","any","all_time"]

- `start` (query, string, optional) - Start date (e.g. '2021-02-07')
  Type: string

- `end` (query, string, optional) - End date (e.g. '2021-02-08')
  Type: string

- `project` (query, string, optional) - Project to filter by
  Type: string

- `language` (query, string, optional) - Language to filter by
  Type: string

- `editor` (query, string, optional) - Editor to filter by
  Type: string

- `operating_system` (query, string, optional) - OS to filter by
  Type: string

- `machine` (query, string, optional) - Machine to filter by
  Type: string

- `label` (query, string, optional) - Project label to filter by
  Type: string

Responses:

- 200: OK

Content type: application/json

Type: v1.SummariesViewModel

Schema: [v1.SummariesViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesviewmodel-a34e1ba44f.md)

- `cumulative_total` (optional)
  Reference: [v1.SummariesCumulativeTotal](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariescumulativetotal-b01a3ace0a.md); Type: v1.SummariesCumulativeTotal

- `daily_average` (optional)
  Reference: [v1.SummariesDailyAverage](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesdailyaverage-311c81335c.md); Type: v1.SummariesDailyAverage

- `data` (optional)
  Type: Array<v1.SummariesData>
  
  Items:
    Reference: [v1.SummariesData](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesdata-56360af692.md); Type: v1.SummariesData

- `end` (optional)
  Type: string

- `start` (optional)
  Type: string

## Examples

### cURL

```bash
curl -X GET 'https://merioneeason.github.io/compat/wakatime/v1/users/string/summaries' \
  -H 'Authorization: YOUR_TOKEN'
```

### JavaScript

```javascript
const response = await fetch('https://merioneeason.github.io/compat/wakatime/v1/users/string/summaries', {
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
    'https://merioneeason.github.io/compat/wakatime/v1/users/string/summaries',
    headers={
        'Authorization': 'YOUR_TOKEN',
    },
)
print(response.text)
```


## List of unique user agents for given user.

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


## Check the application's health status

`GET /health`

Authentication: no security requirement declared for this operation.

Responses:

- 200: OK

Content type: text/plain

Type: string

## Examples

### cURL

```bash
curl -X GET 'https://merioneeason.github.io/health'
```

### JavaScript

```javascript
const response = await fetch('https://merioneeason.github.io/health', {
  method: 'GET',
});

const data = await response.text();
```

### Python

```python
import requests

response = requests.get('https://merioneeason.github.io/health')
print(response.text)
```


## Push a new heartbeat

`POST /heartbeat`

Authentication (security requirement alternatives):

```json
[
  {
    "ApiKeyAuth": []
  }
]
```

- ApiKeyAuth: apiKey, header Authorization

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
curl -X POST 'https://merioneeason.github.io/heartbeat' \
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

const response = await fetch('https://merioneeason.github.io/heartbeat', {
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
    'https://merioneeason.github.io/heartbeat',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'YOUR_TOKEN',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```


## Push new heartbeats

`POST /heartbeats`

Authentication (security requirement alternatives):

```json
[
  {
    "ApiKeyAuth": []
  }
]
```

- ApiKeyAuth: apiKey, header Authorization

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
curl -X POST 'https://merioneeason.github.io/heartbeats' \
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

const response = await fetch('https://merioneeason.github.io/heartbeats', {
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
    'https://merioneeason.github.io/heartbeats',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'YOUR_TOKEN',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```


## Push a new diagnostics object

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


## Retrieve a summary

`GET /summary`

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

- `interval` (query, string, optional) - Interval identifier
  Type: string
  
  enum: ["today","yesterday","week","month","year","7_days","last_7_days","30_days","last_30_days","6_months","last_6_months","12_months","last_12_months","last_year","any","all_time"]

- `from` (query, string, optional) - Start date (e.g. '2021-02-07')
  Type: string

- `to` (query, string, optional) - End date (e.g. '2021-02-08')
  Type: string

- `recompute` (query, boolean, optional) - Whether to recompute the summary from raw heartbeat or use cache
  Type: boolean

- `project` (query, string, optional) - Project to filter by
  Type: string

- `language` (query, string, optional) - Language to filter by
  Type: string

- `editor` (query, string, optional) - Editor to filter by
  Type: string

- `operating_system` (query, string, optional) - OS to filter by
  Type: string

- `machine` (query, string, optional) - Machine to filter by
  Type: string

- `label` (query, string, optional) - Project label to filter by
  Type: string

Responses:

- 200: OK

Content type: application/json

Type: models.Summary

Schema: [models.Summary](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summary-2f9cbd6874.md)

- `branches` (optional)
  Type: Array<models.SummaryItem>
  
  branches are not persisted, but calculated at runtime in case a project Filter is applied
  
  Items:
    Reference: [models.SummaryItem](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summaryitem-dc743fb3ae.md); Type: models.SummaryItem

- `categories` (optional)
  Type: Array<models.SummaryItem>
  
  Items:
    Reference: [models.SummaryItem](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summaryitem-dc743fb3ae.md); Type: models.SummaryItem

- `editors` (optional)
  Type: Array<models.SummaryItem>
  
  Items:
    Reference: [models.SummaryItem](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summaryitem-dc743fb3ae.md); Type: models.SummaryItem

- `entities` (optional)
  Type: Array<models.SummaryItem>
  
  entities are not persisted, but calculated at runtime in case a project Filter is applied
  
  Items:
    Reference: [models.SummaryItem](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summaryitem-dc743fb3ae.md); Type: models.SummaryItem

- `from` (optional)
  Type: string, date
  
  filled by gorm if not set, see https://gorm.io/docs/conventions.html#CreatedAt
  
  Example:
  
  ```json
  "2006-01-02 15:04:05.000"
  ```

- `labels` (optional)
  Type: Array<models.SummaryItem>
  
  labels are not persisted, but calculated at runtime, i.e. when summary is retrieved
  
  Items:
    Reference: [models.SummaryItem](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summaryitem-dc743fb3ae.md); Type: models.SummaryItem

- `languages` (optional)
  Type: Array<models.SummaryItem>
  
  Items:
    Reference: [models.SummaryItem](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summaryitem-dc743fb3ae.md); Type: models.SummaryItem

- `machines` (optional)
  Type: Array<models.SummaryItem>
  
  Items:
    Reference: [models.SummaryItem](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summaryitem-dc743fb3ae.md); Type: models.SummaryItem

- `operating_systems` (optional)
  Type: Array<models.SummaryItem>
  
  Items:
    Reference: [models.SummaryItem](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summaryitem-dc743fb3ae.md); Type: models.SummaryItem

- `projects` (optional)
  Type: Array<models.SummaryItem>
  
  Previously, all the following properties created a cascade foreign key constraint on the summary_items table
  back to this summary table resulting in 5 identical foreign key constraints on the summary_items table.
  This is not a problem for PostgreSQL, MySQL and SQLite, but for MSSQL (not supported anymore though), which complains about circular cascades on
  update/delete between these two tables. All of these created foreign key constraints are identical, so only one constraint is enough.
  MySQL will create a foreign key constraint for every property referencing other structs, even no constraint is specified in tags.
  So explicitly set gorm:"-" in all other properties to avoid creating duplicate foreign key constraints
  
  Items:
    Reference: [models.SummaryItem](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summaryitem-dc743fb3ae.md); Type: models.SummaryItem

- `to` (optional)
  Type: string, date
  
  filled by gorm if not set, see https://gorm.io/docs/conventions.html#CreatedAt
  
  Example:
  
  ```json
  "2006-01-02 15:04:05.000"
  ```

- `user_id` (optional)
  Type: string

## Examples

### cURL

```bash
curl -X GET 'https://merioneeason.github.io/summary' \
  -H 'Authorization: YOUR_TOKEN'
```

### JavaScript

```javascript
const response = await fetch('https://merioneeason.github.io/summary', {
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
    'https://merioneeason.github.io/summary',
    headers={
        'Authorization': 'YOUR_TOKEN',
    },
)
print(response.text)
```


## Push a new heartbeat

`POST /users/{user}/heartbeats`

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
curl -X POST 'https://merioneeason.github.io/users/string/heartbeats' \
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

const response = await fetch('https://merioneeason.github.io/users/string/heartbeats', {
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
    'https://merioneeason.github.io/users/string/heartbeats',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'YOUR_TOKEN',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```


## Push new heartbeats

`POST /users/{user}/heartbeats.bulk`

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
curl -X POST 'https://merioneeason.github.io/users/string/heartbeats.bulk' \
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

const response = await fetch('https://merioneeason.github.io/users/string/heartbeats.bulk', {
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
    'https://merioneeason.github.io/users/string/heartbeats.bulk',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'YOUR_TOKEN',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```


## Retrieve summary for statusbar

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


## Push a new heartbeat

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


## Push new heartbeats

`POST /v1/users/{user}/heartbeats.bulk`

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
curl -X POST 'https://merioneeason.github.io/v1/users/string/heartbeats.bulk' \
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

const response = await fetch('https://merioneeason.github.io/v1/users/string/heartbeats.bulk', {
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
    'https://merioneeason.github.io/v1/users/string/heartbeats.bulk',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'YOUR_TOKEN',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```


## models.Diagnostics

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

## models.Heartbeat

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

## models.Summary

Type: models.Summary

Schema: [models.Summary](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summary-2f9cbd6874.md)

- `branches` (optional)
  Type: Array<models.SummaryItem>
  
  branches are not persisted, but calculated at runtime in case a project Filter is applied
  
  Items:
    Reference: [models.SummaryItem](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summaryitem-dc743fb3ae.md); Type: models.SummaryItem

- `categories` (optional)
  Type: Array<models.SummaryItem>
  
  Items:
    Reference: [models.SummaryItem](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summaryitem-dc743fb3ae.md); Type: models.SummaryItem

- `editors` (optional)
  Type: Array<models.SummaryItem>
  
  Items:
    Reference: [models.SummaryItem](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summaryitem-dc743fb3ae.md); Type: models.SummaryItem

- `entities` (optional)
  Type: Array<models.SummaryItem>
  
  entities are not persisted, but calculated at runtime in case a project Filter is applied
  
  Items:
    Reference: [models.SummaryItem](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summaryitem-dc743fb3ae.md); Type: models.SummaryItem

- `from` (optional)
  Type: string, date
  
  filled by gorm if not set, see https://gorm.io/docs/conventions.html#CreatedAt
  
  Example:
  
  ```json
  "2006-01-02 15:04:05.000"
  ```

- `labels` (optional)
  Type: Array<models.SummaryItem>
  
  labels are not persisted, but calculated at runtime, i.e. when summary is retrieved
  
  Items:
    Reference: [models.SummaryItem](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summaryitem-dc743fb3ae.md); Type: models.SummaryItem

- `languages` (optional)
  Type: Array<models.SummaryItem>
  
  Items:
    Reference: [models.SummaryItem](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summaryitem-dc743fb3ae.md); Type: models.SummaryItem

- `machines` (optional)
  Type: Array<models.SummaryItem>
  
  Items:
    Reference: [models.SummaryItem](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summaryitem-dc743fb3ae.md); Type: models.SummaryItem

- `operating_systems` (optional)
  Type: Array<models.SummaryItem>
  
  Items:
    Reference: [models.SummaryItem](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summaryitem-dc743fb3ae.md); Type: models.SummaryItem

- `projects` (optional)
  Type: Array<models.SummaryItem>
  
  Previously, all the following properties created a cascade foreign key constraint on the summary_items table
  back to this summary table resulting in 5 identical foreign key constraints on the summary_items table.
  This is not a problem for PostgreSQL, MySQL and SQLite, but for MSSQL (not supported anymore though), which complains about circular cascades on
  update/delete between these two tables. All of these created foreign key constraints are identical, so only one constraint is enough.
  MySQL will create a foreign key constraint for every property referencing other structs, even no constraint is specified in tags.
  So explicitly set gorm:"-" in all other properties to avoid creating duplicate foreign key constraints
  
  Items:
    Reference: [models.SummaryItem](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summaryitem-dc743fb3ae.md); Type: models.SummaryItem

- `to` (optional)
  Type: string, date
  
  filled by gorm if not set, see https://gorm.io/docs/conventions.html#CreatedAt
  
  Example:
  
  ```json
  "2006-01-02 15:04:05.000"
  ```

- `user_id` (optional)
  Type: string

## models.SummaryItem

Type: models.SummaryItem

Schema: [models.SummaryItem](https://merioneeason.github.io/wakapi-api-docs/api/schemas/models-summaryitem-dc743fb3ae.md)

- `key` (optional)
  Type: string

- `total` (optional)
  Type: integer

## v1.AllTimeData

Type: v1.AllTimeData

Schema: [v1.AllTimeData](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-alltimedata-21c31f6b58.md)

- `is_up_to_date` (optional)
  Type: boolean
  
  true if the stats are up to date; when false, a 202 response code is returned and stats will be refreshed soon>

- `range` (optional)
  Reference: [v1.AllTimeRange](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-alltimerange-f9eae541e7.md); Type: v1.AllTimeRange

- `text` (optional)
  Type: string
  
  total time logged since account created as human readable string>

- `total_seconds` (optional)
  Type: number
  
  total number of seconds logged since account created

## v1.AllTimeRange

Type: v1.AllTimeRange

Schema: [v1.AllTimeRange](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-alltimerange-f9eae541e7.md)

- `end` (optional)
  Type: string

- `end_date` (optional)
  Type: string

- `start` (optional)
  Type: string

- `start_date` (optional)
  Type: string

- `timezone` (optional)
  Type: string

## v1.AllTimeViewModel

Type: v1.AllTimeViewModel

Schema: [v1.AllTimeViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-alltimeviewmodel-1a081651e3.md)

- `data` (optional)
  Reference: [v1.AllTimeData](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-alltimedata-21c31f6b58.md); Type: v1.AllTimeData

## v1.BadgeData

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

## v1.HeartbeatEntry

Type: v1.HeartbeatEntry

Schema: [v1.HeartbeatEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-heartbeatentry-098b939fbd.md)

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
  Type: string

- `cursorpos` (optional)
  Type: integer

- `entity` (optional)
  Type: string

- `human_line_changes` (optional)
  Type: integer

- `id` (optional)
  Type: string

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

- `machine_name_id` (optional)
  Type: string

- `project` (optional)
  Type: string

- `time` (optional)
  Type: number

- `type` (optional)
  Type: string

- `user_agent_id` (optional)
  Type: string

- `user_id` (optional)
  Type: string

## v1.HeartbeatsResult

Type: v1.HeartbeatsResult

Schema: [v1.HeartbeatsResult](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-heartbeatsresult-a519901c6e.md)

- `data` (optional)
  Type: Array<v1.HeartbeatEntry>
  
  Items:
    Reference: [v1.HeartbeatEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-heartbeatentry-098b939fbd.md); Type: v1.HeartbeatEntry

- `end` (optional)
  Type: string

- `start` (optional)
  Type: string

- `timezone` (optional)
  Type: string

## v1.LeadersCurrentUser

Type: v1.LeadersCurrentUser

Schema: [v1.LeadersCurrentUser](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-leaderscurrentuser-8b16ecc1ab.md)

- `page` (optional)
  Type: integer

- `rank` (optional)
  Type: integer

- `user` (optional)
  Reference: [v1.User](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-user-d38c47dfa9.md); Type: v1.User

## v1.LeadersEntry

Type: v1.LeadersEntry

Schema: [v1.LeadersEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-leadersentry-d56388d7b8.md)

- `rank` (optional)
  Type: integer

- `running_total` (optional)
  Reference: [v1.LeadersRunningTotal](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-leadersrunningtotal-518252c847.md); Type: v1.LeadersRunningTotal

- `user` (optional)
  Reference: [v1.User](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-user-d38c47dfa9.md); Type: v1.User

## v1.LeadersLanguage

Type: v1.LeadersLanguage

Schema: [v1.LeadersLanguage](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-leaderslanguage-e6fc78a4e3.md)

- `name` (optional)
  Type: string

- `total_seconds` (optional)
  Type: number

## v1.LeadersRange

Type: v1.LeadersRange

Schema: [v1.LeadersRange](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-leadersrange-ec17d9cfce.md)

- `end_date` (optional)
  Type: string

- `end_text` (optional)
  Type: string

- `name` (optional)
  Type: string

- `start_date` (optional)
  Type: string

- `start_text` (optional)
  Type: string

- `text` (optional)
  Type: string

## v1.LeadersRunningTotal

Type: v1.LeadersRunningTotal

Schema: [v1.LeadersRunningTotal](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-leadersrunningtotal-518252c847.md)

- `daily_average` (optional)
  Type: number

- `human_readable_daily_average` (optional)
  Type: string

- `human_readable_total` (optional)
  Type: string

- `languages` (optional)
  Type: Array<v1.LeadersLanguage>
  
  Items:
    Reference: [v1.LeadersLanguage](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-leaderslanguage-e6fc78a4e3.md); Type: v1.LeadersLanguage

- `total_seconds` (optional)
  Type: number

## v1.LeadersViewModel

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

## v1.Project

Type: v1.Project

Schema: [v1.Project](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-project-f03d608c26.md)

- `created_at` (optional)
  Type: string

- `human_readable_last_heartbeat_at` (optional)
  Type: string

- `id` (optional)
  Type: string

- `last_heartbeat_at` (optional)
  Type: string

- `name` (optional)
  Type: string

- `urlencoded_name` (optional)
  Type: string

## v1.ProjectViewModel

Type: v1.ProjectViewModel

Schema: [v1.ProjectViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-projectviewmodel-8ea550aca8.md)

- `data` (optional)
  Reference: [v1.Project](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-project-f03d608c26.md); Type: v1.Project

## v1.ProjectsViewModel

Type: v1.ProjectsViewModel

Schema: [v1.ProjectsViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-projectsviewmodel-6e85219321.md)

- `data` (optional)
  Type: Array<v1.Project>
  
  Items:
    Reference: [v1.Project](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-project-f03d608c26.md); Type: v1.Project

## v1.StatsData

Type: v1.StatsData

Schema: [v1.StatsData](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-statsdata-13d21281ba.md)

- `branches` (optional)
  Type: Array<v1.SummariesEntry>
  
  Items:
    Reference: [v1.SummariesEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesentry-f3bd317fd7.md); Type: v1.SummariesEntry

- `categories` (optional)
  Type: Array<v1.SummariesEntry>
  
  Items:
    Reference: [v1.SummariesEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesentry-f3bd317fd7.md); Type: v1.SummariesEntry

- `daily_average` (optional)
  Type: number

- `days_including_holidays` (optional)
  Type: integer

- `editors` (optional)
  Type: Array<v1.SummariesEntry>
  
  Items:
    Reference: [v1.SummariesEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesentry-f3bd317fd7.md); Type: v1.SummariesEntry

- `end` (optional)
  Type: string

- `human_readable_daily_average` (optional)
  Type: string

- `human_readable_range` (optional)
  Type: string

- `human_readable_total` (optional)
  Type: string

- `is_coding_activity_visible` (optional)
  Type: boolean

- `is_other_usage_visible` (optional)
  Type: boolean

- `languages` (optional)
  Type: Array<v1.SummariesEntry>
  
  Items:
    Reference: [v1.SummariesEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesentry-f3bd317fd7.md); Type: v1.SummariesEntry

- `machines` (optional)
  Type: Array<v1.SummariesEntry>
  
  Items:
    Reference: [v1.SummariesEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesentry-f3bd317fd7.md); Type: v1.SummariesEntry

- `operating_systems` (optional)
  Type: Array<v1.SummariesEntry>
  
  Items:
    Reference: [v1.SummariesEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesentry-f3bd317fd7.md); Type: v1.SummariesEntry

- `projects` (optional)
  Type: Array<v1.SummariesEntry>
  
  Items:
    Reference: [v1.SummariesEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesentry-f3bd317fd7.md); Type: v1.SummariesEntry

- `range` (optional)
  Type: string

- `start` (optional)
  Type: string

- `status` (optional)
  Type: string

- `timezone` (optional)
  Type: string

- `total_seconds` (optional)
  Type: number

- `user_id` (optional)
  Type: string

- `username` (optional)
  Type: string

## v1.StatsViewModel

Type: v1.StatsViewModel

Schema: [v1.StatsViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-statsviewmodel-75c04f9e1c.md)

- `data` (optional)
  Reference: [v1.StatsData](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-statsdata-13d21281ba.md); Type: v1.StatsData

## v1.StatusBarViewModel

Type: v1.StatusBarViewModel

Schema: [v1.StatusBarViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-statusbarviewmodel-50b8536152.md)

- `cached_at` (optional)
  Type: string

- `data` (optional)
  Reference: [v1.SummariesData](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesdata-56360af692.md); Type: v1.SummariesData

## v1.SummariesCumulativeTotal

Type: v1.SummariesCumulativeTotal

Schema: [v1.SummariesCumulativeTotal](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariescumulativetotal-b01a3ace0a.md)

- `decimal` (optional)
  Type: string

- `digital` (optional)
  Type: string

- `seconds` (optional)
  Type: number

- `text` (optional)
  Type: string

## v1.SummariesDailyAverage

Type: v1.SummariesDailyAverage

Schema: [v1.SummariesDailyAverage](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesdailyaverage-311c81335c.md)

- `days_including_holidays` (optional)
  Type: integer

- `days_minus_holidays` (optional)
  Type: integer

- `holidays` (optional)
  Type: integer

- `seconds` (optional)
  Type: integer

- `seconds_including_other_language` (optional)
  Type: integer

- `text` (optional)
  Type: string

- `text_including_other_language` (optional)
  Type: string

## v1.SummariesData

Type: v1.SummariesData

Schema: [v1.SummariesData](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesdata-56360af692.md)

- `branches` (optional)
  Type: Array<v1.SummariesEntry>
  
  Items:
    Reference: [v1.SummariesEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesentry-f3bd317fd7.md); Type: v1.SummariesEntry

- `categories` (optional)
  Type: Array<v1.SummariesEntry>
  
  Items:
    Reference: [v1.SummariesEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesentry-f3bd317fd7.md); Type: v1.SummariesEntry

- `dependencies` (optional)
  Type: Array<v1.SummariesEntry>
  
  Items:
    Reference: [v1.SummariesEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesentry-f3bd317fd7.md); Type: v1.SummariesEntry

- `editors` (optional)
  Type: Array<v1.SummariesEntry>
  
  Items:
    Reference: [v1.SummariesEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesentry-f3bd317fd7.md); Type: v1.SummariesEntry

- `entities` (optional)
  Type: Array<v1.SummariesEntry>
  
  Items:
    Reference: [v1.SummariesEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesentry-f3bd317fd7.md); Type: v1.SummariesEntry

- `grand_total` (optional)
  Reference: [v1.SummariesGrandTotal](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesgrandtotal-4bb8010130.md); Type: v1.SummariesGrandTotal

- `languages` (optional)
  Type: Array<v1.SummariesEntry>
  
  Items:
    Reference: [v1.SummariesEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesentry-f3bd317fd7.md); Type: v1.SummariesEntry

- `machines` (optional)
  Type: Array<v1.SummariesEntry>
  
  Items:
    Reference: [v1.SummariesEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesentry-f3bd317fd7.md); Type: v1.SummariesEntry

- `operating_systems` (optional)
  Type: Array<v1.SummariesEntry>
  
  Items:
    Reference: [v1.SummariesEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesentry-f3bd317fd7.md); Type: v1.SummariesEntry

- `projects` (optional)
  Type: Array<v1.SummariesEntry>
  
  Items:
    Reference: [v1.SummariesEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesentry-f3bd317fd7.md); Type: v1.SummariesEntry

- `range` (optional)
  Reference: [v1.SummariesRange](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesrange-b81ba9eb5e.md); Type: v1.SummariesRange

## v1.SummariesEntry

Type: v1.SummariesEntry

Schema: [v1.SummariesEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesentry-f3bd317fd7.md)

- `digital` (optional)
  Type: string

- `hours` (optional)
  Type: integer

- `minutes` (optional)
  Type: integer

- `name` (optional)
  Type: string

- `percent` (optional)
  Type: number

- `seconds` (optional)
  Type: integer

- `text` (optional)
  Type: string

- `total_seconds` (optional)
  Type: number

## v1.SummariesGrandTotal

Type: v1.SummariesGrandTotal

Schema: [v1.SummariesGrandTotal](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesgrandtotal-4bb8010130.md)

- `digital` (optional)
  Type: string

- `hours` (optional)
  Type: integer

- `minutes` (optional)
  Type: integer

- `text` (optional)
  Type: string

- `total_seconds` (optional)
  Type: number

## v1.SummariesRange

Type: v1.SummariesRange

Schema: [v1.SummariesRange](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesrange-b81ba9eb5e.md)

- `date` (optional)
  Type: string

- `end` (optional)
  Type: string

- `start` (optional)
  Type: string

- `text` (optional)
  Type: string

- `timezone` (optional)
  Type: string

## v1.SummariesViewModel

Type: v1.SummariesViewModel

Schema: [v1.SummariesViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesviewmodel-a34e1ba44f.md)

- `cumulative_total` (optional)
  Reference: [v1.SummariesCumulativeTotal](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariescumulativetotal-b01a3ace0a.md); Type: v1.SummariesCumulativeTotal

- `daily_average` (optional)
  Reference: [v1.SummariesDailyAverage](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesdailyaverage-311c81335c.md); Type: v1.SummariesDailyAverage

- `data` (optional)
  Type: Array<v1.SummariesData>
  
  Items:
    Reference: [v1.SummariesData](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-summariesdata-56360af692.md); Type: v1.SummariesData

- `end` (optional)
  Type: string

- `start` (optional)
  Type: string

## v1.User

Type: v1.User

Schema: [v1.User](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-user-d38c47dfa9.md)

- `created_at` (optional)
  Type: string

- `display_name` (optional)
  Type: string

- `email` (optional)
  Type: string

- `full_name` (optional)
  Type: string

- `id` (optional)
  Type: string

- `is_email_confirmed` (optional)
  Type: boolean

- `is_email_public` (optional)
  Type: boolean

- `last_heartbeat_at` (optional)
  Type: string

- `last_plugin_name` (optional)
  Type: string

- `last_project` (optional)
  Type: string

- `modified_at` (optional)
  Type: string

- `photo` (optional)
  Type: string

- `timezone` (optional)
  Type: string

- `username` (optional)
  Type: string

- `website` (optional)
  Type: string

## v1.UserAgentEntry

Type: v1.UserAgentEntry

Schema: [v1.UserAgentEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-useragententry-0cb80eb31e.md)

- `editor` (optional)
  Type: string

- `first_seen` (optional)
  Type: string

- `id` (optional)
  Type: string

- `is_browser_extension` (optional)
  Type: boolean
  
  currently not implemented

- `is_desktop_app` (optional)
  Type: boolean
  
  currently not implemented

- `last_seen` (optional)
  Type: string

- `os` (optional)
  Type: string

- `value` (optional)
  Type: string

- `version` (optional)
  Type: string
  
  currently not implemented

## v1.UserAgentsViewModel

Type: v1.UserAgentsViewModel

Schema: [v1.UserAgentsViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-useragentsviewmodel-d67192c07f.md)

- `data` (optional)
  Type: Array<v1.UserAgentEntry>
  
  Items:
    Reference: [v1.UserAgentEntry](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-useragententry-0cb80eb31e.md); Type: v1.UserAgentEntry

- `total_pages` (optional)
  Type: integer

## v1.UserViewModel

Type: v1.UserViewModel

Schema: [v1.UserViewModel](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-userviewmodel-259ed4bd55.md)

- `data` (optional)
  Reference: [v1.User](https://merioneeason.github.io/wakapi-api-docs/api/schemas/v1-user-d38c47dfa9.md); Type: v1.User
