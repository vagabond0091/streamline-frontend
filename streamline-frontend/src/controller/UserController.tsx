import CookieService from "../service/CookieService";
import UserService from "../service/UserService"



const UserController = {
    
    login: (user: any):void  => {
        
        UserService.userLogin(user).then((response: any) => {
           if(response.status === 200){
                CookieService.setToken(response.data,1);
           }
           
        })
    },

    register:(user:any) : void => {
        UserService.userRegister(user).then((response:any) => {
            if(response.status === 200){
                CookieService.setToken(response.data,1);
            }
        })
    }
  
}

export default UserController