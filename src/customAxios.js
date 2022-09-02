import axios from "axios";

export default function customAxios(url, callback) {
  axios({
    url: "/user" + url,
    method: "post",
    baseURL: "http://localhost:8080",
    withCredentials: true,
  }).then((res) => callback(res.data));
}
