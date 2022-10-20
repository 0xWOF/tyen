# tyen

environment manager for typescript

## example

```typescript
import { Environment } from 'tyen'

const environment = Environment(import('./environment.ts'), {
    token: 'string',
    timeout: 'number',
})

const token = environment.token
```

## feature

- check file exist
- check schema is match
- environment is typed by schema
- autocomplete is supported