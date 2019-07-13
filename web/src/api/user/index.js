import request from '@/utils/request'

export function registe(data) { //
  return request({
    url: 'registe',
    method: 'post',
    data
  })
}

export function login(data) { //
    return request({
      url: 'login',
      method: 'post',
      data
    })
}
