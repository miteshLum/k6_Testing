import http from "k6/http";
import { check } from "k6";
import { sleep } from "k6";

export const options = {
  vus: 10,
  duration: "10s",
  threshold: {
    http_req_duration: ["p(95)<100"],
    http_req_failed: ["rate<0.01"],
  },
};

export default function () {
  const res = http.get("https://test.k6.io/");
  check(true, {
    true: (value) => value === true,
  });
  sleep(2);
}
