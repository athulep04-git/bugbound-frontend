import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 
    bg-white/90 dark:bg-gray-900/90 
    backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        >
          BugBound Hub
        </Link>

        <div className="flex items-center gap-10">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? "text-blue-600 dark:text-purple-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? "text-blue-600 dark:text-purple-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400"
              }`
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? "text-blue-600 dark:text-purple-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400"
              }`
            }
          >
            Register
          </NavLink>

          <Link
            to="/register"
            className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 shadow-md transition"
          >
            Get Started
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
