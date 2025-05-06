import http from "k6/http";

export const options={
    vus:2500,
    duration: "1s",
};

export default function () {
    http.get("http://localhost:8000");
}