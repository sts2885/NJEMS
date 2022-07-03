const express = require("express");
const app = express();

const port = 8888;

// express에서 유지보수하지만
// 쓰려면 따로 설정해줘야 돼네
/*
//어쩐지 이상하더라 ㅡㅡ 4.16버전 부터는 express에 내장됨
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
*/


app.get('/', (req, res)=>{
  res.send('Middle ware module');
});


app.use(express.json({
  limit: '50mb'
}));

//그래도 이건 써야 된다고 함.
//이러면 전체 적용

//app.use(express.urlencoded({extended: false}));
//app.use(express.json());



//단일 라우터 적용
const urlencodedParser = express.urlencoded({extended:false});
const jsonParser = express.json();

app.post('/login', urlencodedParser, function(req, res){
  res.send('welcome, ' + req.body.username)
});

app.post('/api/users', jsonParser, function(req, res){
  //req.body 에서 정보 획득
})




const compression = require('compression');
// 전체 적용
//app.use(compression());

//모든 파일이 다 큰게 아니기 때문에
// 큰거만 압축이 나음
// 압축 푸는데 괜히 리소스 쓰니까.

app.use('/api/getMap', compression());



//const cookieSession = require('cookie-session');

/*
app.use(cookieSession({
  name: 'session',
  keys: ["secret key"],
  maxAge: 24*60*60*1000//24시간 유지
}))

*/

//express-session

const session = require('express-session');

// 실행시 프로젝트 폴더에 sessions라는 폴더가 생성된다.
// 포트로 접속하면
// sessions 폴더에 세션 정보가 json 파일로생성된다.
//열어보면 세션 정보 확인 가능
//이렇게 저장된 세션 -> req.session으로 접근 가능

/*
app.use(session({
  secret: 'secret key',//암호화 키
  resave: false, // 세션에 변경이 없어도 항상 다시 저장하냐
  saveUninitialized: true, // 초기화 되지 않은 많은 세션을 저장소에 강제로 저장할까?
  cookie: {//세션 관리 시 클라에 보내는 쿠키
    httpOnly: true,//클라 자바스크립트에서 document.cookie로 쿠키 정보 못봄
    secrue: true,//https 환경에서만 쿠키 정보를 주고 받음
    maxAge: 60000// 쿠기가 유지되는 시간(밀리세컨드)
  }
}));
*/
// 위처럼 하면 세션이 서버 메모리에 저장됨
// 메모리는 휘발성이니까
// 저장이 목적이면, 서버가 날아가거나 하면
// 문제가 생기니까 db 혹은 파일로 저장해라.


//세션정보를 파일로 저장해서 관리 할 수 있음
const fileStore = require('session-file-store')(session);

app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: true,
    maxAge: 60000
  },
  store: new fileStore()
}));

app.get('/get_session', (req,res,next)=>{
  console.log(req.session);
  res.send(req.session);
})

//로그인 이후 사용 가능 서비스들
// 로그인 인증
// 이후 이메일 정보 + 로그인 여부를 확인하고
// 그때그때 비번확인하는게 아니라.
//사용함.

//로그인 요청
app.post('/login', (req,res,next)=>{
  //사용자 정보 확인
  // object destructuring
  // request.body에서 찾음
  const {email, pw} = req.body.param;
  //세션에... 아 내가 직접 입력하는 거였어? ㅋㅋㅋ
  //그러네 이런거면 브라우저에 저장하면 안되짘ㅋ
  req.session.email = email;
  req.session.is_logined = true;
  req.session.save(err => {
    if(err) throw err;
    res.redirect('/home'); //확인 다 끝났으니 홈화면으로 보내줌
  });
});

//로그아웃시 세션 삭제 해주기
//뭐야 세션 삭제인데 왜 delete 안써
app.post('/logout', (req, res, next)=>{
  req.session.destroy();
  //ㅋㅋㅋ 로그아웃 했는데 로그인 페이지로 보내버린다고?
  res.redirect('/login');
})


// 이거 두개는 빼겠음. 핵심 로직과는 거리가 좀 있고
// 취업 되고 난 뒤에 해도 됨
//CORS => 접근 권한
//morgan => http 로그 파일 생성


//multer
//multi-part/form-data
// 처리용 미들웨어
// 전송한 파일을 쉽게 업로드.
// 쉽게? 뭐 코드가 안늘어나도 된다 같은건가?
// 성능상의 향상이 있어서 쓰는거 아니었어?





app.listen(port, ()=>{
  console.log(`서버 실행 http://localhost:${port}`);
});




