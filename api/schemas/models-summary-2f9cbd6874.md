# models.Summary

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