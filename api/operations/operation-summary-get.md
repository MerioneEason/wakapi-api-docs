# Retrieve a summary

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
