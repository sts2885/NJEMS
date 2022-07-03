
const express =require('express');

const app = express();

//암튼 root라고 보냈다.
app.get('/', function(req, res) {
  res.send('root');
})


//get post 등 매우 많은 메소드가 있음
//trace, copy, lock, mkcol, unsubscribe 등등
// 클라 -> 서버 (get)
//이면 여기 코드에서도 get으로 잡혀 있어야 함.
//즉 path * method 만큼 함수를 만들 수 있음
//3000 => 포트임
//서버 실행될때 서버쪽 터미널에 뜨는 표시
app.listen(3000, ()=>{
  console.log('Server started. port 3000.');
});

app.get('/customer', function(req,res) {
  res.send('get 요청에 대한 응답');
});


app.post('/customer', function(req, res) {
  res.send('post 요청에 대한 응답')
})

app.all('/test_all', function(req,res){
  res.send('all 요청');
});

// b? : b가 0개 혹은 1개
app.get('/ab?cd', (req, res)=>{
  res.send('ab?cd');
});

//b+ : b가 1개이상
app.get('/ab+cd', function(req,res){
  res.send('ab+cd');
});

// * : 문자가 없거나 어떤 문자든 있거나.
// /ab*cd => /abcd, /ab____sdfgerg4g34r5____cd
app.get('/ab*cd',(req, res)=>{
  res.send('ab*cd');
});

// (cd)? : cd가 0번 혹은 1번
app.get('/ab(cd)?e', function(req,res){
  res.send('ab(cd)?e');
});


//정규식 기반 라우트 경로

//뭐야 문자열 형태가 아니어도 된다고?
// 라우트 경로에 a가 포함되어 있는 경우
app.get(/a/, function(req,res){
  res.send('/a/');
});
app.get(/^insert/, function(req,res){
  res.send('/^insert');
});
//^insert : insert로 시작하는 경우


app.get('/contact', function(req,res){
  res.send('contact');
});


//하나의 함수에서 2개 이상의 콜백함수 실행가능

app.get('/example', function(req, res, next){
  console.log('1st');
  next();
}, function(req, res){
  res.send('2nd');
});

//콜방 함수 배열 넣어버리기 삽가능


const ex0 = function(req,res,next){
  console.log('1st');
  next();
};

const ex1 = function(req,res,next){
  console.log('2nd');
  next();
};


const ex2 = function(req,res){
  res.send('3rd');
};

app.get('/examples', [ex0,ex1,ex2]);


// res.send, json, download 등등
// 이 메소드 중 하나도 호출 못하면
// 클라이언트 요청이응답을 못받고 정지해있음

//app.route
//여러 메소드를 같은 디렉토리함수 안에서 설정 가능

app.route('/children')
  .get(function(req,res) {
    res.send('조회');
  })
  .post(function(req,res){
    res.send('추가');
  })
  .put(function(req,res){
    res.send('수정');
  })
  .delete(function(req,res){
    res.send('삭제');
  });


