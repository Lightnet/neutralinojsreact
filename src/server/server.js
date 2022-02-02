const express = require('express')
const app = express()
const port = 8080

var routes = require('./routes')
var cors = require('cors')
var bodyParser = require('body-parser')

function main(){
  const devport = 51577;
  const app0 = express()
  app0.use(express.static('.'))
  app0.use(cors())
  app0.listen(devport, () => {
    console.log(`web server listen http://localhost:${devport}`)
  })

  //app.use(express.static('public'))
  app.use(express.static('./resources'))
  app.use(express.static('.'))
  app.use(cors())
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParser.json())

  //app.get('/', (req, res) => {
    //res.send('Hello World!')
  //})

  app.use("/",routes)
  
  app.listen(port, () => {
    console.log(`web server listen http://localhost:${port}`)
  })
}

main();
//module.exports.main = main;
module.exports = main;