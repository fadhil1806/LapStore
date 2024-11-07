const express = require('express')
const route = express.Route();

route.post('/api', createProduct)

module.exports = route