const express = require("express");
const mysql = require("./mysql/sql.js");// my sql 폴더 안에 전체 sql js들
//그러면 당연히 sql.js도 들어 있음
//그리고 index.js도 
//왜 이름을 이따위로 지었는지 모르겠는데


//와... 어제 진짜 너무 집중 안되긴 했나 보다
// 책에 설명이 있는데 왜 없지? 하고 화내고
//있었네?
//pool 생성시, db 접속정보 => 코드에 노출시키는거
//별로다.
//dotenv 모듈 => 보안상 중요 데이터를 env파일로
//저장.

//.env인 것들 다 찾아서 넣음.
//근데 regex 안쓰고 이게 되네?
//보통은 'mysql/*.env' 여야 되는거 아니냐?
//여기 추가하는거 안되던데? 쓰는건 index.js인데;;
//require('dotenv').config({path:'mysql/.env'});
//require('dotenv').config({path:'mysql/access_data.env'});
//근데 db 에러 터지면 바로 서버 터져버리네?
//password 안넣었더니...
//try-catch 해놔야 겠는데?
//지금은 미입력이었지만
//db 서버가 터진다던지 하는건 얼마든지 있을 수 있는 일 아니냐?

const app = express();

app.use(express.json({
    limit: '50mb'
}));

app.listen(3000, () => {
    console.log("Server started. port 3000.");
});

app.get("/api/customers", async (req, res) => {
    //sql.js에 들어있는 customerList 쿼리를 실행한다.
    //=> json 형태로 넣어놨음
    //모듈을 폴더 단위로 불러도 된다고?
    //여러 파일에서 이름이 안겹칠거라는 확신이 있어?
    const customers = await mysql.query('customerList');
    console.log(customers);
    res.send(customers);
});

//빌렸다가 돌려준다고 해서
//빌리는 코드, 돌려주는코드
// 일정주기로 pool 생산하는 코드
// 사용중이면 lock 거는 코드 등이 있을 줄 알았는데
// 거창하게 설명한거 치고는 아무것도 없음.

//미친 패키지 폴더마다 express 등등 다시 깔아줘야 됌 ㅋㅋㅋㅋㅋ

app.post('/api/customers/insert', async(req, res)=>{
    const result = await mysql.query('customerInsert', req.body.param);
    console.log(result);
    res.send(result);
});

app.put('/api/customers/update', async (req, res)=>{
    console.log(req.body.param);
    const result = await mysql.query('customerUpdate', req.body.param);
    console.log(result);
    res.send(result);
})

//특정 param에 key - value 값으로 들어오도록
//설정해 놓은거네
app.delete('/api/customers/delete/:id', async(req, res)=>{
    const {id} = req.params;
    console.log(req.params);
    console.log("id", id);
    const result = await mysql.query('customerDelete', id);
    console.log(result);
    res.send(result);
})