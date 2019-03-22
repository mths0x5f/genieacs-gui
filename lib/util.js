const fetch = require('isomorphic-unfetch')

const escapeHtml = unsafe => {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const setQueryStringParameter = (name, value) => {
  let params = new URLSearchParams(location.search)
  let state = { ...window.history.state }
  params.set(name, value)
  let to = decodeURIComponent(`${location.pathname}?${params}`)
  state['url'] = to
  state['as'] = to
  window.history.pushState(state, '', to)
}

const toQuery = o =>
  Object.keys(o)
    .map(k => `${k}=${o[k]}`)
    .join('&')

const queryResource = async (
  resource,
  { query, projection, skip, limit, sort } = {}
) => {
  let args = {
    ...(query && { query: JSON.stringify(query) }),
    ...(projection && { projection: projection.join(',') }),
    ...(skip && { skip }),
    ...(limit && { limit }),
    ...(sort && { sort: JSON.stringify(sort) }),
  }

  return fetch(`/api/${resource}/?${toQuery(args)}`)
}

module.exports = { escapeHtml, setQueryStringParameter, toQuery, queryResource }
