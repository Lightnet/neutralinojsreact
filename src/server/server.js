/*
  LICENSE: MIT
  Created by: Lightnet
*/

const express = require('express')
const http = require('http')
const app = express()
const port = 80

const routes = require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const reload = require('reload')
//const watch = require('watch');//outdate
const watch = require('node-watch');

function main(){

  //app.use(express.static('public'))
  app.set('port', process.env.PORT || port)
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
  //app.listen(port, () => {
    //console.log(`web server listen http://localhost:${port}`)
  //})

  var server = http.createServer(app);
  console.log('reload?...');
  
  reload(app).then(function (reloadReturned) {
    
    // Reload started, start web server
    server.listen(app.get('port'), function () {
      console.log('Web server listening on port ' + app.get('port'))
    })

    watch(__dirname + "../../../resources", { recursive: true }, function(evt, name) {
      console.log('%s changed.', name);
      reloadReturned.reload();
    });

  }).catch(function (err) {
    console.error('Reload could not start, could not start server/sample app', err)
  })
}

main();
//module.exports.main = main;
module.exports = main;