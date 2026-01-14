import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function NavbarComponent() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
    setUser(JSON.parse(sessionStorage.getItem("userDetails")));
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
    <Navbar fluid className="!bg-gray-900 fixed w-full z-50">
      <NavbarBrand as={Link} to={token ? "/dashboard" : "/"}>
        <span className="self-center whitespace-nowrap text-xl font-bold text-white">
          BugBound Hub
        </span>
      </NavbarBrand>

      <div className="flex md:order-2 gap-3">
        {token ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <img
                src={
                  user?.profile ||
                  "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg"
                }
                alt="profile"
                width="40"
                className="rounded-full cursor-pointer"
                referrerPolicy="no-referrer"
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">{user?.username}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </DropdownHeader>

            <Link to="/dashboard">
              <DropdownItem>Dashboard</DropdownItem>
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
