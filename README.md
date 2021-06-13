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

### script setup sugur

```html
<script setup>

  :msg = 'sssss'
  //  const msg = ref('sssss')
</script>
```

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

### Vue3

```js
export {
  BaseTransition,
  Comment$1 as Comment,
  Fragment,
  KeepAlive,
  Static,
  Suspense,
  Teleport,
  Text,
  callWithAsyncErrorHandling,
  callWithErrorHandling,
  cloneVNode,
  compatUtils,
  computed,
  createBlock,
  createCommentVNode,
  createHydrationRenderer,
  createRenderer,
  createSlots,
  createStaticVNode,
  createTextVNode,
  createVNode,
  defineAsyncComponent,
  defineComponent,
  defineEmit,
  defineProps,
  devtools,
  getCurrentInstance,
  getTransitionRawChildren,
  h,
  handleError,
  initCustomFormatter,
  inject,
  isRuntimeOnly,
  isVNode,
  mergeProps,
  nextTick,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onServerPrefetch,
  onUnmounted,
  onUpdated,
  openBlock,
  popScopeId,
  provide,
  pushScopeId,
  queuePostFlushCb,
  registerRuntimeCompiler,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDirective,
  resolveDynamicComponent,
  resolveFilter,
  resolveTransitionHooks,
  setBlockTracking,
  setDevtoolsHook,
  setTransitionHooks,
  ssrContextKey,
  ssrUtils,
  toHandlers,
  transformVNodeArgs,
  useContext,
  useSSRContext,
  useTransitionState,
  version,
  warn,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withScopeId,
}
```

### vue2 vnode props

```js

{
  // 与 `v-bind:class` 的 API 相同，
  // 接受一个字符串、对象或字符串和对象组成的数组
  'class': {
    foo: true,
    bar: false
  },
  // 与 `v-bind:style` 的 API 相同，
  // 接受一个字符串、对象，或对象组成的数组
  style: {
    color: 'red',
    fontSize: '14px'
  },
  // 普通的 HTML attribute
  attrs: {
    id: 'foo'
  },
  // 组件 prop
  props: {
    myProp: 'bar'
  },
  // DOM property
  domProps: {
    innerHTML: 'baz'
  },
  // 事件监听器在 `on` 内，
  // 但不再支持如 `v-on:keyup.enter` 这样的修饰器。
  // 需要在处理函数中手动检查 keyCode。
  on: {
    click: this.clickHandler
  },
  // 仅用于组件，用于监听原生事件，而不是组件内部使用
  // `vm.$emit` 触发的事件。
  nativeOn: {
    click: this.nativeClickHandler
  },
  // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
  // 赋值，因为 Vue 已经自动为你进行了同步。
  directives: [
    {
      name: 'my-custom-directive',
      value: '2',
      expression: '1 + 1',
      arg: 'foo',
      modifiers: {
        bar: true
      }
    }
  ],
  // 作用域插槽的格式为
  // { name: props => VNode | Array<VNode> }
  scopedSlots: {
    default: props => createElement('span', props.text)
  },
  // 如果组件是其它组件的子组件，需为插槽指定名称
  slot: 'name-of-slot',
  // 其它特殊顶层 property
  key: 'myKey',
  ref: 'myRef',
  // 如果你在渲染函数中给多个元素都应用了相同的 ref 名，
  // 那么 `$refs.myRef` 会变成一个数组。
  refInFor: true
}


```

#### 2.x 语法

```js
// 2.x
{
  class: ['button', 'is-outlined'],
  style: { color: '#34495E' },
  attrs: { id: 'submit' },
  domProps: { innerHTML: '' },
  on: { click: submitForm },
  key: 'submit-button'
}
```

#### 2.x 语法

```js
// 3.x 语法
{
  class: ['button', 'is-outlined'],
  style: { color: '#34495E' },
  id: 'submit',
  innerHTML: '',
  onClick: submitForm,
  key: 'submit-button'
}
```
