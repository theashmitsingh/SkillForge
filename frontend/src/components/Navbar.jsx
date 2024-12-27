import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    console.log('LoggedIn User:', user);
    setLoggedInUser(user);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setLoggedInUser(localStorage.getItem('loggedInUser')); 
    };
  
    window.addEventListener('storage', handleStorageChange);
  
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    setLoggedInUser('');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  const handleLogin = () => {
    setTimeout(() => {
      navigate('/login');
    }, 500);
  };

  return (
    <nav className="bg-black p-4 border-b border-zinc-200 sticky top-0 z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <NavLink to="/">SkillForge</NavLink>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-zinc-200 ${isActive ? 'text-red-500' : 'text-zinc-200'} hover:text-red-500 transition-colors duration-200`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-zinc-200 ${isActive ? 'text-red-500' : 'text-zinc-200'} hover:text-red-500 transition-colors duration-200`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-zinc-200 ${isActive ? 'text-red-500' : 'text-zinc-200'} hover:text-red-500 transition-colors duration-200`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `text-zinc-200 ${isActive ? 'text-red-500' : 'text-zinc-200'} hover:text-red-500 transition-colors duration-200`
            }
          >
            Explore
          </NavLink>
          <NavLink
            to="/discuss"
            className={({ isActive }) =>
              `text-zinc-200 ${isActive ? 'text-red-500' : 'text-zinc-200'} hover:text-red-500 transition-colors duration-200`
            }
          >
            Discuss
          </NavLink>
        </div>

        {/* Conditional Rendering */}
        {loggedInUser ? (
          <div className="flex items-center space-x-4">
            {/* User Icon */}
            <FaUserCircle className="text-white text-4xl cursor-pointer" title="Profile" />
            {/* Dashboard Button */}
            <NavLink
              to="/dashboard"
              className="px-4 py-2 bg-zinc-700 text-white rounded hover:bg-blue-500 transition-colors duration-200"
            >
              Dashboard
            </NavLink>
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
