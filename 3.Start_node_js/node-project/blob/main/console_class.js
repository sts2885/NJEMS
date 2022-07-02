const fs = require('fs');

const {Console} = require('console');

const output =fs.createWriteStream('./stdout.log'); //입력 스트림 생성
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({ stdout: output, stderr: errorOutput }); //key value 오브젝트로 만들어서 넣었네
//아마 console 이라는 클래스 내부로 들어가서 stdout은 output.으로 , stderr는 erroroutput으로 보내느 ㄴ듯

const count = 5;

logger.log('count: %d', count);
logger.error('count: ' + count);










