import { isPlainObject } from './utils'

export function resolveRequestData(data: any): any {
  if (isPlainObject(data)) return JSON.stringify(data)
  return data
}

export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      // 转换失败就原样返回
    }
  }
  return data
}
