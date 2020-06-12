import { AxiosRequestConfig } from '../types/config'
import { isDate, isPlainObject } from './utils'

/**
 * [Url生成函数]
 * 生成一个合法url
 * @param config axios的请求配置对象
 * @author Doctorwu
 */
export function genUrl(config: AxiosRequestConfig): string {
  const { /* data = null,*/ method = 'get', url: baseUrl, params = null } = config
  if (method.toUpperCase() !== 'GET') return baseUrl
  let resultUrl: string = baseUrl.split('#')[0]
  resultUrl += !~resultUrl.indexOf('?') ? '?' : '&'
  if (params) resultUrl += parseParams(params)
  return resultUrl
}

/**
 * [Url的params解析函数]
 * 解析url中的params
 * @param params axios的请求配置对象中的参数属性, 要求索引签名
 * @author Doctorwu
 */
export function parseParams(params: { [index: string]: any }): string {
  if (!params) return ''
  const paramsArr: string[] = []
  for (let [key, value] of Object.entries(params)) {
    if (!value) continue

    let values: string[] = []
    if (Array.isArray(value)) {
      key += '[]'
      values = value
    } else {
      values = [value]
    }
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val)
      }

      paramsArr.push(`${encode(key)}=${encode(val)}`)
    })
  }

  return paramsArr.join('&')
}

/**
 * [paramEncode函数]
 * encode param并保留一些字符
 * @param param
 * @author Doctorwu
 */
function encode(param: string): string {
  return encodeURIComponent(param)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
