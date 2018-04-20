import format from 'string-template'
import BaseError from './BaseError'

const errorTypeMap = {}
const errorMap = {}
const defaultType = 'default'

registerType(defaultType, 1000, 'unknown error')
registerError()

export function registerType (type, startCode, template) {
  errorTypeMap[type] = {type, startCode, template}
}

export function registerError (code, type, message) {
  const errorType = errorTypeMap[type] || errorTypeMap[defaultType]
  let template
  if (typeof message === 'string') {
    template = message
  } else {
    template = errorType['template']
  }
  code = parseInt(code)
  if (typeof code !== 'number' || isNaN(code)) {
    code = errorType.startCode
  }
  errorMap[code] = {code, type, errorType, template}
}

export function error (code, params) {
  const errorObj = errorMap[code]
  const type = errorObj.type
  const template = `${code} | ${errorObj.template}`
  return new BaseError(code, type, format(template, params))
}
