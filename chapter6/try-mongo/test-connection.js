// test-connection.js
require("dotenv").config({ path: "../../.env" }); // 루트 경로로 명시 // .env 사용 가능하게 함
const { MongoClient } = require("mongodb"); // 몽고디비 패키지 임포트

// 여기에 복사한 연결 문자열을 넣고, <db_password> 부분은 실제 비밀번호로 교체!
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri); // MongoDB 클라이언트 객체 생성

async function run() {
  //async가 있으므로 비동기 처리 함수
  await client.connect();
  const adminDB = client.db("test").admin(); // admin DB 인스턴스
  const listDatabases = await adminDB.listDatabases(); // 데이터베이스 정보 가져오기
  console.log(listDatabases);
  return "OK";
}

run() // 실행 함수
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
