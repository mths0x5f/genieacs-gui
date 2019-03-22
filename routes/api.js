const fetch = require('isomorphic-unfetch')
var parseUrl = require('parseurl')
const express = require('express')
const router = express.Router()

const config = require('../config')

// === GENIEACS PROXIED CALLS ===

const genieacs = config.genieacsApiEndpoint

const appendHeaders = (headers, res) => {
  let noops = ['connection', 'date', 'transfer-encoding']
  Array.from(headers.entries()).forEach(e => {
    if (!noops.includes(e[0].toLowerCase()))
      if (!res.get(e[0])) res.append(e[0], e[1])
  })
}

router.get('/:resource', async (req, res) => {
  const resource = req.params.resource
  const search = parseUrl(req).search

  let r = await fetch(`${genieacs}/${resource}/${search}`)
  let json = await r.json()

  appendHeaders(r.headers, res)
  res.status(r.status)

  res.json(json)
})

module.exports = router
