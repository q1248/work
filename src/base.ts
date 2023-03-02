import axios from "axios"

let request = axios.create({
  baseURL: "",
  timeout: 1000,
})

export default request