const { name } = require('ejs');
var express = require('express');
const authen = require('../models/authenticator');
const shop = require('../models/shop');
const product = require('../models/product');
const select_box = require('../models/select_box');

const table_string = require('../models/table_string');
const e = require('express');


var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'login page', });
});

router.post('/select_shop', async function(req, res, next) {
  let select_box_string= await select_box(0);
  console.log(req.body.shop_name)
  let table_string2= await table_string(req.body.shop_name);
  res.render('admin', {
    title: 'admin', 
    name: req.body.username,
    select_box:select_box_string,
    table:table_string2
  });
});

router.post('/login', async function (req, res, next) {
  let [tempo,shopid,role] = await authen(req.body.username, req.body.password);

  if (tempo == true && role=='shop') {
    
    let tempo2 = await shop(req.body.username, req.body.password);
    // let tempo3= await product(tempo2.id);
    let table = await table_string(shopid);
    res.render('users', {
      title: 'users', name: req.body.username,
      shop: tempo2,
      table: table
    });
  }
  else if (tempo == true && role=='director') {
    // let tempo2 = await shop(req.body.username, req.body.password);
    // let tempo3= await product(tempo2.id);
    // let table = await table_string(tempo2.id);
    let select_box_string= await select_box(0);
    let table_string2= await table_string(0);

    res.render('admin', {
      title: 'admin', 
      name: req.body.username,
      select_box:select_box_string,
      table:table_string2
    });
  }
  else res.render('index', { title: 'login page', });
});
module.exports = router;
