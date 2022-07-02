
//파일, 디렉터리 경로 작업용.
//파이썬에서도 썼던거니까.

const path = require('path');

// path.basename(path[,ext])

//현재 파일 절대경로
console.log(__filename);
//경로의 마지막 부분
console.log(path.basename(__filename));
//경로의 마지막 부분에서 확장자를 제거.
console.log(path.basename(__filename, '.js'));

//path.delimiter
//환경변수 구분자 = 윈도우는 세미콜론, 맥리눅스 : 콜론을 씀
console.log(path.delimiter);

//환경 변수 관련 path. 정보
console.log(process.env.PATH);
process.env.PATH.split(path.delimiter);

//윈도우면 C:\Window;system32 어쩌구 저쩌구 나오고
//리눅스 같은 경우 /usr/bin:/bin 이런거나옴

//현재 파일의 절대경로
console.log(__filename);
//파일이 위치한 디렉터리(폴더) 경로
console.log(path.dirname(__filename));

//extname 파일 확장자명
console.log(path.extname('index.html'));

//path.format(pathObject)
//pathObject의 property
//dir, root, base, name, ext

var a = path.format({
  root: '/ignored',//dir값이 있으면 무시됨.
  dir: '/home/user/dir',
  base: 'file.txt'
});

var b = path.format({
  root: '/',
  base:'file.txt',//base가 있으면 ext는 무시됨
  ext: 'ignored'
})

var c =path.format({
  root:'./',
  name : 'file',
  ext: '.txt'
})

console.log(a);
console.log(b);
console.log(c);

//path.isAbsolute(path)
//절대경로인가 상대경로인가true면 절대경로

console.log(path.isAbsolute('./path.js'));

//path.join([...paths])
//경로 합쳐서 하나로 만들어 반환

console.log(path.join('/foo','bar','bas/efij'));

//path.parse(path)

console.log(path.parse('/home/user/dir/file.txt'));

console.table(path.parse('/home/user/dir/file.txt'));


//url를 다루기 위한 모듈 url
//https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash
//url 2가지 api
// nodejs 전용 레거시 api
// 웹브라우저와 동일 WHATWG URL 이게 최신

const myURL = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

console.log(myURL);
//table로 해도 다 안나옴

console.log(myURL.href);
console.log(myURL.origin);
console.log(myURL.protocol);
//등 여러가지가 있음.
//속성 변경 가능

console.log(myURL.hash);

myURL.hash = 'baz';

console.log(myURL.hash);


// url 모듈 제일 많이 쓸 때,
// url 정보에서 전달된 쿼리 데이터를 추출할 때
//urlinstance.searchParams
//=> 검색하기 좋음
//'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
//여기에서 뒤에 :8080/p/a/t/h?query=string#hash
//여기 ?query 부분에 쿼리 있는거에서 추출


//myURL.searchParams.get('key 이름')
//get, has, keys, values, append(키밸류 추가)
//getAll, delete('key') tString
console.log("");
console.log(myURL.searchParams.toString());
console.log(myURL.searchParams.getAll('user'));

//Crypto
// 다양한 암호화 기능
// 비밀번호를 암호화 없이 저장하면 안됨.
//단방향, 양방향 암호화.
//양방향=> 비대칭형, 대칭형
//node js에서 자주 쓰는 단방향 암호화만
//보겠다.


const crypto = require('crypto');
const { Resolver } = require('dns');

crypto.createHash('sha512').update('pw1234').digest('base64');

crypto.createHash('sha512').update('pw1234').digest('hex');

console.log(crypto.createHash('sha512').update('pw1234').digest('hex'));
//이런식으로 암호화 해서 숨겨야 한다.
//근데 해커들은 rainbow table 이라는,
//암호화 전 값을 넣어두고 있다.
//오래는 걸리지만 해킹은 가능하다.
//그래서 원본값을 알아내기 힘들게
//salting
//소금을 뿌려서 못알아보게 한다.


//64바이트 길이의 salt를 생성함
const createSalt = () => {
  return new Promise((resolve, reject) =>{
    crypto.randomBytes(64, (err,buf)=> {
      if (err) reject(arr);
      resolve(buf.toString("base64"));
    });
  });
};

