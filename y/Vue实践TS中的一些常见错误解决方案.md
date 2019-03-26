###mixin报错
```ts
import { Component, Prop, Vue ,Mixins} from 'vue-property-decorator'
import httpminix from '../mixin/httpMixin'
@Component({
  mixins:[httpminix]
})
export default class HelloWorld extends Vue {
  public async getUser() : Promise<void> {
    const r = await this.apiGet('/show') //HelloWorld上没有apiGet方法
    this.firstName = JSON.stringify(r.data)
  }
}
```
###解决方案
```ts
import { Component, Prop, Vue ,Mixins} from 'vue-property-decorator'
import httpminix from '../mixin/httpMixin'
@Component
// 这里从继承Vue改成继承Minix函数，这样就有提示了
export default class HelloWorld extends Mixins(httpminix) {
  public async getUser() : Promise<void> {
    const r = await this.apiGet('/show')
    this.firstName = JSON.stringify(r.data)
  }
  public mounted() {
   this.getUser()
  }
}
```

###扩展属性报错
我们现在代码里写一段window,然后用编辑器跳转到其.d.ts文件中去
```ts
// 定义一个全局变量 window 类型为Window
declare var window: Window;
// 截取Window接口
interface Window
```
由于这个接口为全局接口，所以我们可以声明一个同名全局全局接口，TS会帮我们合并
```ts
interface Window {
  // 也可以添加 
  // 字符串签名 可以允许添加未知名称属性
  [p: string]: any
}
// 这样就可以使用如下代码不报错
import axios from 'axios'
window.axios = axios
```
然后我们发现
```ts
window.axios //这里没有属性提示
```
然后我想把这个axios具体类型挂载上去,当然一想，像下面这样做
```ts
import {AxiosStatic} from 'axios'
interface Window {
  axios: AxiosStatic
}
```

然后发现报错了，window上没有axios这个属性，就很疑惑，尝试改回去，仍然报错
```ts
import {AxiosStatic} from 'axios'
interface Window {
  [p: string]: any
}
```

我就想这两个区别就是导入了一个类型，突然想到
###TS中没有import和export的TS文件变量被视为全局

然后回去一看原本Window的定义
```ts
// 注意lib.dom.d.ts这里没有export
interface Window
```
好的，想通了，就是因为使用import导入了一个类型，导致我自定义Window接口变成了模块内的，这时候的解决方案当然是看看内置语法有没有能显示定义全局性的变量
```ts
// bingo  此时window.axios有提示啦
import { AxiosStatic } from "axios";

declare global {
  interface Window {
      axios: AxiosStatic
  }
}

export { };
```

TS为我们在模块定义全局提供了一个方式,用于解决在模块中扩展全局
```ts
declare global {
  // your type code
}
```

扩展Vue属性例子
```ts
import Vue from 'vue'
declare module "vue/types/vue" {
  interface Vue {
    $message: string;
  }
}

在组件类中可以这样访问
this.$messgae //这里有属性提示
```


####总结
需要扩展一个第三方声明文件，需要确定其命名空间以及扩展变量实现的接口结构，然后复制该接口写一次自己的类型即可