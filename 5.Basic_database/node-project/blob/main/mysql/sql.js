
//근데 용법 진심 편하다
//? 해놓으면 다 자동완성해버리네
module.exports = {
    customerList: `select * from customers`,
    customerInsert: `insert into customers set ?`,
    customerUpdate: `update customers set ? where id=?`,
    customerDelete: `delete from customers where id=?`
}