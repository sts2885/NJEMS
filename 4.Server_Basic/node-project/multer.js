const express = require("express");
const app = express();

const port = 3000;

/*
app.use(express.static('public'));
app.use('/static', express.static('public'));

app.get('/', (req, res)=>{
  res.redirect('./static/html/multer.html')
});
*/

app.use(express.json({
  limit: '50mb'
}));



app.listen(port, ()=>{
  console.log(`서버 실행 http://localhost:${port}`);
});




//multer
//multi-part/form-data
// 처리용 미들웨어
// 전송한 파일을 쉽게 업로드.
// 쉽게? 뭐 코드가 안늘어나도 된다 같은건가?
// 성능상의 향상이 있어서 쓰는거 아니었어?


const multer = require('multer');
const path = require('path');

// 디스크저장소 다루는 객체 생성
const storage = multer.diskStorage({
  //저장 될 위치
  destination: function (req, file, cb){
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb){
    //시스템 시간 + 올라온 파일 이름으로 파일 이름 설정
    cb(null, new Date().valueOf() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });


app.post('/profile', upload.single('avatar'), function(req,res,next){
  console.log(req.file);
  console.log(req.body);
  res.status(201).send({
    message: "suceed"
  })
});

//파일 여러장 업로드
app.post('/photos/upload', upload.array('photos', 12), function(req, res, next){
  console.log(req.files);
})


