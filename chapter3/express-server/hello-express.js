const express = require("express"); // 1. express 모듈 불러오기
const app = express(); // 2. express를 초기화 후 app에 할당
const port = 3000;

app.get("/", (req, res) => {
  // /으로 요청이 get 요청인 경우 실행됨
  res.set("Content-Type", "text/html; charset=utf-8"); // 헤더값 설정
});

app.listen(port, () => {
  //서버를 기동해 클라이언트 요청을 기다림
  console.log(`START SERVER : use ${port}`);
});
