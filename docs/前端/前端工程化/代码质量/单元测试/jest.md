# jest

## 安装

``` shell
npm i jest -D
```

**package.json**

``` json
"test" : "jest"
```

先执行`jest --init`初始化`jest`配置,再执行`npm run test`即可

## 配置失败马上退出

``` json
"test" : "jest --bail"
```

## 配置生成覆盖测试报告

``` json
"test": "jest  --coverage"
```

## 配合VScode插件实时显式单元测试结果

安装`VScode`的`jest`插件即可

## 编写测试用例

目前有两种阻止测试用例的方案，一种是在根目录放置全部的单元测试用例，一种是和源码在同级放置测试用例，**`jest`默认目录为`__test__`,测试用例文件为`name.spec.js`**,比如下面的:

**src\array\\__test__\max.spec.js**

```js
import { max } from '../max'

describe('array/max', () => {
  const orign = [1, 3, 1]
  it('array/max-最大值', () => {
    expect(max(orign)).toBe(3)
  })
})

```

## 常见测试

可以阅读官网