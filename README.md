# resolve-ts-aliases

Resolve aliases for integrating webpack and typescript.

## Install

```bash
npm add -D resolve-ts-aliases
```

## Usage

`tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@app/*": ["src/app/*"],
      "@components/*": ["src/components/*"]
    }
  }
}
```

`webpack.config.ts`:

```ts
import path from "path";
import webpack from "webpack";
import { resolveTsAliases } from "resolve-ts-aliases";

const config: webpack.Configuration = {
  resolve: {
    // These 2 forms are equivalent.
    alias: resolveTsAliases(path.resolve("tsconfig.json")),
    alias: {
      "@app": "/path/to/src/app",
      "@components": "/path/to/src/components"
    }
  },
};

export default config;
```

## Recommendation

For **webpack users**, you could try another package I developed, [airpack](https://github.com/arzyu/airpack), which can help you share webpack configuration in multiple projects more easily.
