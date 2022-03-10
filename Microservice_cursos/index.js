const express = require('express')
const rutas = require('./rutas.js')
const cors = require('cors')
const path = require('path')

const App = express()

App.use(express.json())
App.use(express.urlencoded({ extended: true }))
App.use(cors())
App.use(rutas)
App.use(express.static(path.join(__dirname, './images')))



App.listen(5002, () => console.log('sever on port 5002'))
