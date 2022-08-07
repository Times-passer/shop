import axios from 'axios'
import { ElLoading, ElMessage } from 'element-plus'
let loading = null

// 二次封装,新建一个axios实例,名叫service
// http://www.axios-js.com/zh-cn/docs/#创建实例
export const service = axios.create({
  timeout: 8000,
  baseURL: 'http://127.0.0.1:8888/api/private/v1/',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
})

// 封装post请求
export const post = (config) => {
  console.log('post请求')
  return service({
    ...config,
    method: 'post',
    data: config.data, // data 写在...config 后面  这样如果存在config.data  就会被后面的这个data覆盖(当然，因为这里data: config.data 所以没什么区别)
  })
}

// 封装get请求
export const get = (config) => {
  console.log('get请求')

  return service({
    ...config,
    method: 'get',
    data: config.data,
  })
}

// 请求拦截
// http://www.axios-js.com/zh-cn/docs/#拦截器
service.interceptors.request.use((config) => {
  console.log('请求拦截')

  loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  return config
})

// 响应拦截
service.interceptors.response.use(
  (response) => {
    loading.close()
    // 请求出错时
    if (!response.data.data) {
      ElMessage({
        message: response.data.meta.msg || '服务器错误',
        type: 'error',
        center: true,
        duration: 2000,
      })
    }
    return response.data
  },
  (error) => {
    loading.close()

    ElMessage({
      message: '服务器错误',
      type: 'error',
      center: true,
      duration: 2000,
    })
    return Promise.reject(error)
  }
)
