var express = require('express');
var router = express.Router();
const request = require('request');



router.get('/', function (req, res, next) {

  request('http://b2ercoding.servebeer.com:5853/test', function (error, response, body) {
    console.log(response.body)
    res.render('index', { title: response.body });
  });

});

module.exports = router;
