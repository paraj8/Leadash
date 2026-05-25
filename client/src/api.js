
import axios from "axios";

const API = axios.create({
 baseURL: "https://leadash.onrender.com/api",        // production
 //baseURL: "http://localhost:5000/api"            //local
});

{/*
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});



*/}


API.interceptors.request.use((req) => {

  const token = localStorage.getItem("token");

  console.log("TOKEN:", token);

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  console.log(req.headers);

  return req;
});

export default API;