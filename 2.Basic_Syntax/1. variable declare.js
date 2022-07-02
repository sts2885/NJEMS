

//변수 선언
//변수는 var let const 세종류가 있다.


var x = 5;
var y = 6;
var z = x+y;

// 중간에 변수를 새로 선언 할 수 있음.
// 헷갈려서 같은 이름의 변수를 써도 
// 에러가 나지 않음 => 별론데? 그냥 변수명을 따로 쓰지.
// 관련 문제들이 생겨서 let,const가 생겼다.
// 그냥 이 기능을 없애라고 저능아야
// let은 같은 변수명을 재선언 할 수 없다.
var x = 7;
// 새로 선언하는게 아니라 다른 언어처럼 변수 재 할당
z = x+y




let a = 5;
let b = 6;
let c = a + b;

console.log(a);
console.log(b);
console.log(c);

a = 7;
console.log(a);
//let x = 7;// 에러

//가급적이면 var 보다 let을 써라.
//const는 뭐 상수겠지
// 선언 후 값 변경도 불가능 하다.






const q = 5;
const w = 6;
const e = q + w;

//에러
//q = 7; 
//const q= 7

const dateFormat = 'yyyy.mm.dd';
// 모든 화면에서 동일하게 날짜 포멧을 유지할 수 있다.

console.log(q);
console.log(w);
console.log(e);
console.log(dateFormat);







