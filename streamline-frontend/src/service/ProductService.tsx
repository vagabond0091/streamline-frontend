import axios from "axios";

const BASE_URL = "http://127.0.0.1:8080/api/v1/auth"

const UserService = {
   
    createProduct: async (product:any) => await axios.post( BASE_URL + "/create",product),

}
export default UserService