读取数组元素

数组中与 prop 类似的是 nth；与 pick 类似的是 slice，跟 has 类似的是 contains

const numbers = [10, 20, 30, 40, 50, 60]
 
nth(3, numbers) // => 40  (0-based indexing)
 
nth(-2, numbers) // => 50 (negative numbers start from the right)
 
slice(2, 5, numbers) // => [30, 40, 50] (see below)
 
contains(20, numbers) // => true

const numbers = [10, 20, 30, 40, 50, 60]
 
head(numbers) // => 10
tail(numbers) // => [20, 30, 40, 50, 60]
 
last(numbers) // => 60
init(numbers) // => [10, 20, 30, 40, 50]
 
take(3, numbers) // => [10, 20, 30]
takeLast(3, numbers) // => [40, 50, 60]

增、删、改数组元素

const numbers = [10, 20, 30, 40, 50, 60]
 
insert(3, 35, numbers) // => [10, 20, 30, 35, 40, 50, 60]
 
append(70, numbers) // => [10, 20, 30, 40, 50, 60, 70]
 
prepend(0, numbers) // => [0, 10, 20, 30, 40, 50, 60]
 
update(1, 15, numbers) // => [10, 15, 30, 40, 50, 60]


const numbers = [10, 20, 30, 40, 50, 60]
 
remove(2, 3, numbers) // => [10, 20, 60]
 
without([30, 40, 50], numbers) // => [10, 20, 60]
 
drop(3, numbers) // => [40, 50, 60]
 
dropLast(3, numbers) // => [10, 20, 30]

变换
const numbers = [10, 20, 30, 40, 50, 60]
 
adjust(multiply(10), 2, numbers)

读取对象属性

prop 读取单个属性

const wasBornInCountry = person => person.birthCountry === OUR_COUNTRY
const wasNaturalized = person => Boolean(person.naturalizationDate)
const isOver18 = person => person.age >= 18
 
point free 
const wasBornInCountry = compose(equals(OUR_COUNTRY), prop('birthCountry'))
const wasNaturalized = compose(Boolean, prop('naturalizationDate'))
const isOver18 = compose(gte(__, 18), prop('age')) 

pick 读取多个属性

has 验证属性

path读取嵌套属性

对属性增、删、改、查

assoc / assocPath

const updatedPerson = assoc('name', 'New name', person)。

assocPath：const updatedPerson = assocPath(['address', 'zipcode'], '97504', person)

dissoc / dissocPath / omit

const updatedPerson = dissoc('age', person)。

属性转换


const celebrateBirthday = evolve({ age: inc })

合并对象

函数组合

complement //not

Both/Either

const isCitizen = person => wasBornInCountry(person) || wasNaturalized(person)
 
const isEligibleToVote = person => isOver18(person) && isCitizen(person)

const isCitizen = either(wasBornInCountry, wasNaturalized)
const isEligibleToVote = both(isOver18, isCitizen)

Pipelines(管道)

部分应用函数 偏函数
partial 和 partialRight 参数必须为数组

顺序错误的参数

第一个选择是 flip。flip 接受一个多元函数（元数 >= 2），返回一个元数相同的新函数，但前 2 个参数的顺序调换了。它主要用于二元函数，但也可以用于一般函数。

placeholder (占位符)

const threeArgs = curry((a, b, c) => { /* ... */ })
 
const middleArgumentLater = threeArgs('value for a', __, 'value for c')

声明式编程

Ramda 提供了 add、subtract、multiply 和 divide 函数来替代标准的算术运算符。所以我们可以使用 Ramda 的 multiply 来代替我们自己实现的乘法，可以利用 Ramda 的柯里化 add 函数的优势来取代我们的 addOne，也可以利用 multiply 来编写 square：

const square = x => multiply(x, x)
 
const operate = pipe(
  multiply,
  add(1),
  square
)

Comparison (比较)

使用 equals 代替 ===，使用 gte 替代 >=。

null 或 undefined。Ramda 为这两种情况提供了方便的判断函数：isEmpty 和 isNil

逻辑

and、or 和 not 用于处理数值

Conditionals (条件)

ifElse

const forever21 = age => age >= 21 ? 21 : age + 1

const forever21 = age => ifElse(gte(__, 21), () => 21, inc)(age)

constants (常量)

const forever21 = age => ifElse(gte(__, 21), always(21), inc)(age)

identity (恒等)

const alwaysDrivingAge = age => ifElse(lt(__, 16), always(16), a => a)(age)

const alwaysDrivingAge = age => ifElse(lt(__, 16), always(16), identity)(age)

when 和 unless

在 ifElse 代码中，其中一个条件分支为 identity 也很常见。所以 Ramda 也提供了便捷的方法。

const alwaysDrivingAge = age => when(lt(__, 16), always(16))(age)

如果第一个条件分支是 identity，可以用 unless。借助 gte(__, 16) 来翻转一下我们的条件，便可以使用 unless 了

const alwaysDrivingAge = age => unless(gte(__, 16), always(16))(age)

cond switch 语句或链式的 if...then...else 语句。

const water = temperature => cond([
  [equals(0),   always('water freezes at 0°C')],
  [equals(100), always('water boils at 100°C')],
  [T,           temp => `nothing special happens at ${temp}°C`]
])(tem


透镜（lens）以声明式和不变式来读取、更新和转换对象的属性和数组的元素。

ensProp：创建关注对象某一属性的透镜。
lensPath: 创建关注对象某一嵌套属性的透镜。
lensIndex: 创建关注数组某一索引的透镜。

const nameLens = lensProp('name')
const twitterLens = lensPath(['socialMedia', 'twitter'])

辅助函数 
view：读取透镜的值。
set：更新透镜的值。
over：将变换函数作用于透镜。

Transduce 相较于 Reduce 的改进，用一句话概括：在使用 Reduce 对每个元素归约之前，先对取出的每个元素进行转换。

const transformer = reducingFunction => ({
  // 1. 作为 reduce 开始的初始值
  init: () => 1,

  // 2. 每次输入一个元素，并将本次计算结果
  //    传给下次迭代的 reducing function
  step: reducingFunction,

  // 3. 将最后一次的计算结果作为输出
  result: result => result,
});

const reduce = (xf, init, input) => {
  let result = input.reduce(xf.step, init);
  return xf.result(result);
};

包装

const reduce = (xf, init, input) => {
  if(typeof xf === 'function'){
    // 确保 reduce 中含有 transformer 
    xf = wrap(xf);
  }
  const result = input.reduce(xf.step, init);
  return xf.result(result);
}

const wrap = xf => ({
  // 1. 我们会显式的传入一个 reduce 的初始值，
  //    所以这里不再需要内部的 init 函数
  init: () => {
    throw new Error('init not supported');
  },

  // 2. 每次输入一个元素，并将本次计算结果
  //    传给下次迭代的 reducing function
  step: reducingFunction,

  // 3. 将最后一次的计算结果作为输出
  result: result => result,
}