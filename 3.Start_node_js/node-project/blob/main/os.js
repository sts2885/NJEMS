
  //"type": "module" 없이

const os = require('os');

console.log(os.arch());//cpu 아키첵쳐
//console.log(os.cpus());//cpu 코어 정보 배열
console.table(os.cpus());
console.log(os.hostname());//사용자 이름
console.log(os.networkInterfaces());//네트워크 정보
console.log(os.type());//운영체제 종류
console.log(os.platform());//darwin이라는데?
console.log(os.release());//운영체제 버전
console.log(os.homedir());//홈 디렉토리 경로
console.log(os.tmpdir());// 임시 파일 저장 경로
console.log(os.totalmem());//전체 메모리
console.log(os.freemem());//사용 가능한 메모리


//여기서 제공하는 정보는
//대부분 node.js에서 사용할 일이 별로 없다.
//임시 파일 저장 경로,
//클러스터(멀티스레드 사용하려고) 구성할때
//cpu 코어 수를 알려고
//os.cpus().lenght() 정도를 썼다.

