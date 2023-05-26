const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 3000

app.use(express.json())
app.use(bodyparser.json())           //parsing the  incoming request bodies in middleware
app.use('/', require('./routes'))    //using api from the router 

app.all('/*', (req, res) => {
  res.status(404).send('API Not Found')
})

//running the server
app.listen(port, () => { console.log(`Express server listening on port ${port}`)})