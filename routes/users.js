var express = require('express');
const session = require('express-session');
const shop = require('../models/shop');
const table_string = require('../models/table_string');

var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  // res.send('respond with a resource');
  
   ss =req.session
  if (ss.role=='shop'){
  let shopdetail = await shop(ss.shopid);
    // let tempo3= await product(tempo2.id);
    let table = await table_string(ss.shopid);
    res.render('users', {
      title: 'users', name: ss.username,
      shop: shopdetail,
      table: table
    });
  }
  else  if (ss.role=='director')res.redirect('/admin')
  else res.redirect('/login')

});

module.exports = router;
