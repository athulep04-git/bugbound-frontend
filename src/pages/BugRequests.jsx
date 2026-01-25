import React from "react";
import { Link } from "react-router-dom";

function BugRequests() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Debugger Requests
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Choose the best debugger to fix your issue.
          </p>
        </div>

        <Link
          to="/my-errors"
          className="px-5 py-2 rounded-xl border bg-white dark:bg-gray-800
                     text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          ← Back
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Login API returns 500 error
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Backend • Urgent • ₹800
        </p>
        <span className="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-600">
          Open
        </span>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm flex justify-between gap-6">
          <div className="flex items-start gap-4">
            <img
              src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg"
              alt="profile"
              className="w-14 h-14 rounded-full border"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Rahul Dev
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Can fix within 2 hours
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                ⭐ 4.8 • Fixes: 32
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Message: I can debug your API quickly and explain the fix.
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              ₹750
            </p>

            <Link
              to="/profile"
              className="text-sm text-blue-600 dark:text-purple-400 font-medium block mt-2"
            >
              View Profile →
            </Link>

            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-xl hover:opacity-90 transition">
              Select Debugger
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm flex justify-between gap-6">
          <div className="flex items-start gap-4">
            <img
              src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg"
              alt="profile"
              className="w-14 h-14 rounded-full border"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Anu Krishna
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Can fix within 4 hours
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                ⭐ 4.6 • Fixes: 21
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Message: I’ll check logs, fix error handling and help you test.
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              ₹650
            </p>

            <Link
              to="/profile"
              className="text-sm text-blue-600 dark:text-purple-400 font-medium block mt-2"
            >
              View Profile →
            </Link>

            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-xl hover:opacity-90 transition">
              Select Debugger
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BugRequests;
