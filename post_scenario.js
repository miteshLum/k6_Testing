import http from "k6/http";

export default function () {
  const body = JSON.stringify({
    username: "test",
    password: "test",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  http.post("https://test-api.k6.io/user/register/", body, params);
}
