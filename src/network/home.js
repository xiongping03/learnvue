import {fetch} from './fetch.js'
export function  getHomeMutiData(){
  return fetch({
    url: '/home/multidata'
  })
}
