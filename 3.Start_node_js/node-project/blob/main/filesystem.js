const fs = require('fs');

//IO는 비동기 절차 따로 안해도
//기본값이 비동기인듯
fs.readFile('./sample/text.txt', 'utf8', (err, data)=>{
  if (err) {
    throw err;
  }
  console.log(data);
});


//오히려 동기시켜 읽는게 함수가 따로 있음
//이게 상대경로가 git folder 기준임... 왠진 모르겠음.
// 아~;; vsc 경로가 git folder였음
var text = fs.readFileSync('./sample/text.txt', 'utf8');

console.log(text);

let data ='파일 쓰기 테스트';
fs.writeFile('./sample/text_w.txt', data, 'utf8', (err)=>{
  if (err) {
    throw err;
  }
  console.log('비동기 파일 쓰기 완료')
});

//이거 쓰면 그런 파일 없다고 함. 비동기화 했기 때문에
//시간 좀 지나야 함.
//console.log(fs.readFileSync('./sample/text_w.txt','utf8'))

fs.writeFileSync('./sample/text_w2.txt', data, 'utf8');
console.log('동기 파일 쓰기 완료.')

//fs.watchFile(파일명, 리스너);
//파일의 변경 사항 여부를 감시 할 수 있음.
// 부를때마다 비교인건지
//바뀌면 바로 observer pattern 처럼 알림이 오는건지

// 일정시간마다 비교임
//https://stackoverflow.com/questions/5394620/node-js-how-does-fs-watchfile-work
//https://stackoverflow.com/questions/4482352/node-js-fs-watchfile-persistent-watch-mechanics

// 여기 보면 계속 감시 시키며 cpu를 잡아먹는 행동이고
// 뭐 딱히 손댈 방법은 없다.
// interval를 손대면 확인 간격이 늘어나지만
// 리눅스에서는 아무 효과 없다.

//책보다 인터넷이 더 나은거 같기도 하고...

// 각 OS별로 file change event가 있다.
// 리눅스 = inotify,
// 윈도우 = FileSystemWatcher
//리눅스에서 file watch를 할꺼면
// node-inofity-plus-plus라는걸 추천한다.
// 파일확인에 3~5초정도 걸리는 걸로 체감된다고함.
// default settings기준.
// 그럼 heavy하겠네?
// 그렇다... 별로 효율적은 코드는 아닌듯

//mongoDB 홈페이지에서
//https://www.mongodb.com/docs/drivers/node/current/usage-examples/changeStream/
// collection에서 watch 라는 메소드로  change stream, event를 볼 수 있다고 함.
// 그럼 이것도 아마 light하지는 않겠네



//책 -> 데이터베이스 조작 쿼리문 작성 파일
// watchFile() 함수로 감시
// 서버 재시작 않아도 변경 내용 반영 할때,
//watchfile()함수를 가장 많이 썼다.

//개발 도중 => 데이터베이스 쿼리는 계속 추가되고
//수정된다.
// 이때마다 쿼리 변경한걸 반영하려고
// node js 재시작하면 불편하다.

// 파일 변경사항 발생시 바로 재시작 하면
//유용하다.

// 개꿀팁인거 같은데?

let sql = require('./sql.js');

fs.watchFile(__dirname + '/sql.js', (curr, prev) => {
  console.log('sql 변경 발견, 반영');
  //캐시에 require로 넣은 파일 저장된것을 지움
  delete require.cache[require.resolve('./sql.js')];
  //다시 require
  sql = require('./sql.js');
})




