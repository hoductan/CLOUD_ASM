const { name } = require('ejs');
var express = require('express');
const authen = require('../models/authenticator');
const shop = require('../models/shop');
const product = require('../models/product');

const jsonToTable = require('json-to-table');


var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'login page', });
});



router.post('/login', async function(req, res, next) {
  let tempo = await authen(req.body.username,req.body.password);
  
    if(tempo ==true)
    {
      let tempo2= await shop(req.body.username,req.body.password);
      let tempo3= await product(tempo2.id);
    res.render('users', { title: 'users', name:req.body.username,shop:tempo2,product:tempo3});
    }
    else res.render('index', { title: 'login page', });
});
module.exports = router;
