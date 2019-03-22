const express = require('express')
const router = express.Router()

const routes = app => {
  router.get('/devices/:id', (req, res) => {
    const actualPage = '/devices'
    const queryParams = { action: 'show', id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  return router
}

module.exports = routes
