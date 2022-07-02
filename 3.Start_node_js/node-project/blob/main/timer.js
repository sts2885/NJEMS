const timeout = setTimeout(()=>{
    console.log('1초뒤 ㄱㄱ');
}, 1000);


const interval = setInterval(() => {
    console.log('1초마다 ㄱㄱ');
},1000);

const immediate = setImmediate(() => {
    console.log('setImmediate() 뒤에 모든 코드를 먼저 실행하고 바로 다음에 실행합니다.')
})

console.log('setImmediate 보다 먼저 실행됩니다.');

console.log('3초뒤 자동실행을 종료합니다. clear interval')
setTimeout(()=> {
    clearInterval(interval);
}, 3000);











