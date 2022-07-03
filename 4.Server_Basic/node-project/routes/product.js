

//각 파일 별로 product는
// /product만 보냄
// customer는
// /customer만 보냄
const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.send("product");
});

router.post('/insert', function(req,res){
  res.send(' product insert');
});

router.put('/update', function(req,res){
  res.send('update product');
});

router.delete('/delete', function(req,res){
  res.send('delete product');
});


module.exports = router;