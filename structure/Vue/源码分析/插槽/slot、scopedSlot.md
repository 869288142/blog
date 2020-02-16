# slot scopedSlot

## 应用场景

* 提供定制组件内部的能力,一般来说，可以认为slot将行为和样式进行了分离

## 设计理念

* 提供开发者定制组件内部结构的能力

* 提供获取组件内部状态的能力


### 优点

* 插槽机制提高了组件的可扩展性

* 插槽在一定程度下，将交互和样式进行了分离

### 缺点

* Vue在一开始分离了slot和scopedSlot的语法，本质上其实它们是相同的，这就导致了后面的breakChange,2.6最终统一了语法v-slot,Vue上会统一内部的API


## 基本语法

``` html
<!-- 插槽 #[default | name]  -->
<current-user >
  <template #default>
    {{ xxx }}
  </template>
</current-user>

<!-- 作用域插槽 -->

<!-- current-user组件 -->
<span>
  <slot v-bind:user="user">
    {{ user.lastName }}
  </slot>
</span>
<!-- 使用 -->
<current-user #default="{ user }">
  {{ user.firstName }}
</current-user>
```

## 源码分析


### 普通插槽渲染

```js
  function resolveSlots (
    children,
    context
  ) {
    // 无子节点
    if (!children || !children.length) {
      return {}
    }

    var slots = {};

    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      // 只有context和父组件的context一致才会渲染
      if ((child.context === context || child.fnContext === context) &&
        data && data.slot != null
      ) {
        var name = data.slot;
        var slot = (slots[name] || (slots[name] = []));
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // 删除只有空格的slot
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots
  }

```

主要过程如下：

* 提前返回无子节点情况

* 将vnode的context和父组件一致的slot记为具名插槽，否则为默认插糟

* 删除只有空格的slot



### 作用域插槽渲染

```js
  function renderSlot (
    name, // 插槽名称
    fallback, // 后备内容
    props, // 传入对象
    bindObject
  ) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    // 优先渲染作用域插槽
    if (scopedSlotFn) { // scoped slot
      props = props || {};
      if (bindObject) {
        if ( !isObject(bindObject)) {
          warn(
            'slot v-bind without argument expects an Object',
            this
          );
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes = scopedSlotFn(props) || fallback;
    } else {
      nodes = this.$slots[name] || fallback;
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes)
    } else {
      return nodes
    }
  }

```

* 先渲染作用域插槽，后续Vue会将普通插槽统、作用域插糟的概念统一，将Props传入scopedSlot并调用返回Vnodes
