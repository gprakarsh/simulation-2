const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()

const ctrl = require('./controller')

const app = express()
app.use(bodyParser.json())

app.use( express.static( `${__dirname}/../build` ) )   

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
}).catch(error => console.log(error))

app.get(`/api/houser`,ctrl.getAll);
app.post(`/api/houser/add`,ctrl.createProperty);
app.delete(`/api/houser/delete/:id`,ctrl.deleteProperty);

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Magic at ${PORT}`)
})
