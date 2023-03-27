import axios from "axios";

export const instance = axios.create({
  // baseURL: 'http://127.0.0.1:8080/api', 
  baseURL: 'http://j8a705.p.ssafy.io:8080/api',
  headers: { 
    "Content-Type": "application/json", 
},
});
