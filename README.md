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
import * as path from "path";
import * as webpack from "webpack";
import { resolveTsAliases } from "webpack-ts-utils";

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
