const express = require("express");

const app = express();

const port = 8888;

app.get('/', (req,res)=>{
  res.send("hello world");
});

//에러 발생하면 이 루트로 Express가
//클라에 응답해준다
//500에러 코드와 정보 전달함.
app.get('/error', function (req, res){
  throw new Error('에러 발생');
});


/*
//에러 핸들러 미들웨어 함수
app.use(function(err, req, res, next) {
  res.status(500).json({statusCode:res.statusCode, errMessage:err.message});
  //에러 코드 500 에러메시지 전달
});
*/


app.get('/error2', function (req, res, next){
  next(new Error('에러 발생~~'));
})
  .use(function(err, req, res, next) {
  res.status(500).json({statusCode:res.statusCode, errMessage:err.message});
  //에러 코드 500 에러메시지 전달
});
//책에선 전혀 설명 없지만 이렇게 쓰는건데
//책 설명에는 앱에서 에러가 발생시
// 한군데에서 에러를 처리 할 수 있다.
// 이따위로 써 놨는데
// 말만 들었을때는 하나 해두면 모든 에러 처리 가능하다거나,
// 아니면, 한번 선언해두면,
// 다른 get, post 메소드 들에서는
// 또 쓸필요가 없다 라는 것처럼 들리잖아?
// 근데 결과물은 주렁주렁이네?
//무당처럼 뭔 에러가 터질지 미리 준비해놓고
//달아놔야 되는거네?
//솔찍히 안쓰는데 syntax상에 있어서
//억지로 집어넣은 거일듯



app.listen(port, ()=>{
  console.log(`서버 실행 http://localhost:${port}`);
});




