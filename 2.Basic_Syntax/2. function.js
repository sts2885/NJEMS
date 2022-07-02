

// 평소 쓰던 함수들

function hello(name) {
    return "Hello" + name;
}

const hello2 = function (name) {
    return "Hello" + name;
}

console.log(hello('STS'));
console.log(hello2('mark'));


//자바스크립트의 화살표 함수
//함수형 언어의 lambda function 처럼도 보이고 효과도 얼추
//비슷하지만, 함수를 짧게 쓴다는 쪽의 의미가 더 강한 모양이다.

const hello3 = (name) => {return "Hello" + name};

//파라미터가 하나면 괄호 생략 가능
const hello4 = name => {return "Hello" + name};

console.log(hello3('dude'));
console.log(hello4('just do it'));


//함수 내 문장이 return 문 뿐이면 return과 중괄호 없애도 됨)
const hello5 = name => "hello" + name;

console.log(hello5('fff'));



