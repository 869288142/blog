# 编写loader


##  调用loader

第一个`loader`是让我们的`loader`被`webpack`调用

**loader.js**

``` js
module.exports = function(source) {
  return source;
};
```

**配置loader**

``` js
{
    test: /\.txt$/,
    use: {
        loader: path.resolve(__dirname, './loaders/replace-text-markup-loader.js'),
    }
}
```

**test.txt**

``` txt
Hey [name]!
```

## 获取loader的options

**传递options**

``` js
{
    test: /\.txt$/,
    use: {
        loader: path.resolve(__dirname, './loaders/replace-text-markup-loader.js'),
        options: {
            name: 'chenjiang'
        },
    }
}
```
**loader.js**

``` js
const { getOptions } =  require('loader-utils');
module.exports = function(source) {
  const options = getOptions(this);
  console.log({ options });
  return source;
};
```

## 验证loader的options

一般配置是最容易出错误的，我们有必要去验证传递给`loader`的`options`是否符合我们的预期，帮助用户提升排查效率

**loader.js**

``` js
const { getOptions } =  require('loader-utils');
const { validate } =  require('schema-utils');
const schema = {
    type: 'object',
    properties: {
        name: {
        type: 'string'
      }
    }
}
module.exports = function(source) {
  const options = getOptions(this);
  validate(schema, options, {
    name: 'Example Loader',
    baseDataPath: 'options'
  });
  console.log({ options });
  return source;
};
```

## 修改source

**loader.js**

``` js
const { getOptions } =  require('loader-utils');
const { validate } =  require('schema-utils');
const schema = {
    type: 'object',
    properties: {
        name: {
        type: 'string'
      }
    }
}
module.exports = function(source) {
  const options = getOptions(this);
  validate(schema, options, {
    name: 'Example Loader',
    baseDataPath: 'options'
  });
  // 修改源码
  source = source.replace(/\[name\]/g, options.name);
  // 返回源码
  return `export default ${ JSON.stringify(source) }`;
};
```

## 异步loader

``` js
const { getOptions } =  require('loader-utils');
const { validate } =  require('schema-utils');
const schema = {
    type: 'object',
    properties: {
        name: {
        type: 'string'
      }
    }
}
module.exports = function loader(source) {
  const options = getOptions(this);

  validate(schema, options, {
    name: 'Example Loader',
    baseDataPath: 'options'
  });

  const callback = this.async();

  source = source.replace(/\[name\]/g, options.name);

  callback(null, `export default ${ JSON.stringify(source) }` );


}
```



