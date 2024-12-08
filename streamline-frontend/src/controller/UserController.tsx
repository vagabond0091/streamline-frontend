import CookieSerive from "../service/CookieService";
import UserService from "../service/UserService"


const UserController = {
    login: (user:any) =>{
        UserService.userLogin(user).then((response: any) => {
            // add the token in the cookies.
           CookieSerive.setToken(response.data,1);
        })
    },

    register:(user:any) => {
        UserService.userRegister(user).then((response:any) => {
            console.log(response)
        })
    }
  
}

export default UserController