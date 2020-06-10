import { AxiosRequestConfig } from './types/config'
import { xhr } from './xhr'

export function axios(config: AxiosRequestConfig): void {
  xhr(config)
}
