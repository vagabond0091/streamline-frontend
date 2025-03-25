import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; 
import UserController from "../../controller/UserController";

function Login() {
  
    const [user, setUser] = useState({
            username: "",
            password: "",
        });
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };
    return (
        <div className="min-h-screen flex items-center justify-center mt-7">
            <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
                
                {/* Email Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Email</label>
                    <input 
                        type="text" 
                        name="username" 
                        className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-purple-500" 
                        placeholder="Enter your email"
                        value={user.username} 
                        onChange={handleChange}
                    />
                </div>

                {/* Password Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Password</label>
                    <input 
                        name="password" 
                        type="password" 
                        className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-purple-500" 
                        placeholder="Enter your password"
                        value={user.password} 
                        onChange={handleChange}
                    />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex justify-between items-center mb-6">
                    <label className="flex items-center text-gray-700">
                        <input type="checkbox" className="mr-2" /> Remember me
                    </label>
                    <Link to="/forgot-password" className="text-black text-sm hover:underline">Forgot password?</Link>
                </div>

                <button className="w-full  bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition  p-2 " onClick={() =>{
                    UserController.login(user);
                }}>
                    Login
                </button>

                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-2 text-gray-500">or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Google Sign-In Button */}
                <button 
                    className="w-full flex items-center justify-center gap-2 bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition"
                >
                    <FcGoogle size={20} /> Sign in with Google
                </button>

                {/* Sign-up Link */}
                <p className="text-center text-gray-600 mt-4">
                    Don't have an account? <Link to="/signup" className="text-indigo-600 hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
