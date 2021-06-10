# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

### 预构建

- package.json 中的 dependencies 列表
- 包管理器的 lockfile，例如 package-lock.json, yarn.lock，或者 pnpm-lock.yaml
- 可能在 vite.config.js 相关字段中配置过的

---

- CommonJS 和 UMD 兼容性 ==> es
- 性能： Vite 将有许多内部模块的 ESM 依赖关系转换为单个模块，以提高后续页面加载性能。
- Vite 会将预构建的依赖缓存到 node_modules/.vite。 上面的一个步骤发生变化时，才需要重新运行预构建步骤。



#### 浏览器缓存

- 解析后的依赖请求会以 HTTP 头 max-age=31536000,immutable 强缓存，
- 通过浏览器 devtools 的 Network 选项卡暂时禁用缓存；
- 重启 Vite dev server，使用 --force 标志重新打包依赖；
- 重新载入页面。

### ENV

> 在生产环境中，这些环境变量会在构建时被静态替换，因此，在引用它们时请使用完全静态的字符串。
> 动态的 key 将无法生效。例如，动态 key 取值 import.meta.env[key] 是无效的。
> 只有以 VITE\_ 为前缀的变量才会暴露给经过 vite 处理的代码。

- import.meta.env.MODE: {string} 应用运行的模式。

- import.meta.env.BASE_URL: {string} 部署应用时的基本 URL。他由 base 配置项决定。

- import.meta.env.PROD: {boolean} 应用是否运行在生产环境。

- import.meta.env.DEV: {boolean} 应用是否运行在开发环境 (永远与 import.meta.env.PROD 相反)。
