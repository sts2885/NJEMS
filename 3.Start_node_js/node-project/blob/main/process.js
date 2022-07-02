import process from 'process';


process.on('beforeExit', (code) => {
    console.log('2. 이벤트 루프에 등록된 작업이 모두  종료 후 노드 프로세스를 종료 하기 직전: ',
    code);
});

process.on('exit', (code)=>{
    console.log('3. 노드 프로세스가 종료될때: ', code);
});

console.log('1. 콘솔에 출력되는 첫 번째 메세지');




