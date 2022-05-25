## 语法转译

### 支持程度

### 浏览器环境配置

#### target支持程度

`.swcrc`

``` json
{
    "env": {
        "targets":"default",
    }
}
```

### browserslist支持

**不支持**

## api转译

### entry

``` js
import "core-js/stable";

import "regenerator-runtime/runtime";
```

``` json
{
    "env": {
      "coreJs": 3,
      "mode": "entry"
    }
} 
```
### usage

``` json
{
    "env": {
      "coreJs": 3,
      "mode": "usage"
    }
} 
```

### 插件定制

支持js插件编写

## 当前问题

* 编译产物没经过大范围生产检验

* 插件生态弱