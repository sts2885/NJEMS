



//연습장




/*
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

*/

/*
let x = 5;
let y = 6;
let z = x + y;

console.log(x);
console.log(y);
console.log(z);

x = 7;
console.log(x);
//let x = 7;// 에러

//가급적이면 var 보다 let을 써라.
//const는 뭐 상수겠지
// 선언 후 값 변경도 불가능 하다.

*/

/*
const x = 5;
const y = 6;
const z = x + y;

//x = 7;
//const x= 7

const dateFormat = 'yyyy.mm.dd';
// 모든 화면에서 동일하게 날짜 포멧을 유지할 수 있다.

console.log(x);
console.log(y);
console.log(z);
console.log(dateFormat);

*/

/*

// 평소 쓰던 함수들

function hello(name) {
    return "Hello" + name;
}

const hello2 = function (name) {
    return "Hello" + name;
}

console.log(hello('STS'));
console.log(hello2('mark'));

// 화살표 함수

// 그냥 함수 짧게 쓰는 법
// 람다 함수랑 비슷하지만 뭐... 용도는아예다른듯
// 그냥 짧게 함수를 쓰고 싶을때 쓰는 정도인듯
const hello3 = (name) => {return "Hello" + name};

//파라미터가 하나면 괄호 생략 가능
const hello4 = name => {return "Hello" + name};

console.log(hello3('dude'));
console.log(hello4('just do it'));


//함수 내 문장이 return 문 뿐이면 return과 중괄호 없애도 됨)
const hello5 = name => "hello" + name;

console.log(hello5('fff'));



// 서버에서 데이터 베이스를 다룰때
// 대부분의 경우는 데이터를 배열에 담는다.
// 그래서 자주 쓰는 함수를 모아 봤다.

let fruits = ["B", "O", "A", "M"];
console.log(fruits);
fruits.sort();
console.log(fruits);


let  points = [ 5, 25, 10,40, 100, 1];
console.log(points);
//정렬 조건임. 부등호 라고 생각하면 됨
//다음 element와 크기 비교 후 음수면 바꾸고
//양수면 안바꿈 다 정렬될때까지 반복
//버블솔트네
points.sort(function(a,b){return a-b});
console.log(points);


// 내림차순
let points = [40, 100, 1, 5, 25, 10];

console.log(points);

points.sort(function(a,b){return b-a});
console.log(points);


let fruits = ["B","O", "A", "M"];
console.log(fruits);
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);


let persons = [
    {
        name: "유재석",
        point: 78,
        city: "서울"
    },
    {
        name: "김종국",
        point: 92,
        city: "서울"
    },
    {
        name: "양세찬",
        point: 76,
        city: "제주"
    },
    {
        name: "하하",
        point: 81,
        city: "서울"
    }
]

let length = persons.length;
console.log(length);

for( var i = 0; i<length; i++){
    console.log(persons[i]);
}

console.log("")
persons.sort(function(a,b){
    return a.point > b.point ? -1 : a.point < b.point ? 1: 0;
});

for( var i = 0; i<length; i++){
    console.log(persons[i]);
}

persons.sort(function(a,b){
    return a.point < b.point ? -1 : a.point < b.point ? 1: 0;
})

console.log("");
for ( var i = 0; i<length; i++){
    console.log(persons[i]);
}


a.point > b.point ? -1 : a.point < b.point ? 1: 0;


a.point > b.point ? -1 => Q
a.point < b.point ? 1 => W


Q: W: 0;
Q거나 W거나 0 을 조건으로 넣은거임.

함수를 보내는 것 자체는 전형적인  template pattern인데

a의 포인트가 크면 -1 b가 크면 1 같으면 0 인건데

왜 굳이 이런 bubble sort를?

삼항 연산자 자체는 readability는 떨어져도
효율이 올라가니까 그러려니 하는데

항상 소수의 데이터 sorting 만을 하는 건가?
왜 굳이 버블 솔트를?

그냥 key 만 넣고 그거 기준으로 효율좋은 정렬을
해주면 안됨?

검색해 보니까

설명하기 좋으려고 버블소트로 적어 놓은거지

실제로는 tim sort를 쓴다는데?


아는 정렬 알고리즘

bubble, selection, insertion,
quick, merge, digit sort? 그 바구니,
tim sort, internal sort 였나? 퀵소트 변경버전




//filter 조건 탐색
// arr.filter()
// 파라미터로 callback함수를 집어 넣음(전형적인 함수형 프로그래밍)
// callback 의 파라미터 => element, index(특정인덱스 찝어서 할때)
// array... 얘는 뭔지 봐야 겠는데?

const words = [
    'spray', 'limit', 'elite', 
    'exuberant', 'destruction', 'person'
]

// 콜백이라고 적어놔서 특정 함수를 오버라이딩 하거나 그런게 들어가는줄
// 알았는데 그냥 함수 넣어도 되네 ㅡㅡ
// 케라스 콜백 처럼 조건있어야 하는줄

const result = words.filter(function(word){
    return word.length > 6;
});

console.log(words);
console.log(result);


let persons = [
    {
        name: "유재석",
        point: 78,
        city: "서울"
    },
    {
        name: "김종국",
        point: 92,
        city: "서울"
    },
    {
        name: "양세찬",
        point: 76,
        city: "제주"
    },
    {
        name: "하하",
        point: 81,
        city: "서울"
    }
]

let pass = persons.filter(function(person){
    return person.point >= 80;
})


for(var i = 0; i<pass.length; i++){
    console.log(pass[i]);
}


let userList = [
    {
        firstName: "재석",
        lastName: "유",
        email: "yu@gmail.com"
    },
    {
        firstName: "종국",
        lastName: "김",
        email: "kim@gmail.com"
    },
    {
        firstName: "세찬",
        lastName: "양",
        email: "yang@gmail.com"
    },
    {
        firstName: "석진",
        lastName: "지",
        email: "ji@gmail.com"
    } 
];


let userList2 = userList.map(function (user) {
    return {
        fullName: user.lastName + user.firstName,
        firstName: user.firstName,
        lastName : user.lastName,
        email: user.email
    }//튜플을 리턴
});


for (var i =0; i< userList2.length; i++){
    console.log(userList2[i]);
}

// map 넣은 함수를 iterate 한 결과를 가져옴
// 실제로 iterable을 생성해서 돌리는 듯
// 공부도 했었지만 이게 좋은 이유는
// 데이터가 많아지면 결국 데이터를 불러와서 코드를 실행하는 것보다
// 코드를 데이터가 있는 곳으로 보내서 처리 시키는게 압도적으로
// 빠르기 때문

//reduce
//역시 익숙한 표현
//map은 각각의 데이터에 적용하는 방식인 반면
//reduce는 계산 값을 압축해서 하나로 만드는 것.
// sum이나 average 등등
//여기에 넣는 매개변수 => 4개 있는데 예제에서는 2개밖에 안써서
// 나머지는 뭐에 쓰는지 모르겠음.
// 누계, 배열요소, 인덱스 번호, 배열



// 다른 언어들에서 current value 부분만 쓰거나, 
// 항목 두개에 각각 x,y의 변수를 주는 대신에,
// 여기서는 total 값을 따로 변수에 두는 듯
let points = [40,100,1,5,25,10];
let sum = points.reduce(function (total, currentvalue) {
    return total + currentvalue;
}, 0);

console.log(sum);
//=>뒤에 0은 initial value임 => 설명을 안해주네 ㅋㅋㅋ
//=> 뒤에 0은 뭐냐?
// 설명이 없음.
// 없는걸로 봐서 자신 없어서 안적었나봄. 지도 모를듯
//물어보면 그제서야 허겁지겁 구글링 해서 찾을 듯

//일반적으로 문자열 병합시에는 +를 쓰는데
// template literals는 + 안쓰고 가능하게 함.
// 그리고 여기서느 ㄴ문자열을" 나 ' 대신 `를 씀 백틱
// 그리고 문자열에 변수값을 ${변수명}으로 씀


function hello(name) {
    console.log("Hello " +name + ".Welcome!");
}

hello("Jeremy");

function hello2(name) {
    let name2 = "John";
    console.log(`Hello ${name2}. Welcome! ${name}`);
}
hello2("MAAAN~")


//spread operator
//배열, 문자여 => iterable 한거를 하나하나 쪼개줌.
// python 이었으면 리스트 slice를 했을 것들

let arr1 = [4,5,6];
let arr2 = [1,2,3];
let arr3 = [...arr2, ...arr1];
console.log(arr3);

let cd = "CD";
let alphabet = ['A','B', ...cd];
console.log(alphabet);

// 그냥 치지 말고 일하는 곳에서는 어떻게 쓸까를 생각하면서 써
// 고객 의료 데이터가 mongodb에 들어가 있을거 아냐
// 고객 이름? 없을수도
// 하지만 나이, 병 종류, 사진, 등등이 들어가 있을 테니까.

//spread operator는 다 쪼개서 다 씀
//object destructuring=> 분해 후 필요한거만 꺼냄.
//iterable 전체가 아니라 object 만인듯?
function getPerson(){
    return {
        firstName: "John",
        lastName: "Doe",
        age: 37,
        email: "john@gmail.com",
        city: "New York",
        country: "USA"
    };
}

// 이건 좀 아쉽다. 이런건 파이썬이 좀더 편한듯
// firstName, _, age, _,city,country = getPerson() 하면 다 쪼개지니까
var {firstName, lastName} = getPerson();
console.log(firstName);
console.log(lastName);


//아예 파라미터에서 분해
// 함수 쓸때는 객체 넣지만
// 안에서는 필요값만 딱 씀
function displayFullName({firstName, lastName}){
    console.log(`${firstName} ${lastName}, maam`);
}

displayFullName(getPerson());


//array destructuring
//array는 일반적으로 인덱스 번호로 접근
// arr[3]

function getScores() {
    return [70,80,90,100];
}

let scores = getScores();

//이런식으로도 선언 할 수 있네
let x = scores[0],
y = scores[1],
z= scores[2];

let [a,b,c] = getScores();

console.log(x);
console.log(y);
console.log(z);


console.log(a);
console.log(b);
console.log(c);
//==> 위도 경도 리턴 받을때 제일 많이 쓴다.라고 함.
//[a,b] 이런 식으로 많이 쓴다더라.
//var [logitude, latitude] = dgsdfgdf;

let [j,k,...args]=getScores();
console.log(j);
console.log(k);
console.log(args);

//악 슬슬 머리 쪼개진다.
//배열안으 ㅣ배열도 가능

function getProfile() {
    return [
        'John',
        'Doe',
        ['Red', 'Green', 'Blue']
    ]
}

let [
   firstName_,
   lastName_, 
    [
        color1,
        color2,
        color3
    ]
] = getProfile();

console.log(firstName_);
console.log(lastName_);
console.log(color1, color2, color3);
//중요한건 데이터 구조 형태대로 호출하는 거인듯
//이거 되게 잘쓸거 같은데?


//default function parameter
// 이 개념 자체는 흔한 거.
// 입력 안되고 호출된 함수에서 기본  파라미터.

function say1(message="파라미터가 넘어오지 않았어요") {
    console.log(message);
}

say1();

// 처음보는건 자바스크립트는
// 없는 값을 undefined라고 하네
// None 이랑은 좀 다른 거 같은데
// None은 값으로 있어도
// say2(None) say2(null)을 해줘야 
// 값이 전달되는데 
// 이건 아예 안적혀 있어도 되니까.
function say2(message) {
    if(message != undefined) {
        console.log(message);
    } else {
        console.log("no parameter")
    }
}

say2();

//rest parameter
//보통 파라미터 들은 갯수가 정해져있음
// 바꾸려면 오버로딩을 그떄마다 해줘야됌
//그러지 말고 spread operator ...arg로 하면 됨.

*/
function sum(x1,x2){
    let n = x1+x2;
    return n;
}

