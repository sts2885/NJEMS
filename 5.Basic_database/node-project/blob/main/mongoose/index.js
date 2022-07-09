const mongoose = require('mongoose');

const connect = () => {
    //운영환경말고 개발환경이면 디버그 기능 활성화
    if(process.env.NODE_ENV !=='production'){
        mongoose.set('debug', true);
    }

    mongoose.connect('mongodb://root:147896@localhost:27017/admin',
        {dbName: 'dev',}, 
        (error) => {
            if(error) {
                console.log('MongoDB연결 에러', error);
            }
            else{
                console.log('MongoDB연결 성공', 'localhost:27017/admin')
            }
        });
};

//위는 db 접속, 연결
//아래는 에러 발생시 이벤트 리스너
mongoose.connection.on('error', (error)=>{
    console.error('MongoDB 연결에러', error);
});

mongoose.connection.on('disconnected', ()=>{
    console.error('MongoDB 연결이 종료되어 연결을 재시도 합니다.')
    connect();
})

module.exports={
    connect
};

//여러 데이터베이스로 연결할때는
//createConnection() 함수를 사용한다.
/*
여러개 연결할 시

const mongoose = require('mongoose');
const conn1 = mongoose.createConnection('mongodb://localhost/mydb1');
const conn2 = mongoose.createConnection('mongodb://localhost/mydb2');
같이 하면 된다.

*/




