import CookieSerive from "../service/CookieService";
import UserService from "../service/UserService"



const UserController = {
    
    login: (user: any):void  => {
        
        UserService.userLogin(user).then((response: any) => {
            // add the token in the cookies.
            console.log(response);
           if(response.status === 200){
                if(CookieSerive.getToken() == "" || CookieSerive.getToken() == "undefined"){
                    CookieSerive.setToken(response.data,1);
                }
               
               
              
           }
           
        })
    },

    register:(user:any) : void => {
        UserService.userRegister(user).then((response:any) => {
            console.log(response)
        })
    }
  
}

export default UserController