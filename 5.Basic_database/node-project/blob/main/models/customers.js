'use strict';

//이 파일 생기니까 구조가 좀 보이네
//근데... 왜 이렇게 해야 되는거지?
//mysql은 다 됐잖아
//근데 그걸 더 편하게 해주는 애는
// 왜 기능이 더 후퇴함?

//sequelize-cli로 생성한 모델
//=> 타임스탬프 기록용
//createdAt, updatedAt
//컬럼을 안써도 기본 값으로 자동으로 컬럼을
//사용하는 것으로 인식된다.

//지금 쓰고 있는 테이블에는 이게 없으니까
//사용안하게 설정시;켜야 한다.

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  customers.init({
    name: {type:DataTypes.STRING, allowNull:false},
    email: {type: DataTypes.STRING, allowNull:false},
    phone: {type: DataTypes.STRING, allowNull:false},
    address: {type: DataTypes.STRING, allowNull:true},
    /*
    //여기 처럼 기본값을 쓰고 싶으면 써도 되는데
    //구체적인 선언을 하고 싶으면 할 수 있다.
    //커맨드라인으로 만들어 놓은걸 굳이 또
    //들어와서 손으로 고친다고?
    //진짜 30년전에 만든 시스템이라고
    //해도 믿을듯
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING
    */
  }, {
    sequelize,
    timestamps: false, //createAt,updatedAt없음
    modelName: 'customers',
  });
  return customers;
};

//그리고 이거를 미들웨어인데,
//node.js 코드 바깥에서 정의 해야 되는지 진짜 모르겠음.
