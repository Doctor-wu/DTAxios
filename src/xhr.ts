import { AxiosRequestConfig, AxiosPromise } from './types/config'
import { parseHeaders } from './libs/headers'

export function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, method = 'get', url, headers, responseType /*, params = null */ } = config
    const request = new XMLHttpRequest()

    if (responseType) {
      request.responseType = responseType
    }

    request.open(method.toUpperCase(), url, true)

    request.onreadystatechange = function loadData() {
      if (request.readyState !== 4) {
        return
      }
      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      const responseData =
        request.responseType.toLowerCase() !== 'text' ? request.response : request.responseText

      resolve({
        headers: responseHeaders,
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        config,
        request
      })
    }
    Object.keys(headers).forEach(name => {
      request.setRequestHeader(name, headers[name])
    })
    request.send(data)
  })
}
