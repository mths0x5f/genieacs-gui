const fetch = require('isomorphic-unfetch')
var parseUrl = require('parseurl')
const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()

const config = require('../config')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// === GENIEACS PROXIED CALLS ===

const genieacs = config.genieacsApiEndpoint

const appendHeaders = (headers, res) => {
  const noops = ['connection', 'date', 'transfer-encoding']
  Array.from(headers.entries()).forEach(e => {
    if (!noops.includes(e[0].toLowerCase())) {
      if (!res.get(e[0])) res.append(e[0], e[1])
    }
  })
}

router.get('/:resource', async (req, res) => {
  const resource = req.params.resource
  const search = parseUrl(req).search

  const r = await fetch(`${genieacs}/${resource}/${search}`, {
    cache: 'no-store'
  })
  const json = await r.json()

  appendHeaders(r.headers, res)
  res.status(r.status)
  res.statusMessage = r.statusText

  res.json(json)
})

router.post('/devices/:id/tasks', async (req, res) => {
  const deviceId = encodeURI(req.params.id)
  const search = parseUrl(req).search ? parseUrl(req).search : ''
  const task = req.body

  const r = await fetch(`${genieacs}/devices/${deviceId}/tasks${search}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
    body: JSON.stringify(task)
  })
  const json = await r.json()

  appendHeaders(r.headers, res)
  res.status(r.status)
  res.statusMessage = r.statusText

  res.json(json)
})

module.exports = router
