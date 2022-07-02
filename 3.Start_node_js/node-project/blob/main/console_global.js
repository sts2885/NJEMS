


console.log('hello world');
console.log('hello %s', 'world');


const world = 'world';
console.log(`hello ${world}`);
//백틱. 템플릿 리터럴 사용.

//일부러 에러를 일으킴
console.error(new Error('에러'));

const arr = [
    {name:'존 도', email:"johm@gmail.com"},
    {name:'제레미 고', email:'jeremy@mail.com'}
]

//테이블 형태로 배열 혹은 오브젝트 출력
//일일이 for문으로 안해도 된다.
console.log("?");
console.table(arr);

const obj = {
    students: {
        grade1: {class:{}, class:{}},
        grade2: {class1:{}, class:{}},
        teachers: ['존 도', '제레미 고']
    }
}

// 오브젝트 출력, 깊이, 색상 
//좀더 편하게 된다.
console.log("!");
console.dir(obj, {depth:1, colors:true});
//뭔지 설명 봐도 모르겠는데 안중요해 보임


//시간 출력
console.time('time for for-loop')
for(let i=0; i<999999; i++){}

console.timeEnd('time for for-loop');


