import axios from "axios";
import API from "./API";

const UserService = {
   
    userLogin: async (user:any) => await API.post("/login",user),
    userRegister: async (user:any) => await axios.post("/register",user),

}
export default UserService