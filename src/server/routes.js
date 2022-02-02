/*
  LICENSE: MIT
  Created by: Lightnet
*/

var express = require('express')
var router = express.Router()

// middleware that is specific to this router
//router.use(function timeLog (req, res, next) {
  //console.log('Time: ', Date.now())
  //next()
//})

// define the about route
router.get('/api/test', function (req, res) {
  res.send(JSON.stringify({meesage:'test'}));
})

module.exports = router;
//export default router;
