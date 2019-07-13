import request from '@/utils/request'

export function movieCategory(data) { //
  return request({
    url: 'movieCategory',
    method: 'post',
    data
  })
}

export function movieItem(data) { //
    return request({
      url: 'movieItem',
      method: 'post',
      data
    })
}

export function movieSearch(data) { //
  return request({
    url: 'movieSearch',
    method: 'post',
    data
  })
}