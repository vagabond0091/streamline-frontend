import { useState } from "react";
import UserController from "../../controller/UserController";
import { useNavigate } from "react-router-dom";


function Login() {
    const [user,setUser] = useState({
        username:"",
        password:""
    });
  
    const navigate = useNavigate();
    const onChangeUser  = (e:any) =>{
        const value = e.target.value;
        setUser(({
            ...user,
            [e.target.name]: value
          }))
    }
  
    const login = (e:any)=>{
        e.preventDefault();
        UserController.login(user,navigate)
        
        
    }
    return (
        <div className="min-h-screen flex items-center justify-center w-full bg-gray-50">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md ">
            <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
            <form onSubmit={login}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Username</label>
                    <input type="name" id="username" name="username" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your username"
                    value={user.username} onChange={onChangeUser} required>
                    </input>
                </div>
                <div className="mb-4">
                    <label  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                    <input type="password" id="password" name="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" 
                    value={user.password} onChange={onChangeUser} required>
                    </input>
                  
                </div>
                <div className="flex items-center justify-between mb-4">
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
                
                   
                </div>
                <div className="mb-4 text-center font-bold text-lg"> OR</div>
                <div className="flex items-center justify-between mb-4">

                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={login}>Create Account</button>
                   
                </div>

            </form>
        </div>
    </div>
    
    );
  }
  
  export default Login;