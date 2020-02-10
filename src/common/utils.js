//防抖函数
export function debounce(fuc,delay){
  let timer = null
  return function(...args){
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      fuc.apply(this,args)
    },delay)
  }
}
//节流函数
export function throttle(fuc,delay){
   let flag = true
  return function(...args){
    if(!flag) return
    flag = false
    setTimeout(()=>{
      fuc.apply(this,args)
      flag = true
    },delay)
  }
}
