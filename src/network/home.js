import {fetch} from './fetch.js'
export function  getHomeMutiData(){
  return fetch({
    url: '/home/multidata'
  })
}

export function getHomeGoods(page,type){
  return fetch({
    url: '/home/data',
    params:{
      type,
      page
    }
  })
}
