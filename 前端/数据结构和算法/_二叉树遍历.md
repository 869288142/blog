# 二叉树遍历

## 深度遍历

### 前序遍历

**根结点 ---> 左子树 ---> 右子树**

```js
function preOrderTraverse(root) {
  if (root !== null) {
    console.log(root.val)
    preOrderTraverse1(root.left)
    preOrderTraverse1(root.right)
  }
}
```

### 中序遍历

**左子树 ---> 根结点 ---> 右子树**

```js
function inOrderTraverse(root) {
  if (root !== null) {
    preOrderTraverse1(root.left)
    console.log(root.val)
    preOrderTraverse1(root.right)
  }
}
```

### 后序遍历

**左子树 ---> 右子树 ---> 根结点**

```js
function preOrderTraverse(root) {
  if (root !== null) {
    preOrderTraverse1(root.left)
    preOrderTraverse1(root.right)
    console.log(root.val)
  }
}
```

## 广度遍历

### 层次遍历

```js
function levelOrder (root) {
  let queue = []
  queue.push(root)
  while (queue.length > 0) {
    let node = queue.shift()
    if (node.left != null) {
      queue.push(node.left)
    }
    if (node.right != null) {
      queue.push(node.right)
    }
  }
}
```
