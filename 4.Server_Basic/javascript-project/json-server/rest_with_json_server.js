
//const fetch = require('node-fetch');
import fetch from 'node-fetch'
//require 사용 못한다고 공식 홈페이지에 있음


//책에서 괄호 하나 빼먹음. 오타있음
fetch("http://localhost:3000/comments") // 전체 데이터(댓글) 조회
    .then((response) => response.json())//json 관련된거라 그런가? response라 네트워크라 그런가? 비동기인듯
    .then((json) => console.table(json));
    //.then((json => console.log(json)));

fetch("http://localhost:3000/comments/1")//id로 조회
    .then((response) => response.json())
    .then((json) => console.table(json));
    //.then((json)=> console.log(json));

//  http://localhost:3000/comments
fetch("http://localhost:3000/comments?postId=1")//쿼리를통해 postId=1로 조회
    .then((response) => response.json())
    .then((json) => console.table(json));
    //.then((json) => console.log(json));


//id는 지정안해도 자동으로 2로 됐네
fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify({
        //전송할 데이터=>이거 ajax할때 많이 봤던거다
        title: "The Great",
        author: "Jeremy",
    }),
    headers:{
        //헤더값 정의
        "content-type": "application/json; charset=UTF-8",
    },
})
    .then((response) => response.json())
    .then((json)=> console.table(json));


fetch("http://localhost:3000/posts/2", {
    method: "PUT",
    body: JSON.stringify({
        //전송 데이터
        id: 2,
        title: "The Great Jeremy",
        author: "Jeremy",
    }),
    headers: {
        "content-type": "application/json; charset=UTF-8"
    }
})
    .then((response)=> response.json())
    .then((json)=> console.table(json));

fetch("http://localhost:3000/posts/2", {method:"DELETE"});