/*
const createCryptoPassword = async (plainPassword)=> {
  const salt = await createSalt();

  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err,key)=>{
      if (err) reject(err);
      resolve({password: key.toString("base64"), salt});
    });
  });
};

//salt 뿌려서 랜덤한 숫자 처럼 보이게 해놓고
// salt 값은 가지고 있음.
// 아예 랜덤한 값이 기준이라 더 안전함
// 열쇠를 사실상 내쪽에서 하나 더 건 셈
// 근데 왜 비동기화 함?
// 이건 CPU에서 하는게 아님?
// 누가 보면 디스크에서 처리하는 건줄 알겠네
// 외부 라이브러리니까 뭐 브라우저에서 하는 건가?
// salt값 저장해야 되서?
// 예제에서는 실행을 안함... 뭐냐 ㅋㅋㅋ
// salt 값을 저장을 안했는데?
// 미친 저장을 안해서 못품 ㅋㅋㅋㅋ
// 진짜 책 환불하고 싶다.


const getCryptoPassword = (plainPassword, salt) => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 9999, 64, "sha512", (err, key)=>{
      if(err) reject(err);
      Resolver({password: key.toString("base64"), salt});
    });
  });
};

*/

//예제는 위에 적힌대로 인데, 저상태로는 못씀
//돌아가는지만 확인하면 되니까.
// 그때 그때 salt 를 생성하지 말고 블록 밖에서 생성하자.
//그리고 함수에서 salt 입력받아.


//책에 안적혀 있어서 인터넷으로 찾아봤는데
//암호화 처리하는데 시간이 걸리니까 비동기로
//처리 한다고함.

//아~~~ 복호화를 안한데 ㅋㅋㅋㅋ
//이거 책쓴 사람 그냥
//복붙해놓은거 같은데?
// 설명도 대충 써 놓고
// 애초에 단방향이라
// 복호화를 안함
// 유저 누구인가 , salt 만 넣어놓고
// 꺼낼때도 
//유저가 아이디 비번을 주니까
// 유저 id로 salt를 찾아
//그리고 salt 랑 pass로 비번 만들어
// 열리는지 확인
// 열리면 꺼내 줘
// 그니까 지금 코드가 설명이 없는거야
// getCryptoPassword에서 암호화된
//비밀번호 값을 가져온 다음에
// 이거 비교해서 DB에서 꺼내야 된다고
// 얘도 잘 모르고 자기 일하는거에서
// 코드 복사 붙여넣기 해놓은거 같은데?
// 그와중에 오류난 적이 없어서 resolve에 password라는 부분에
// 잘못된 값이 들어간 본적이 없나본데?

//뭐가 이상하다 했어
// 두개가 같은 코드거든
//salt를 만든 뒤에 한다 하나 제외하고는 완전히 같은 코드임
// 근데 왜 함수가 나뉘어져 있을까?
// 보니까 저 뒤에 db에 저장하는 부분이 들어가야 되고
// get 함수에서는 db에서 꺼내서 대조하는 부분이 있어야함.
// 그냥 주석으로 이 뒤에 db에서 대조합니다 이렇게만 써도 됐을텐데
// 돈받고 파는 책에서 성의 너무 없음.
// 솔찍히 제대로 결과가 돌아가게는 만들어 놓고
// 결과를 확인할 수 있도록은 코드를 짰어야 됐음.
// 그냥 복붙만 하다 보니까 지도 모르는 거일 수도 있고


const createCryptoPassword = async (plainPassword)=> {
  const salt = await createSalt();
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err,key)=>{
      if (err) reject(err);
      resolve({password: key.toString("base64"), salt});
    });
  });
};

// 저거 시드인지 뭔지 10만 적혀있는거 책에서는 9999 였는데 다르니까 다른 값나옴 장난까나
// 책 미친 사기꾼이네
const getCryptoPassword = (plainPassword, salt) => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key)=>{
      if(err) reject(err);
      resolve({password: key.toString("base64"), salt});
    });
  });
};


const my_password = "12345678910";
console.log("my pass : ", my_password);


let cryptoPassword = createCryptoPassword(my_password);


var crypted_pass = "";
var salt = "";
var crypted_pass2 = "";
var salt2 = "";
cryptoPassword.then((result)=> {
  crypted_pass = result['password'];
  salt = result['salt'];
  //var {a,b} = result; // 왠진 모르겠으나 object destructuring이 안됨.
  console.log(result);
  console.log(crypted_pass);
  console.log(salt);
  console.log("\n\n\n");

  let get_crypto = getCryptoPassword(my_password, salt);

  get_crypto.then((result2)=>{
    crypted_pass2 = result2['password'];
    salt2 = result2['salt'];
    console.log(result2);
    console.log(crypted_pass);
    console.log(crypted_pass2);// 얘가 빈값이 나오는데? => 오타였는데 에러가 안난거야 ㅡㅡ 장난치나
    //할당한적 없는 변수가 왜 에러없이 돌아가는데 ㅋㅋㅋ
    console.log(salt);
    console.log(salt2);
  });
});

