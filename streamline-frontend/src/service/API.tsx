import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8080/api/v1/auth",
    withCredentials: true, 
});

export default API;