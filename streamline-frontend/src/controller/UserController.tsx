import CookieSerive from "../service/CookieService";
import UserService from "../service/UserService"



const UserController = {
    
    login: (user: any, navigate: Function):void  => {
        
        UserService.userLogin(user).then((response: any) => {
            // add the token in the cookies.
           if(response.status === 200){
                if(CookieSerive.getToken() == "" || CookieSerive.getToken() == "undefined"){
                    CookieSerive.setToken(response.data,1);
                }
               
                navigate('/index')
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