const express = require("express");
const app = express();

const responseTime = require('response-time');

const timeout = require('connect-timeout');

const port = 3000;

//5초 타임아웃
//가급적이면 router 별로 타임아웃을 둬라
app.use(timeout('5s'));


app.use(responseTime((req, res, time) =>{
  console.log(`${req.method} ${req.url} ${time}`);
}))

app.get('/', function(req, res){
  res.send('hello, world!')
})

app.post('/save', timeout('5s'), express.json(), haltOnTimeout, function(req, res, next){
  savePost(req.body, function (err, id){
    if (err) return next(err);
    if (req.timedout) return;
    res.send('saved as id ' + id);
  });
});

function haltOnTimeout (req, res, next) {
  if (!req.timedout) next();
}

function savePost (post, db) {
  setTimeout(function (){
    cb(null, ((Math.random() * 40000) >>> 0))
  }, (Math.random() * 7000) >>> 0)
}


app.listen(port, ()=>{
  console.log(`서버 실행 http://localhost:${port}`);
});





