import React from "react";

function AdminUsers() {
  const users = [
    {
      id: 1,
      username: "Admin",
      email: "admin@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      username: "Athul",
      email: "athul@gmail.com",
      role: "User",
      status: "Active",
    },
    {
      id: 3,
      username: "DebuggerX",
      email: "debugger@gmail.com",
      role: "User",
      status: "Blocked",
    },
  ];

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        User Management
      </h1>

      <div className="overflow-x-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl">
        <table className="w-full text-left">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-sm">Username</th>
              <th className="px-6 py-3 text-sm">Email</th>
              <th className="px-6 py-3 text-sm">Role</th>
              <th className="px-6 py-3 text-sm">Status</th>
              <th className="px-6 py-3 text-sm text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t border-gray-200 dark:border-gray-700"
              >
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      user.role === "Admin"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-sm text-red-600 hover:underline">
                    Block
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUsers;
