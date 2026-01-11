import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const token = sessionStorage.getItem("token");
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // get user details safely
    const storedUser = sessionStorage.getItem("userDetails");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    setOpen(false);
    navigate("/");
  };

  const navLinkClass = ({ isActive }) =>
    `font-medium transition ${
      isActive
        ? "text-blue-600 dark:text-purple-400"
        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400"
    }`;

  return (
    <nav
      className="fixed top-0 w-full z-50 
      bg-white/90 dark:bg-gray-900/90 
      backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link
          to={token ? "/dashboard" : "/"}
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        >
          BugBound Hub
        </Link>

        <div className="flex items-center gap-8">
          {/* BEFORE LOGIN */}
          {!token && (
            <>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>

              <NavLink to="/login" className={navLinkClass}>
                Login
              </NavLink>

              <NavLink to="/register" className={navLinkClass}>
                Register
              </NavLink>

              <Link
                to="/register"
                className="px-6 py-2 rounded-full text-white 
                bg-gradient-to-r from-blue-600 to-purple-600 
                hover:opacity-90 shadow-md transition"
              >
                Get Started
              </Link>
            </>
          )}

          {/* AFTER LOGIN */}
          {token && (
            <>
              <NavLink to="/dashboard" className={navLinkClass}>
                Dashboard
              </NavLink>

              <NavLink to="/errors" className={navLinkClass}>
                Errors
              </NavLink>

              <NavLink to="/bounties" className={navLinkClass}>
                Bug Bounty
              </NavLink>

              <NavLink to="/leaderboard" className={navLinkClass}>
                Leaderboard
              </NavLink>

              {/* PROFILE DROPDOWN */}
              <div className="relative" ref={dropdownRef}>
                <button onClick={() => setOpen(!open)}>
                  <img
                    src={
                      user?.profile ||
                      "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg"
                    }
                    alt="Profile"
                    className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600"
                    referrerPolicy="no-referrer"
                  />
                </button>

                {open && (
                  <div
                    className="absolute right-0 mt-3 w-56 
                    bg-white dark:bg-gray-800 
                    border border-gray-200 dark:border-gray-700 
                    rounded-xl shadow-lg overflow-hidden"
                  >
                    {/* USER INFO */}
                    {user?.email && (
                      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {user.username}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user.email}
                        </p>
                      </div>
                    )}

                    <Link
                      to="/profile"
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Profile
                    </Link>

                    <Link
                      to="/my-errors"
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      My Errors
                    </Link>

                    <Link
                      to="/mytasks"
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      My Tasks
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 text-sm 
                      text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
