const express = require('express')
const app = express()
const router = express.Router()
const findArea = require('./find-area')
const checkCitizenId = require('./check-citizenid')

router.get('/findArea', (request, response) => {
    findArea(request, response)
 })
 router.get('/checkCitizenId', (request, response) => {
    checkCitizenId(request, response)
 })

app.use(router).listen(3000)
