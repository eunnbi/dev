---
emoji: π€
title: Next.js Compiler
date: "2022-12-23"
category: Nextjs
preview: "Next.js κ³΅μ λ¬Έμμ λ°λ₯΄λ©΄, Next.js 13 μ»΄νμΌλ¬λ SWCλ₯Ό μ¬μ©νλ€. μ΅μ  λ²μ μ μλ°μ€ν¬λ¦½νΈ/νμμ€ν¬λ¦½νΈ μ½λλ€μ λͺ¨λ  λΈλΌμ°μ μμ μ§μνλ μ ν¨ν μ½λλ‘ λ³ννλ€. μ΅μ  μλ°μ€ν¬λ¦½νΈλ₯Ό μ½μ§ λͺ»νλ λΈλΌμ°μ μμλ μ½λκ° λμΌνκ² λμνλ€. SWCλ μ½λλ₯Ό μ΅μνν΄μ£Όλ κΈ°λ₯λ μλ€. μ΄ κΈ°λ₯μ μ¬μ©νκΈ° μν΄μ version 12.3.0μμλ next.config.jsμμ μ€μ μ΄ νμνκ³ , version 13μμλ κΈ°λ³Έ κΈ°λ₯μ΄λ€. Next.js 12 λ²μ μ΄ λμ€κΈ° μ μλ, SWC λμ  babelλ₯Ό μ¬μ©νλ€. babelλ μ΅μ  λ²μ μ μλ°μ€ν¬λ¦½νΈ/νμμ€ν¬λ¦½νΈ μ½λλ₯Ό λͺ¨λ  λΈλΌμ°μ μμ μ§μνλ μ ν¨ν μ½λλ‘ λ³ννλ€. νμ§λ§, μλ μΈ‘λ©΄μμ λλ¦¬λ€λ νκ°λ₯Ό λ°λλ€. Next.js 12 λ²μ μμλ Rust νλ‘κ·Έλλ° μΈμ΄λ‘ μμ±λ SWCλ‘ λμ²΄νκ³ , μ λ³΄λ€ λΉ λ₯Έ λ¦¬νλ μμ λΉλ μλλ₯Ό κ²½νν  μ μκ² λμλ€. μ»΄νμΌ μλκ° λ λΉ λ₯Έ μ΄μ  μ€ νλκ° Rust νλ‘κ·Έλλ° μΈμ΄μ΄λ€."
---

## SWC

