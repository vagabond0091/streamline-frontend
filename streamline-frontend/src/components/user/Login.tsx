import { useState } from "react";
import UserController from "../../controller/UserController";


function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    let userData ={
        'username':username,
        'password':password
    }
    const onUsernameChange = (e:any) =>{
        setUsername(e.target.value)
    }
    const onPasswordChange = (e:any) =>{
        setPassword(e.target.value)
    }
    const login = (e:any)=>{
        e.preventDefault();
        UserController.login(userData);
        
    }
    return (
        <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md ">
            <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
            <form onSubmit={login}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Username</label>
                    <input type="name" id="username" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your username"
                    value={username} onChange={onUsernameChange} required>
                    </input>
                </div>
                <div className="mb-4">
                    <label  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                    <input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" 
                    value={password} onChange={onPasswordChange} required>
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