
//default function parameter
// 흔해서 설명은 패스

function say1(message="파라미터가 넘어오지 않았어요") {
    console.log(message);
}

// none이나 null 대신 undefined
function say2(message) {
    if(message != undefined) {
        console.log(message);
    } else {
        console.log("no parameter")
    }
}

say1();

say2();

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
//아~ 조건부로 무슨 일이 일어나면, 몇초안에 안되면
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



