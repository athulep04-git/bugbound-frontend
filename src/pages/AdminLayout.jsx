import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            BugBound Admin
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Super Admin
          </p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <NavLink to="/admin" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            Dashboard
          </NavLink>
          <NavLink to="/admin/users" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            Users
          </NavLink>
          <NavLink to="/admin/bugs" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            Bug Reports
          </NavLink>
          <NavLink to="/admin/complaints" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            Complaints
          </NavLink>
          <NavLink to="/admin/settings" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            Settings
          </NavLink>
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full text-left px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
