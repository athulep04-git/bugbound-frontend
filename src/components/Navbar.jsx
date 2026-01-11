import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function NavbarComponent() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
    setUser(JSON.parse(sessionStorage.getItem("userDetails")));
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  const navClass = ({ isActive }) =>
    `text-white ${isActive ? "font-bold underline" : ""}`;

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

            <Link to="/profile">
              <DropdownItem>Profile</DropdownItem>
            </Link>

            <DropdownDivider />

            <DropdownItem onClick={handleLogout} className="text-red-600">
              Logout
            </DropdownItem>
          </Dropdown>
        ) : (
          <Link to="/login">
            <Button gradientDuoTone="purpleToBlue">Login</Button>
          </Link>
        )}

        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>

        {token && (
          <>
            <NavLink to="/errors" className={navClass}>
              Errors
            </NavLink>
            <NavLink to="/bounties" className={navClass}>
              Bug Bounty
            </NavLink>
            <NavLink to="/leaderboard" className={navClass}>
              Leaderboard
            </NavLink>
          </>
        )}
      </NavbarCollapse>
    </Navbar>
  );
}

export default NavbarComponent;
