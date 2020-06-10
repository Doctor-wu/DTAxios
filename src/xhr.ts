import { AxiosRequestConfig, Method } from './types/config'

export function xhr(config: AxiosRequestConfig): void {
  const { data = null, method = 'get', url, params = null } = config
  let resolvedUrl = genUrl(config)
  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), resolvedUrl, true)

  request.send(data)
}

function genUrl(config: AxiosRequestConfig): string {
  const { data = null, method = 'get', url: baseUrl, params = null } = config
  let resultUrl: string = baseUrl
  if (params) resultUrl += parseParams(params)
  return resultUrl
}

function parseParams(params: { [index: string]: any }): string {
  if (!params) return ''
  let str = '?'
  for (let [key, value] of Object.entries(params)) {
    str += `${key}=${value}&`
  }
  str = str.substring(0, str.length - 1)
  return str
}

console.log(
  genUrl({
    url: 'https://dtwu.club',
    method: 'get',
    params: {
      name: 'Doctorwu',
      age: 18,
      company: 'tencent:D'
    }
  })
)
