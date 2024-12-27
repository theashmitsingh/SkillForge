import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../utilities/toastUtils';

const Signup = () => {

    const [signupInfo, setSignupInfo] = useState({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value);

        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;

        setSignupInfo(copySignupInfo);
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return errorToast("Some fields are missing");
        }
        try {
            const url = "http://localhost:3000/api/v1/signup";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const { success, message, error, name, token } = result;
            if (success) {
                successToast(message);
                localStorage.setItem('token', token);
                localStorage.setItem('loggedInUser', name)
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            } else if (error) {
                const details = error?.details[0].message;
                errorToast(details);
            } else if (!success) {
                errorToast(message);
            }
            console.log(result);
        } catch (err) {
            errorToast(err);
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            {/* Wrapper Box with Zinc Background */}
            <div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-semibold text-white mb-6 text-center">
                    Sign Up
                </h1>

                <form className="space-y-6" onSubmit={handleSignup}>
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="text-zinc-300 text-sm">
                            Full Name
                        </label>
                        <input
                            onChange={handleChange}
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-3 mt-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter Your Full Name"
                            value={signupInfo.name}
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="text-zinc-300 text-sm">
                            Email Address
                        </label>
                        <input
                            onChange={handleChange}
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-3 mt-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter Your Email"
                            value={signupInfo.email}
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
                            value={signupInfo.password}
                        />
                    </div>

                    {/* Role Selection (Radio Buttons) */}
                    <div className="mt-4">
                        <p className="text-zinc-300 text-sm mb-4">Select Your Role</p>
                        <div className="flex space-x-6">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="student"
                                    name="role"
                                    value="student"
                                    className="text-red-500 focus:ring-red-500"
                                />
                                <label htmlFor="student" className="text-zinc-300 ml-2">Student</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="instructor"
                                    name="role"
                                    value="instructor"
                                    className="text-red-500 focus:ring-red-500"
                                />
                                <label htmlFor="instructor" className="text-zinc-300 ml-2">Instructor</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="admin"
                                    name="role"
                                    value="admin"
                                    className="text-red-500 focus:ring-red-500"
                                />
                                <label htmlFor="admin" className="text-zinc-300 ml-2">Admin</label>
                            </div>
                        </div>
                    </div>

                    {/* Sign Up Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full p-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                {/* Optional: Links for Login */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-zinc-400">
                        Already have an account?{' '}
                        <NavLink
                            to="/login"
                            className="text-red-500 hover:underline"
                        >
                            Login
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
