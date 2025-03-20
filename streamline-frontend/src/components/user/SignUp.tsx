import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import Footer from "../footer/footer";
import Header from "../header/header";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div  className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 min-h-screen font-sans">
            <Header/>
            <div className="min-h-screen flex items-center justify-center mt-7  ">
                <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
                    
                    {/* Name Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Full Name</label>
                        <input 
                            type="text" 
                            className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-purple-500" 
                            placeholder="Enter your full name"
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    
                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input 
                            type="email" 
                            className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-purple-500" 
                            placeholder="Enter your email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Password</label>
                        <input 
                            type="password" 
                            className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-purple-500" 
                            placeholder="Create a password"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Sign-Up Button */}
                    <button className="w-full  bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition  p-2">
                        Sign Up
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-2 text-gray-500">or</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Google Sign-Up Button */}
                    <button 
                        className="w-full flex items-center justify-center gap-2 bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition"
                    >
                        <FcGoogle size={20} /> Sign up with Google
                    </button>

                    {/* Login Link */}
                    <p className="text-center text-gray-600 mt-4">
                        Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Log in</Link>
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default SignUp;
