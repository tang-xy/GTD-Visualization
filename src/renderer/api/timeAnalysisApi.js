import request from '@/utils/request'

// get regions geojson
export function getRegion (params) {
  return request({
    url: '/gtd/api/region',
    method: 'get',
    params
  })
}

// get region geojson by id
export function getRegionById (params, id) {
  return request({
    url: '/gtd/api/region' + id,
    method: 'get',
    params
  })
}

// get countries geojson
export function getCountry (params) {
  return request({
    url: '/gtd/api/country',
    method: 'get',
    params
  })
}

// get countries geojson by id
export function getCountryById (id, params) {
  return request({
    url: '/gtd/api/country/' + id,
    method: 'get',
    params
  })
}

// get points geojson
export function getGeneral (params) {
  return request({
    url: '/gtd/api/tdgeneral',
    method: 'get',
    params
  })
}

// get statistics data
export function getStatistics (params) {
  return request({
    url: '/gtd/api/tdinfo/statistics',
    method: 'get',
    params
  })
}

// get detail information
export function getInfo (params) {
  return request({
    url: '/gtd/api/tdinfo',
    method: 'get',
    params
  })
}

// get global statistics data
export function getGlobalStatistics (params) {
  return request({
    url: '/gtd/api/tdinfo/globalStatistics',
    method: 'get',
    params
  })
}
