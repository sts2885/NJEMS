
const express = require('express');
const app = express();
const port = 8888;
/*
app.use(express.json({
  limit: '50mb'
}));
*/

//public 폴더내 모든 정적 파일을 URL로 제공 가능
//public 안넣고 그냥 검색 하거나
//아래처럼 바꾸고 하면 됨
//public자체는 왠지 모르겠는데 안됨
app.use(express.static('public'));
//files 폴더 내 모든 정적 파일 제공
app.use(express.static('files'));

//접근 경로 이름만 바꾸기
//static 넣어도, 안넣어도되네?
app.use('/static', express.static('public'));

app.listen(port, ()=> {
  console.log(`서버 실행 http://localhost:${port}`)
});

