
const mongoose = require('mongoose');

const {Schema} = mongoose;


//정의할때 id는 제외하고 한다.
//새 데이터 추가할때 마다 자동으로 유니크한 id가 생성된다.
const customerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String
  }
})

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;

//사용은 mongoose.model함수
//첫번째는 스키마 이름 두번재는 스키마 객체를 넣음
//여기서는 pool을 쓰고 뭐 그런거 없어?
//그러고 보니까 mysql2 sequelize에서도 그런게 없던거 같은데?

//스키마 이름 정의 시 
//MongoDB 데이터베이스 => 스키마 이름의 소문자 복수 형태로 컬렉션이 만들어 진다.
//Custumer 라는 스키마 이름
//=> MongoDB 에 customers라는 컬렉션이 새로 만들어지고
// 이미 있으면 걍 쓴다.
//지금은 만들어 놨으니까 쓰면 된다.
//그러니까 스키마 만들려고 일일이 안찾아가도 된다.




