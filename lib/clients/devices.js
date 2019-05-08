const fetch = require('isomorphic-unfetch')

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

const refreshParam = (deviceId, paramsNames) => {
  const baseUrl = `/api/devices/${encodeURI(deviceId)}/tasks`
  const task = { name: 'getParameterValues', parameterNames: paramsNames }
  return fetch(`${baseUrl}?timeout=5000&connection_request`, {
    method: 'POST',
    headers,
    body: JSON.stringify(task)
  })
}

const refreshSummary = async (deviceId, params) => {
  const baseUrl = `/api/devices/${encodeURI(deviceId)}/tasks`
  const toRefresh = { parameters: [], objects: [] }

  Object.entries(params).forEach(([k, v]) => {
    for (const vv of v) {
      if (typeof vv === 'string') {
        toRefresh.parameters.push(vv)
      } else {
        toRefresh.objects.push(vv._object)
      }
    }
  })

  // this make me think objects in summary are not a good idea
  // it is absolutely possible to them being not updated at all,
  // but user might think so because the sole parameters succeed
  const idsPromises = toRefresh.objects.map(o => {
    const task = { name: 'refreshObject', objectName: o }
    return fetch(baseUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(task)
    })
      .then(res => res.json())
      .then(json => json._id)
  })

  const ids = await Promise.all(idsPromises)

  return new Promise(resolve => {
    const task = {
      name: 'getParameterValues',
      parameterNames: toRefresh.parameters
    }
    fetch(`${baseUrl}?timeout=5000&connection_request`, {
      method: 'POST',
      headers,
      body: JSON.stringify(task)
    }).then(res => resolve([ids, res]))
  })
}

const setParameterValues = async (deviceId, params) => {
  const baseUrl = `/api/devices/${encodeURI(deviceId)}/tasks`
  const toCommit = { parameters: params }

  const task = {
    name: 'setParameterValues',
    parameterValues: toCommit.parameters
  }
  return fetch(`${baseUrl}?timeout=5000&connection_request`, {
    method: 'POST',
    headers,
    body: JSON.stringify(task)
  })
}

export { refreshParam, refreshSummary, setParameterValues }
