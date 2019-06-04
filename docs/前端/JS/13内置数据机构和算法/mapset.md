Map<k,v> k,v = > <any, any>
解决普通对象，key只能为字符串
操作：
```js
  const m = new Map()

  m.
```

const m = new Map()

Map.prototype.toJSON = function () {
  return strMapToObj(this)
}

// m[key] = value
m.set("name","cj")// 'name' => 'cj'
m.set(true,"cj")// true => 'cj'
m.set(1,"cj")// 1 => 'cj'
m.set({},"cj")// {} => 'cj'

// m[key]
m.get("name")
m.get(true)
m.get(1)
m.get({})

console.log(m)

// 键等算法  类似严格相等 === 但NaN被视为与自身相等
// 数字 
// 字符串
// 布尔
// 对象(数组) 内存地址
// undefined
// null
// NaN

// 方法
// set(k, v) //设置k，v对并返回Map
// delete(key) //删除k的状态
// clear() //清空
// get(k) //返回k对应v,否则返回undefined
// has(k) //返回k存在布尔值
// // 属性
// size //长度
// console.log(m.get({}))

//遍历
// keys
// values
// entries
// forEach
// for (let [key, value] of map) {
//   console.log(key, value);
// }

// 转换
// Map => Array
// ...

// Array => map
// new Map(arr)

// Map => Object
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

//Object => map
// function objToStrMap(obj) {
//   let strMap = new Map();
//   for (let k of Object.keys(obj)) {
//     strMap.set(k, obj[k]);
//   }
//   return strMap;
// }


// Set 唯一键

// const c = new Set(map) //数组或者iterable接口数据结构(Map Set)
   const c =       new Set(new Set(['1']))
// 相等规则与Map一致
console.log(JSON.stringify(c))

// 属性
// size

//方法

// add(v)
// delete(v)
// has(v)
// clear()

// 遍历 顺序为插入顺序
// 迭代方法与map一致

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}