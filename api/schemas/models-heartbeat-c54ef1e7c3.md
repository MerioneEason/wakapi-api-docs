# models.Heartbeat

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