//导入axios框架
import axios from 'axios'
export function fetch(config){
  //创建axios 框架
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:500
  })
  //请求前拦截
  instance.interceptors.request.use(config=>{
    return config
  },err =>{

  })
  //请求后拦截
  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{

  })
  //发送真正的网络请求
  return instance(config)

}
