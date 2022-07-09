'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
//노드 실행 환경 가져오기, 설정된 값이 없으면 development
//process.env.NODE_ENV
//True or False인 모양
//or는 앞에꺼가 True면 뒤는 무시하니까.
//console.log(process.env.NODE_ENV );
//띄워 보면 undefined뜸...
const env = process.env.NODE_ENV || 'development';
//그래서 아래는 development 뜸
console.log(env);
//console.log(("abcd" || 'development'));
//이러면 "abcd" 나옴.
//javascript는 이것도 ||가 가능하구나...
//값이 있으면 True 없으면 (undefined null) 이면 false로 치는 듯
//앞에꺼가 있으면 그냥 쓰고 아니면 뒷쪽을 보는 성질을 ㅇ이요

//실행 환경에 맞는 DB 접속 정보 가져오기
//여기서는 env가 development니까
//config.json에서 json object가 나왔는데
//development를 넣었으니까.
//development에 해당하는, 내가 좀전에 입력한 value가 나오는거네
//node.js 실행환경 변경법
//윈도우 : set Node_ENV=production //터미널에서?
//터미널에서 쳐도 그대로 dev인데?
//리눅스 : export NODE_ENV=production
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

//sequelize 객체 생성
//초기화 안하고 생성해서
// 조건에 따라 할당.
let sequelize;
//config.json 파일 안에
//use_env_variable 값이 있냐?
// 좀 전에 봤지만 그런거 없었음
//그니까 당연히 else의 값이 되겠지?
//이게 default 값일듯
//dotenv 모듈 같은거 써서 환경변수에 등록해서 쓸때 용도
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} 
//따로 설정한 값이 없으면 config.json 파일에서 데이터베이스명 유저명 등을 읽어서 쓴다.
else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


//models 폴더에 데이터베이스 테이블을
//생성할 예정인듯
//그때 거기서 js 파일가져와서
//sequelize 모델로 변환하고 db 객체에 담음
//위에 생성한 db 라는 이름의 json 객체
//거기에 sequelize : sequelize
//진짜 코드 개 거지같이 짯네
//함수 몇개만써서 함수 이름만 달았어도 이지랄은 안나겠네
//Sequelize 모듈
//sequelize : Sequelize 모듈에서 생성한 인스턴스
//1. Seq 모듈 require.
//2. 그걸로 인스턴스 생성(권한 부여 등)
//3. 데이터베이스에서 데이터 불러와서
//db변수 안에 model 들을 (데이터베이스에서 읽은거) 넣음.
//이런거, 굳이 함수형 언어로 작성할 필요없는걸 개쓸모 없게
//함수형으로 짜면 코드가 이지랄이 나는거임.
//이건 용도상 아무리 봐도 객체지향으로 짜야 되는건데
//심지어 비동기작업으로 하지도 않음.
//파일네임 읽어와서 -> 이름첫글자가 . 이 아니고, 파일이름이 basename이 아니고(현재 파일 네임인듯?=> index.js)
//확장자면이 .js인거 다 읽어다가
//각 js 파일을 require 해버리고(모듈 읽어오는 거인듯)
//읽어다가 모듈 생성함 그 파라미터로 sequelize, Sequelize.DataTypes 넣어서 생성후
// 각 js 파일 마다 다 모듈 생성한걸 db객체 안에 넣음. model이름 : model
// 모델이라는거, 각 .js파일의 모듈화 결과.

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });


//그렇게 db에 .js모델을 다 채워넣었는데
//각 모델을 다 iterate하면서 associate라는걸 함...
//모델에 associate라는 항목이 있으면
// db 객체에 associate를 걸음
//associate란 RDBMS에서
//테이블 간 외래키 설정하는 것처럼
// 테이블의 연관관계를 sequelize모델에서
// 설정하는 것
//이게 아직 파일이 없어서 모르는데
// DB 설명하면 그게 이 폴더 내에
//.js파일로 남나봄.
//왜????? 아니 뭐 아무것도 설명하는게 없으니까.
//전형적인 시키면 시키는대로 해! 하는
//땔깜식 운영법
//각 모델에 forein key 같은
//associate 구조를 달아좋고
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
//db 객체에 sequelize 객체와, 모듈도 넣어놓는다.
//이것도 꺼내 써야 된다는뜻
//진심 tightly coupled된 dependency 오진다.
// 이거도 진심 저열한 언어인거 같은데?
//한 30년전에 짠 코드라고 해도 믿겠음
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

//아니 상식적으로 이 파일을 읽을 필요 없게만들려면
//밖에서 인터페이스나,
// 주석을 잘 달았거나
//기능을 적절한 함수명을 달았거나
//해야 되는데
//땔깜새끼가 지만 알아볼수 있게 코드 짜놓고
// 읽어야만 되게 만든게 문제인거지


// 진짜 개 이해가 안되는게
//이지랄 해서 셋팅해놓고
// 모델을 db에 있는걸 바로 연결하는게 아니라
// 또 만들어서 저장해야 돼?
