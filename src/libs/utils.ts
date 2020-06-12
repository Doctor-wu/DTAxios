const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  if (toString.call(val) === '[object Date]') return true
  return false
}

// export function isObject(val:any):val is Object{
//   if(val !== null && typeof val === 'object') return true
//   return false
// }

export function isPlainObject(val: any): val is Object {
  if (toString.call(val) === '[object Object]') return true
  return false
}
