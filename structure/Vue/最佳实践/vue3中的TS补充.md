# vue3中的TS补充

## Vuex

```ts
// vuex定义
declare const _default: {
  Store: typeof Store;
  mapState: typeof mapState,
  mapMutations: typeof mapMutations,
  mapGetters: typeof mapGetters,
  mapActions: typeof mapActions,
  createNamespacedHelpers: typeof createNamespacedHelpers,
  // 导出createStore方法
  createStore: typeof createStore
};
```

## Router

```ts

```