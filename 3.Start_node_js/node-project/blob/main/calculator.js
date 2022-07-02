const defaultNum = 1;

function add(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2){
    return num1 - num2;
}

function mul(num1, num2){
    return num1* num2;
}

function divide(num1, num2){
    return num1/num2;
}

module.exports = {
    defaultNum,
    add,
    minus,
    mul,
    divide
}

//모듈이라는게 파일 하나를 나타내는게 아니라
// 실제 있는 기본 요소인 모양인데?
// 선언이나 import를 안해도 쓸 수 있고,
// 이 파일에서 만들어 놓은 함수 등을
// 넣어 둘 수 있네
// 다른데서 이 파일의 
//module을 호출하기만 하면 다 쓸 수 있게
//다른 언어 같았으면
// 클래스를 선언했을 상황.

















