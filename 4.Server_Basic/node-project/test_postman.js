const express = require("express");
const app = express();

const port = 3000;

//이거 넣어야 json 받을 수 있는듯
app.use(express.json({
  limit:'50mb'
}));

app.get('/', function(req,res){
  res.send('Hello World postman!');
});

app.get('/about', function (req, res){
  res.send('about');
});

app.post('/customer', function(req,res){
  console.log(req.body.param);
  res.send(req.body.param);
})

app.listen(port, ()=>{
  console.log(`서버 실행 http://localhost:${port}`);
});

