import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  getAllUsersAPI,
  blockUserAPI,
  unblockUserAPI,
} from "../services/allAPIs";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  const fetchUsers = async () => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const result = await getAllUsersAPI(reqHeader);

    if (result?.status === 200) {
      setUsers(result.data);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUsers();
    }
  }, [token]);

  const toggleBlock = (user) => {
    const action = user.isBlocked ? "Unblock" : "Block";

    Swal.fire({
      title: `${action} user?`,
      text: `Are you sure you want to ${action.toLowerCase()} this user?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: `Yes, ${action}`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const reqHeader = {
          Authorization: `Bearer ${token}`,
        };

        const apiCall = user.isBlocked
          ? unblockUserAPI
          : blockUserAPI;

        const res = await apiCall(user._id, reqHeader);

        if (res?.status === 200) {
          setUsers((prev) =>
            prev.map((u) =>
              u._id === user._id
                ? { ...u, isBlocked: !u.isBlocked }
                : u
            )
          );

          Swal.fire(
            "Success",
            `User ${action.toLowerCase()}ed successfully`,
            "success"
          );
        }
      }
    });
  };

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        User Management
      </h1>

      <div className="overflow-x-auto bg-white dark:bg-gray-800 border rounded-xl">
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
                key={user._id}
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
                      user.isBlocked
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {user.isBlocked ? "Blocked" : "Active"}
                  </span>
                </td>

                <td className="px-6 py-4 text-right">
                  {user.role !== "Admin" && (
                    <button
                      onClick={() => toggleBlock(user)}
                      className={`text-sm font-medium ${
                        user.isBlocked
                          ? "text-green-600"
                          : "text-red-600"
                      } hover:underline`}
                    >
                      {user.isBlocked ? "Unblock" : "Block"}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <p className="text-center p-6 text-gray-500">
            No users found.
          </p>
        )}
      </div>
    </div>
  );
}

export default AdminUsers;