console.log(sum(5,6));

//파이썬도 비슷한거 있음
// 근데 리스트로 쓰면되서
// 꼭 알아야 할 필요는 없었는데...
function sumrest(...args){
    let total = 0;
    for (let x of args){
        total += x;
    }
    console.log(total);
    //return total;
}


sumrest(3,2,4,5,6,7,9);
sumrest(3,5);
sumrest(23532,75467856,234235,34356);


//promise
//자바스크립트에서 비동기 처리에 사용되는 객체
//파일 쓰기, 데이터베이스 트랜잭션(조회생성수정삭제)
//실행한 코드가 완료될때 까지 대기하지 않고 바로 다음 코드를 실행
// 가능하게 해준다.
// 비동기 함수 실행 완료시 =>then() 함수에서 결과 받음
// 마치 멀티쓰레드 처럼


//Promise는 new 생성자 함수를 사용해서...
//??? 클래스가 아니야?
//응답 성공시 resolve() 함수에,
// 실패시 reject() 함수에 결과를 전달
const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve("성공한 결과물");
    }else{
        reject(new Error("에러"));
    }
});

promise.then(value=>console.log(value));

const promise2 = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve("resolve");
    }, 300);
});
//3초뒤 결과 퇫
// 실패 결과도 보고 싶은데 실패는 서버가 터지지 않는 한 안일어나나?
//아~ 조건부로 무슨 일이 일어나면, 몇초안아 안되면
// 또는 이상한 값이 오면 등으로
// 에러를 일으키도록 Promise 안에 정의해서 넣어야 하는 구나.
// 따로 정의를 안하면 서버 터지거나 할때만 뜨는 거고

