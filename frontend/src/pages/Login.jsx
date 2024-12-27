import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../utilities/toastUtils';

const Login = () => {

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        // console.log(name, value);

        const copyLoginInfo = {...loginInfo};
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return errorToast("Some fields are missing");
        }
        try {
            const url = "http://localhost:3000/api/v1/login";
            const response = await fetch (url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const {success, message, token, name, error} = result;
            console.log(result);
            if (success) {
                successToast(message);
                localStorage.setItem('token', token);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            } else if (error) {
                const details = error?.details[0].message;
                errorToast(details);
            } else if (!success) {
                errorToast(message);
            }
        } catch (err) {
            errorToast(err);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            {/* Wrapper Box with Zinc Background */}
            <div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-semibold text-white mb-6 text-center">
                    Welcome Back!
                </h1>

                <form className="space-y-6" method="POST" onSubmit={handleLogin}>
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="text-zinc-300 text-sm">
                            Email
                        </label>
                        <input
                            onChange={handleChange}
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-3 mt-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter Your Email"
                            value={loginInfo.email}
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="text-zinc-300 text-sm">
                            Password
                        </label>
                        <input
                            onChange={handleChange}
                            type="password"
                            id="password"
                            name="password"
                            className="w-full p-3 mt-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter Your Password"
                            value={loginInfo.password}
                        />
                    </div>

                    {/* Login Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full p-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
                        >
                            Login
                        </button>
                    </div>
                </form>

                {/* Optional: Links for Forgot Password or Signup */}
                <div className="mt-6 text-center">
                    <NavLink
                        to="/forgot-password"
                        className="text-sm text-red-500 hover:underline"
                    >
                        Forgot Password?
                    </NavLink>
                </div>
                <div className="text-center mt-2">
                    <p className="text-sm text-zinc-400">
                        Don't have an account?{' '}
                        <NavLink
                            to="/signup"
                            className="text-red-500 hover:underline"
                        >
                            Sign up
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
