# Check the application's health status

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
