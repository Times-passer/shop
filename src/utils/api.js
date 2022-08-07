import { service } from './services'

export const loginApi = (data) => {
  return service({
    url: '/login',
    method: 'post',
    data,
  })
}
