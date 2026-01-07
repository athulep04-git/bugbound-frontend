import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function DashboardNavbar({ onLogout }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    setOpen(false);
    onLogout();
    navigate("/");
  };

  const navLinkClass = ({ isActive }) =>
    `font-medium transition ${
      isActive
        ? "text-blue-600 dark:text-purple-400"
        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

     
        <Link
          to="/dashboard"
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        >
          BugBound Hub
        </Link>

       
        <div className="flex items-center gap-8">

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

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="focus:outline-none"
            >
              <img
                src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
                alt="Profile"
                className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600"
              />
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden">

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
                  className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30"
                >
                  Logout
                </button>

              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;
