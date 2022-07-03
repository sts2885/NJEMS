
const express = require('express');
const customerRoute = require('./routes/customer');
const productRoute = require('./routes/product');

const app = express();
const port = 3000;


//클라이언트 요청 body를 json으로 파싱
//그니까 제한이 50매가가 걸린다는거지?
app.use(express.json({
  limit: '50mb'
}));

/*
*/
//와... 진짜 짧다.
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, ()=> {
  console.log(`서버 실행됨 http://localhost:${port}`)
});

app.use('/customer', customerRoute);
app.use('/product', productRoute);
//이렇게 분리해서 route를 기능별로 관리 가능

//여럿이 개발할때
// 이렇게 해놓으면
//같은 파일 수정하느라 끙끙거릴 필요가 없다.
