

//Sort

let  points = [ 5, 25, 10,40, 100, 1];
console.log(points);


//정렬 조건임. 부등호 라고 생각하면 됨
// 전형적인 Template Pattern이다.
// 정렬 조건, 함수 등을 넣으면
// hook function에서 조건대로 진행해준다.
// 아래 식과 같은 경우는 책에 적혀있었는데
//다음 element와 크기 비교 후 음수면 바꾸고
//양수면 안바꿈 다 정렬될때까지 반복

//책에는 위 처럼 버블 소트가 진행된다고 적혀있지만
//구글링을 해 본 결과
// 자바스크립트의 sort는 tim-sort를 한다고 한다.
// 누구 말이 맞는건지...
// 버블 소트는 솔찍히 말이 안되긴 해

//오름차순 정렬
points.sort(function(a,b){return a-b});
console.log(points);

// 내림차순
console.log(points);

points.sort(function(a,b){return b-a});
console.log(points);


//데이터 베이스를 다룰때 : 특히 mongodb 같은  key value
//스토리지를 다룰때는, 당연히 데이터가 key-value 쌍으로 이루어져 있다.
//이런 경우 key 기준으로 정렬을 하고 싶을 때가 생긴다.
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


// 배열 출력하려고 해봤는데 뒤에 보니까 이렇게 안해도 되더라.
for( var i = 0; i<length; i++){
    console.log(persons[i]);
}

console.log("")

// 이번에는 - 기호가 아니라 부등호로 조건을 줬다.
//근데 삼항연산자?
persons.sort(function(a,b){
    return a.point > b.point ? -1 : a.point < b.point ? 1: 0;
});

//return Q : W : 0;
//=> 일단 if else가 자바스크립트에서는 이렇게 짧게 쓸 수 있나보다.
//그리고 Q , W 저 부분은 삼항연산자,
//그러니까 포인트가 작으면 -1 크면 1 같으면 0을 리턴하는 거다.


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



//Filter
//filter 조건 탐색
// arr.filter()
// filter -> many to many ( 전자 수 > 후자 수)

const words = [
    'spray', 'limit', 'elite', 
    'exuberant', 'destruction', 'person'
]

// 콜백이라고 적어놔서 특정 함수를 오버라이딩 하거나 그런게 들어가는줄
// 알았는데 그냥 함수 넣어도 되네 ㅡㅡ
// 케라스 콜백 처럼 조건있어야 하는줄, 특정 클래스에 속한 함수여야 한다던지

//아래도 당연히 화살표 함수로 쓰면 더 짧다.
const result = words.filter(function(word){
    return word.length > 6;
});

console.log(words);
console.log(result);

//80점 이상인 경우만 필터링
let pass = persons.filter(function(person){
    return person.point >= 80;
})


for(var i = 0; i<pass.length; i++){
    console.log(pass[i]);
};



//Map
// map -> many to many(전자 수 == 후자 수)

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

//
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
// many to one
// sum 이나 average 만들때 보통 사용.
// map + reduce = 교환법칙 적용해야 함.

//let points = [40,100,1,5,25,10];
let sum = points.reduce(function (total, currentvalue) {
    return total + currentvalue;
}, 0);
//=>뒤에 0은 initial value임 => 책에선 설명을 안해줬음.


// template literals
//일반적으로 문자열 병합시에는 +를 쓰는데
// template literals는 + 안쓰고 가능하게 함.
// 그리고 여기서는 문자열을" 나 ' 대신 `를 씀 백틱
// 그리고 문자열에 변수값을 ${변수명}으로 씀
//c언어 format이랑 좀 비슷하다고 봐도.


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

// 파이썬과 유사
// firstName, _, age, _,city,country = getPerson() 하면 다 쪼개지니까
var {firstName, lastName} = getPerson();
console.log(firstName);
console.log(lastName);

//파라미터도 변수니까 당연히 사용 사능
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

//==> 위도 경도 리턴 받을때 제일 많이 쓴다.라고 함.
//[a,b] 이런 식으로 많이 쓴다더라.
//var [logitude, latitude] = dgsdfgdf;



let [j,k,...args]=getScores();
console.log(j);
console.log(k);
console.log(args);

//배열안의 배열도 가능 nested array
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


//중요한건 데이터 구조 형태대로 호출하는 거인듯
//이거 되게 잘쓸거 같은데?