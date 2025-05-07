const http = require("http");
/**
Node.js 내장 모듈인 http를 불러옴
require()는 CommonJS 방식의 모듈 로딩 방법
✅ http 모듈은 서버와 클라이언트 간 HTTP 통신을 처리할 수 있게 해주는 모듈입니다.
 */
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html"); // 응답 헤더를 설정: 브라우저에게 응답 본문이 HTML 텍스트임을 알림
  res.end("OK"); // "OK"를 응답하고 종료(res.write()는 데이터만 쓰고, res.end()는 마지막 응답 데이터 전송 + 연결 종료까지 처리함)
});
/**
http.createServer()로 HTTP 서버 객체 생성
매개변수 (req, res)는 요청(request), 응답(response) 객체를 나타냄
콜백 함수는 클라이언트로부터 요청이 들어왔을 때 실행됨
✅ 이 안에서 응답 헤더 설정 및 본문 내용을 작성할 수 있습니다.
 */

server.listen("3000", () => console.log("OK 서버 시작!")); //접속 대기
/**
서버가 포트 3000에서 클라이언트 요청을 기다리게 설정
두 번째 인자는 콜백 함수: 서버가 성공적으로 시작되었을 때 실행됨
브라우저에서 http://localhost:3000으로 접속하면 "OK" 메시지를 받을 수 있음
 */
