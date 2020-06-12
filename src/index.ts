import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types/config'
import { genUrl } from './libs/url'
import { resolveRequestData, transformResponse } from './libs/data'
import { processHeaders } from './libs/headers'
import { xhr } from './xhr'

export function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  transformUrl(config)
  transformHeaders(config)
  transformRequestData(config)
}

function transformUrl(config: AxiosRequestConfig): void {
  config.url = genUrl(config)
}

function transformRequestData(config: AxiosRequestConfig): void {
  config.data = resolveRequestData(config.data)
}

function transformHeaders(config: AxiosRequestConfig): void {
  const { headers = {}, data } = config
  config.headers = processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}
