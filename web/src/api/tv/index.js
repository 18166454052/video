import request from '@/utils/request'

export function tvCategory(data) { //
  return request({
    url: 'tvCategory',
    method: 'post',
    data
  })
}

export function tvItem(data) { //
    return request({
      url: 'tvItem',
      method: 'post',
      data
    })
}

export function tvList(data) { //
  return request({
    url: 'tvList',
    method: 'post',
    data
  })
}