- [Next.js κ³΅μ λ¬Έμ](https://nextjs.org/docs/advanced-features/compiler)μ λ°λ₯΄λ©΄, Next.js 13 μ»΄νμΌλ¬λ SWCλ₯Ό μ¬μ©νλ€.
- **μ΅μ  λ²μ μ μλ°μ€ν¬λ¦½νΈ/νμμ€ν¬λ¦½νΈ μ½λλ€μ λͺ¨λ  λΈλΌμ°μ μμ μ§μνλ μ ν¨ν μ½λλ‘ λ³ννλ€.**
  - μ΅μ  μλ°μ€ν¬λ¦½νΈλ₯Ό μ½μ§ λͺ»νλ λΈλΌμ°μ μμλ μ½λκ° λμΌνκ² λμνλ€.
- SWCλ **μ½λλ₯Ό μ΅μνν΄μ£Όλ κΈ°λ₯**λ μλ€. μ΄ κΈ°λ₯μ μ¬μ©νκΈ° μν΄μ version 12.3.0μμλ next.config.jsμμ μ€μ μ΄ νμνκ³ , version 13μμλ κΈ°λ³Έ κΈ°λ₯μ΄λ€.

```js
// next.config.js
// Next.js 12.3.0
module.exports = {
  swcMinify: true
};
```

> μ°Έκ³ : [SWC κ³΅μλ¬Έμ](https://swc.rs/)

<br/>

### SWC vs Babel

- Next.js 12 λ²μ μ΄ λμ€κΈ° μ μλ, SWC λμ  babelλ₯Ό μ¬μ©νλ€.
- babelλ μ΅μ  λ²μ μ μλ°μ€ν¬λ¦½νΈ/νμμ€ν¬λ¦½νΈ μ½λλ₯Ό λͺ¨λ  λΈλΌμ°μ μμ μ§μνλ μ ν¨ν μ½λλ‘ λ³ννλ€. νμ§λ§, μλ μΈ‘λ©΄μμ λλ¦¬λ€λ νκ°λ₯Ό λ°λλ€.
- Next.js 12 λ²μ μμλ Rust νλ‘κ·Έλλ° μΈμ΄λ‘ μμ±λ SWCλ‘ λμ²΄νκ³ , μ λ³΄λ€ λΉ λ₯Έ λ¦¬νλ μμ λΉλ μλλ₯Ό κ²½νν  μ μκ² λμλ€.
- μ»΄νμΌ μλκ° λ λΉ λ₯Έ μ΄μ  μ€ νλκ° [Rust](https://prev.rust-lang.org/en-US/documentation.html) νλ‘κ·Έλλ° μΈμ΄μ΄λ€.

<br/>

## Next.js 13 Compilerμ μ§μ κΈ°λ₯

> μ§μ  μ¬μ©ν΄λ³΄κ±°λ μ¬μ©ν΄λ³΄κ³  μΆμ κΈ°λ₯λ€ μμ£Όλ‘ μ λ¦¬

### Styled-components

```js
module.exports = {
  compiler: {
    styledComponents: boolean | {
      // Enabled by default in development, disabled in production to reduce file size,
      displayName?: boolean,
      // Enabled by default.
      ssr?: boolean,
      // Enabled by default.
      fileName?: boolean,
      // Empty by default.
      topLevelImportPaths?: string[],
      // Defaults to ["index"].
      meaninglessFileNames?: string[],
      // Enabled by default.
      cssProp?: boolean,
      // Empty by default.
      namespace?: string,
    },
  },
}
```

### Remove Console

```js
// remove all console.* calls
module.exports = {
  compiler: {
    removeConsole: true
  }
};
```

```js
// remove console.* calls except console.error
module.exports = {
  compiler: {
    removeConsole: {
      exclude: ["error"]
    }
  }
};
```

### Modularize Imports (v13.1.0 stable)

- importλ₯Ό λͺ¨λννλ κΈ°λ₯μ΄λ€. μ΄ κΈ°λ₯μ μ₯μ μ **Tree shaking**μ΄ λλ€λ μ μ΄λ€.
  - Tree shakingμ μ¬μ©νμ§ μμ μ½λλ₯Ό μ κ±°νλ κ²μ λ§νλ€.
- λ§μ μΈκΈ° μλ npm ν¨ν€μ§λ λ€λ₯Έ λͺ¨λμ λ€μ exportνλ λ¨μΌ νμΌμ μ κ³΅νκΈ° μν΄ "λ°°λ΄ νμΌ"μ μ¬μ©νλ€.

```js
import { IconButton, Tooltip, Tabs, Tab } from "@mui/material";
```

- λ²λ€λ¬λ λ°°λ΄ νμΌμ μ΄ν΄νκ³  μ¬μ©λμ§ μλ re-exportλ₯Ό μ κ±°ν  μ μλ€.
- νμ§λ§, μ΄ κ³Όμ μ re-exportλ λͺ¨λ  νμΌμ νμ±/μ»΄νμΌνλ κ²μ ν¬ν¨νλ€.
- μΌλΆ npm ν¨ν€μ§λ μμ² κ°μ λͺ¨λμ λ€μ λ΄λ³΄λ΄λ λ°°λ΄ νμΌμ μ κ³΅νκΈ° λλ¬Έμ μ»΄νμΌ μκ°μ΄ λλ €μ§λ€.
- Next.jsλ μ΄ λ¬Έμ λ₯Ό ν΄κ²°νκΈ° μν΄ λ°°λ΄ νμΌμ μ΄μ©ν importλ¬Έμ direct importλ¬ΈμΌλ‘ μλ λ³νν΄μ£Όλ κΈ°λ₯μ μ κ³΅νλ€. μ΄ κΈ°λ₯μ μ¬μ©νκΈ° μν΄μλ next.config.jsμ `modularizeImports` μ΅μμ μ€μ ν΄μΌ νλ€.

```js
// Before (with barrel file)
import { IconButton, Tooltip, Tabs, Tab } from "@mui/material";

// After (with modularized imports from plugin)
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
```

```js
// next.config.js
module.exports = {
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}"
    }
  }
};
```

> [Modularize Imports κΈ°λ₯μ λν΄ λ μμλ³΄κΈ°](https://nextjs.org/docs/advanced-features/compiler#modularize-imports)

<br/>

> **κ·Έ λ°μ λ€μν μ§μ κΈ°λ₯λ€**
>
> - [Jest](https://nextjs.org/docs/advanced-features/compiler#jest)
> - [Relay](https://nextjs.org/docs/advanced-features/compiler#relay)
> - [Remove React Properties](https://nextjs.org/docs/advanced-features/compiler#remove-react-properties)
> - [Emotion](https://nextjs.org/docs/advanced-features/compiler#emotion)
