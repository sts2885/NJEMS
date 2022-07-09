const express = require("express");
const sequelize = require('./models').sequelize;
const app = express();


//sequelize 객체가 기본으로 가지고 있는 함수.
// 모델에 정의한 테이블이 없을때 생성해준다.
sequelize.sync();

//customers 테이블에 대한 sequelize 모델
// 와 db tightly coupled 존나 심한데?
// 이게 2020년대에 짠 코드가 맞는가 싶을정도로 심한데?
//아니 여기는 db manager layer가 없어?
//다른 db로 바꾸고 싶으면 어쩌려고 이지랄을 했지?
//내가 취업할 곳에서도 이지랄을 하고 있진 않겠지?
const {customers} = require('./models');

app.use(express.json({
    limit: '50mb'
}));

app.listen(3000, () => {
    console.log("Server started. port 3000.");
});


//findAll(조건)
//findByPK(pk) ex) id가 1인것 찾아라 같이.
//findOne(조건) 조건 데이터중 1번
app.get("/api/customers", async (req, res) => {
    //db에 직접 쿼리 안보내고 가능
    const customersData = await cutomers.findAll();
    console.log(customersData);
    res.send(customersData);
});

//테이블에 데이터 추가시 create()함수
app.post('/api/customers/insert', async(req, res)=>{
    const {name, email, phone, address} = req.body.params;
    //my sql 쓰면 자동으로 넣어주는데 굳이 쪼개서 다시 넣는다고?
    const result = await customers.create({name:name, email:email, phone:phone, address:address});
    console.log(result);
    res.send(result);
});

//수정시 update(수정정보, 조회조건)함수 사용
//search key => id:5 같이
//이거봐 업데이트 조건을 프론트엔드, 백엔드, db에서 모두 알아야 되네?
//개불편한데 현재로써는
app.put('/api/customers/update', async (req, res)=>{
    const result = await customers.update(req.body.params[0], {
        where: {id: req.body.params[1]}
    });
    console.log(result);
    res.send(result);
})

//데이터 삭제시 destroy함수를 쓴다.
app.delete('/api/customers/delete/:id', async(req, res)=>{
    const {id} = req.params;
    console.log(req.params);
    console.log("id", id);

    const result = await customers.destroy({
        where: {id: id}
    });
    console.log(result);
    res.send(result);
})


