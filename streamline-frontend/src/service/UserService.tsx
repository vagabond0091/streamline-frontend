import axios from "axios";

const BASE_URL = "http://127.0.0.1:8080/api/v1/auth"

const UserService = {
   
    userLogin: async (user:any) => await axios.post( BASE_URL + "/login",user),
    userRegister: async (user:any) => await axios.post(BASE_URL + "/register",user),

}
export default UserService