import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function MyErrors() {
  const [activeTab, setActiveTab] = useState("errors");
  const [openEdit, setOpenEdit] = useState(false);
  const [openRequests, setOpenRequests] = useState(false);

  const navigate = useNavigate();

  // DELETE CONFIRMATION
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">

      {/* HEADER */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        My Posts
      </h1>

      {/* TABS */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveTab("errors")}
          className={`px-6 py-2 rounded-xl font-medium ${
            activeTab === "errors"
              ? "bg-blue-600 text-white"
              : "bg-white border"
          }`}
        >
          🐞 My Errors
        </button>

        <button
          onClick={() => setActiveTab("bounties")}
          className={`px-6 py-2 rounded-xl font-medium ${
            activeTab === "bounties"
              ? "bg-purple-600 text-white"
              : "bg-white border"
          }`}
        >
          🏆 My Bounties
        </button>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-6">

        {/* ================= ERRORS ================= */}
        {activeTab === "errors" && (
          <div
            onClick={() => navigate("/workspace/1")}
            className="cursor-pointer bg-white dark:bg-gray-800 border rounded-xl p-6
                       flex justify-between items-start
                       hover:shadow-lg hover:border-blue-500 transition"
          >
            <div>
              <h3 className="text-xl font-semibold">
                Login API returns 500 error
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Backend • ₹800
              </p>
              <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-600">
                In Progress
              </span>
            </div>

  
            <div
              className="flex flex-col items-end gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex gap-2">
                <button
                  onClick={() => setOpenEdit(true)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  ✏️ Edit
                </button>

                <button
                  onClick={handleDelete}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  🗑️ Delete
                </button>
              </div>

              <button
                onClick={() => setOpenRequests(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                View Requests
              </button>
            </div>
          </div>
        )}

        {activeTab === "bounties" && (
          <div className="bg-white dark:bg-gray-800 border rounded-xl p-6 flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">
                E-commerce MERN App
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Full Stack • ₹1500
              </p>
              <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                Active
              </span>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="flex gap-2">
                <button
                  onClick={() => setOpenEdit(true)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  ✏️ Edit
                </button>

                <button
                  onClick={handleDelete}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  🗑️ Delete
                </button>
              </div>

              <Link to="/bounties/1" className="text-sm text-blue-600">
                View Reports →
              </Link>
            </div>
          </div>
        )}
      </div>

      {openEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-gray-800 w-full max-w-lg rounded-xl p-6">

            <h2 className="text-xl font-semibold mb-6">
              Edit {activeTab === "errors" ? "Error" : "Bounty"}
            </h2>

            {activeTab === "errors" && (
              <div className="space-y-4">
                <input
                  type="text"
                  defaultValue="Login API returns 500 error"
                  className="w-full p-3 border rounded-lg"
                />
                <textarea
                  rows="4"
                  defaultValue="Server crashes when user logs in"
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="file"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            )}

            {activeTab === "bounties" && (
              <div className="space-y-4">
                <input
                  type="text"
                  defaultValue="E-commerce MERN App"
                  className="w-full p-3 border rounded-lg"
                />
                <textarea
                  rows="4"
                  defaultValue="Find bugs and performance issues"
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="file"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            )}

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setOpenEdit(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setOpenEdit(false);
                  Swal.fire("Updated!", "Changes saved successfully.", "success");
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Save Changes
              </button>
            </div>

          </div>
        </div>
      )}

      {openRequests && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-gray-800 w-full max-w-lg rounded-xl p-6">

            <h2 className="text-xl font-semibold mb-4">
              Debugger Requests
            </h2>

            <div className="border rounded-lg p-4 flex justify-between">
              <div>
                <p className="font-medium">Rahul Dev</p>
                <p className="text-sm text-gray-600">
                  Can fix within 2 hours
                </p>
                <p className="text-sm text-gray-500">
                  ⭐ 4.8 | Fixes: 32
                </p>
              </div>

              <div className="text-right">
                <p className="font-semibold">₹750</p>
                <Link to="/profile" className="text-blue-600 text-sm block mt-1">
                  View Profile
                </Link>
                <button className="mt-2 px-3 py-1 bg-green-600 text-white rounded text-sm">
                  Select
                </button>
              </div>
            </div>

            <div className="text-right mt-6">
              <button
                onClick={() => setOpenRequests(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default MyErrors;
