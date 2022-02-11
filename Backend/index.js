const express = require('express')
const rutas = require('./rutas.js')
const cors = require('cors')

const App = express();



App.use(express.json())
App.use(cors())
App.use(rutas)




App.listen(5001,()=>console.log('sever on port 5001'))