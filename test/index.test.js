import assert from 'assert'
import {error} from '../src/index'

describe('测试BaseError类的功能', () => {
  it(`通过调用error方法，并传入1000的参数，生成一个异常的实例`, () => {
    const _error = error(1000)
    assert.equal(_error.code, 1000)
  })
})
