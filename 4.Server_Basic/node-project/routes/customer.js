
const express = require('express');

//router 클래스
//라우트 처리를 하나으 ㅣ
//파일이 아닌 여러 파일에서 가능
const router = express.Router();

//앞으로 app.js에 기본경로를 /customer로 보낼거임
// 그니까 이 파일에서는 /customer 가 아니라
//기본경로라고 생각되나봄?
router.get('/', function(req,res){
  res.send('customer 라우트 루트');
});


router.post('/insert', function(req, res) {
  res.send('/customer/insert 라우트')
});

router.put('/update',function(req,res){
  res.send('/customer/update 라우트');
});

router.delete('/delete', function(req,res){
  res.send('/customer/delete 라우트');
});

module.exports = router;
