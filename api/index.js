const express = require('express')
const fs = require('fs')
const _ = require('lodash')
const app = express()
app.use(express.static('dist'))
app.use(express.static('app/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



// app.use(async (req, res, next) => {
//     // req.db = await connect()
//     next()
// })


module.exports = app