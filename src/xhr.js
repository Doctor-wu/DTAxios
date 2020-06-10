"use strict";
exports.__esModule = true;
function xhr(config) {
}
exports.xhr = xhr;
function genUrl(config) {
    var _a = config.data, data = _a === void 0 ? null : _a, _b = config.method, method = _b === void 0 ? 'get' : _b, baseUrl = config.url, _c = config.params, params = _c === void 0 ? null : _c;
    var resultUrl = baseUrl;
    if (params)
        resultUrl += parseParams(params);
    return resultUrl;
}
function parseParams(params) {
    if (!params)
        return '';
    var str = '?';
    for (var _i = 0, _a = Object.entries(params); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        str += key + "=" + value + "&";
    }
    str = str.substring(0, str.length - 1);
    return str;
}
console.log(genUrl({
    url: 'https://dtwu.club',
    method: 'get',
    params: {
        name: 'Doctorwu',
        age: 18,
        company: 'tencent:D'
    }
}));
