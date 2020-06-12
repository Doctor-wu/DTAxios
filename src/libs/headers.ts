import { isPlainObject } from './utils'

export function processHeaders(headers: any, data: any): any {
  normalizedHeaders(headers, 'Content-Type')

  if (isPlainObject(data) && headers) {
    headers['Content-Type'] = headers['Content-Type'] || 'application/json;charset=utf-8'
  }
  return headers
}

function normalizedHeaders(headers: any, normalizedName: string): any {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}

export function parseHeaders(headers: string): Object {
  // console.log(headers);
  let parsed: { [index: string]: any } = {}
  headers = headers.trim()
  if (!headers) {
    return parsed
  }

  headers.split('\r\n').forEach(line => {
    let [key, value] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (value) {
      value = value.trim()
      parsed[key] = value
    }
  })

  return parsed
}
