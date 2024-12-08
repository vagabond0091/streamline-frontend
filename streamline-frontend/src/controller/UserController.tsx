import UserService from "../service/UserService"


const UserController = {
    login: (user:any) =>{
        console.log('here')
        UserService.userLogin(user).then((response: any) => {
            sessionStorage.setItem("token", response.data);

        })
    },

    register:(user:any) => {
        UserService.userRegister(user).then((response:any) => {
            console.log(response)
        })
    }
  
}

export default UserController