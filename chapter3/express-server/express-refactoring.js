const url = require("url");
const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log("익스프레스로 라우터 리팩토링하기");
});

// 1. GET 메서드의 라우팅 설정
app.get("/", (_, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

//호이스팅 하게끔 함수 선언식으로 선언
function user(req, res) {
  const user = url.parse(req.url, true).query;

  // 2. 결과값으로 유저명과 나이 제공
  res.json(`[user] name : ${user.name}, age : ${user.age}`);
}

function feed(_, res) {
  // 3. /feed로 요청이 오면 실행되는 함수
  res.json(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>
        `);
}
