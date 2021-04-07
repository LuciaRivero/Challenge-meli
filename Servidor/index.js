const express = require('express')
const cors = require('cors')
const ItemRoutes = require('./route/item')
const app = express()

app.use(cors())
app.use('/api/', ItemRoutes)
app.listen(8081, () => console.log("servidor corriendo en http://localhost:8081"))