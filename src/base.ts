import axios from "axios"

let request = axios.create({
  baseURL: "https://temp.sihuan.dev/v1/",
  timeout: 1000,
})

export default request