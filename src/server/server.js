const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
// const imagesAPI = require('./imageRoutes.js')

mongoose.connect("mongodb://localhost/crm", { useNewUrlParser: true, useUnifiedTopology: true })


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    
    next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use('/', imagesAPI)

app.listen(3001, () => {
console.log(`Server is up on port 3001`)
})

