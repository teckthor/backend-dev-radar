const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const port = 3333
const cors = require('cors')

mongoose.connect('mongodb+srv://teckthor:teckthor@cluster0-ozveg.mongodb.net/backendata?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port)