//근데 reject를 then으로 받으면 에러가 발생해서
//catch를 써줘야 함
promise2.then(value=> console.log(value)).catch(error=>console.log(error));



//  Async/Await
//  비동기실행/결과올때까지 기다리겠음.
// 같은 스코프 안에서 결과값을 관리 가능
// I/O를 비동기로 쓴다고 했지?
// mysql, mongodb 등을 쓸때 사용함

async function myFunction() {
    const r = await asyncFunction();
}

const myFunction2 = async() => {
    const r = await asyncFunction();
}
//function()=> 대신 async() => 도 되는구나.
// await을 쓰려면 반드시 async 에서 써야 함.
// 작동을 보려면 뒤에 DB 쪽으로 가야 될듯
// 돌리는 예제가 딱히 없어서

//Class

class Car {
    constructor(modelName, modelYear, type, price){
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    //내부함수는 function 없어도 되네
    getModelName() {
        return this.modelName;
    }

    getModelYear(){
        return this.modelYear;
    }

    getType(){
        return this.type;
    }

    getPrice(){
        return this.price;
    }

    setModelName(modelName){
        this.modelName = modelName;
    }

    setModelYear(modelYear){
        this.modelYear = modelYear;
    }
    setType(type){
        this.type = type;
    }
    setPrice(price){
        this.price = price;
    }
}

//constructor 생성자
// 파이썬의 __init__ , 자바의 Classname() 과 동일

let ionic = new Car("아이오닉", "2021", "e", 4000);
let genesis = new Car("제네시스","2021","g", 7000);

console.log(ionic.price);
console.log(genesis.price);

genesis.setPrice(200);
console.log(genesis.price);


class ElectricCar extends Car {
    constructor (modelName, modelYear, price, chargeTime){
        super(modelName, modelYear, "e", price);
        this.chargeTime = chargeTime;
    }

    setChargeTime(time){
        this.chargeTime = time;
    }

    getChargeTime(time){
        return this.chargeTime
    }
}

//진짜 정규표현식은 너무너무너무너무 하기 싫다.
// 필요해지면 돌아오자.
//이제야 chaper3 끝남
//오늘 이대로 마치면 7일 더 있어야 끝남
// 말도 안됨.
// 오늘 적어도 7chaper 까지는 들어가야 함.
//10분 휴식

//4장 node.js 시작
//5장 => 내장 모듈
//6장 json-server
//7장 Express => 웹서버
//8장 mysql, mongodb
//9장 node.js => 어플리케이션 몇개, 고성능 돌리는 모듈 등
//10장 node.js => 미니 프로젝트, 제품판매 웹앱
//예제는 좀 약하긴 하네



















