const express =require('express');
const mongodb = require("./mongoose");
const Customer = require("./mongoose/schemas/customer");


const app = express();

//이거 있어야 req.body가능
app.use(express.json());

mongodb.connect();


const port = 3000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

app.get('/', (req, res)=>{
    res.send('mongoose');
});

app.get('/customers', async(req,res) => {
    const customers = await Customer.find();
    console.log(customers);
    res.send(customers);
});

app.post('/customers/insert', async(req,res)=>{
    console.log(req.body.param);
    //겹치면 에러남
    //try-catch하거나 callback으로 
    //있으면 같은 데이터 입니다 식으로 가야 함.
    const result = await Customer.create(req.body.param);
    res.send(result);
});

//그리고 문제가 id가 1,2,3,4이런게 아님
app.put('/customers/update', async(req,res)=>{
    //사실 id를 내가 지정하는게 아니라 의미가 없음
    console.log(req.body.param);
    //id가 있는게 맞나?...
    //아니니까 다른게 겹치는경우가... 지금같은 경우에는
    //email로 가능하지만...
    //솔찍히 실제는 email도 겹칠 수 있는데, find 후 id 써도 되지만
    //역시 겹치면 안됨
    //책에서 시키는데로 하니까 이지경 났는데
    //id를 번호순 설정하거나, 이외의 뭔가가 있어야 될듯

    const email = req.body.param.email;
    const result = await Customer.updateOne({email:email}, req.body.param);
    console.log(result);
    //const result = await Customer.findByIdAndUpdate(id,{});
    const return_value = await Customer.find({email:email});
    console.log(return_value);
    res.send(return_value);
})

//이거도 post로 데이터 받아서 삭제하는게 맞는듯
//그니까 애초에 입력받는 데이터를
//mysql로 당연히 받겠지^^
//하고 mysql에 concreate 하게 만들어놓으니까
//발생하는 문제임
//그냥 insert, update, delete 전부
//데이터 다 가져와서 db manager에서 알아서 처리 했어야 했는데
//특정 db에 concret하게 만들어 놓으니까
//입력하는 데이터까지 cascade하게 다 뜯어고쳐야 되잖아 ㅋㅋㅋ
app.post('/customers/delete', async(req,res)=>{
    console.log(req.body.param);
    const email = req.body.param.email;
    const result = await Customer.deleteOne({email:email});
    console.log(result);
    const return_value = await Customer.find();
    res.send(return_value);
})