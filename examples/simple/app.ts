import { axios } from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get#hash',
  params: {
    a: 1,
    b: 2,
    name:'Doctorwu',
    date: new Date(),
    friends: [
      {name: 'x', age: 12},
      {name: 'y', age: 15},
      {name: 'z', age: 17}
    ]
  }
})
