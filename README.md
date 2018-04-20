# rock-error
异常处理中心，通过rock-error模块，注册各种异常类型，通过error方法获得对应的error实例，error实例继承自Error类

## 如何使用rock-error模块
### registerType
通过registerType方法，注册异常的类型

``` javascript
import {registerType} from 'rock-error'

// 通过registerType的方法，注册异常类型
// registerType方法包含三个参数
// type 异常的类型名称
// startCode 该类型的异常起始code
// template 该类型的异常信息
registerType('myError', 2000, 'myError的错误')

```
### registerError
通过registerError方法，注册异常

``` javascript
import {registerError} from 'rock-error'

// 通过registerError的方法，注册异常
// registerType方法包含三个参数
// code 异常码，在一个项目中只一个异常对应一个异常码  code, type, message
// type 当前异常的类型
// message 异常的提示信息，支持模板变量
registerError(2001, 'myError', 'myError类型的2001异常')

```
### error
通过error方法，获得异常的实例
``` javascript
import {error} from 'rock-error'

// 通过error的方法，获得异常的实例
// error方法包含二个参数
// code 异常码
// params 异常提示信息中的变量对象
error(2001, {title})

```

## Installation

`npm install rock-error`


## MIT Licenced
