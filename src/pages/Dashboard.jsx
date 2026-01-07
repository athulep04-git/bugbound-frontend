import React from "react";
import { Link } from "react-router-dom";
import {
  FaBug,
  FaTools,
  FaCheckCircle,
  FaTrophy,
  FaEnvelopeOpenText,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Overview of your BugBound Hub activity
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">


        <Link
          to="/my-errors"
          className="flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-gray-800 border
                     hover:shadow-lg hover:-translate-y-1 transition"
        >
          <div className="p-3 bg-blue-600 text-white rounded-lg text-xl">
            <FaBug />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Posted Errors
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              12
            </p>
          </div>
        </Link>

        <Link
          to="/my-errors"
          className="flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-gray-800 border
                     hover:shadow-lg hover:-translate-y-1 transition"
        >
          <div className="p-3 bg-purple-600 text-white rounded-lg text-xl">
            <FaEnvelopeOpenText />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Proposals Received
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              9
            </p>
          </div>
        </Link>
        <Link
          to="/my-errors"
          className="flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-gray-800 border
                     hover:shadow-lg hover:-translate-y-1 transition"
        >
          <div className="p-3 bg-yellow-500 text-white rounded-lg text-xl">
            <FaTools />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Active Fixes
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              4
            </p>
          </div>
        </Link>
        <Link
          to="/completed"
          className="flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-gray-800 border
                     hover:shadow-lg hover:-translate-y-1 transition"
        >
          <div className="p-3 bg-green-600 text-white rounded-lg text-xl">
            <FaCheckCircle />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Completed Fixes
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              8
            </p>
          </div>
        </Link>

        <Link
          to="/profile"
          className="flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-gray-800 border
                     hover:shadow-lg hover:-translate-y-1 transition"
        >
          <div className="p-3 bg-pink-600 text-white rounded-lg text-xl">
            <FaTrophy />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Points Earned
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              1200
            </p>
          </div>
        </Link>

      </div>

      <div className="bg-white dark:bg-gray-800 border rounded-xl p-6 mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Recent Activity
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Login API returns 500 error
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                3 proposals received
              </p>
            </div>
            <p className="font-semibold text-gray-900 dark:text-white">
              ₹800
            </p>
          </div>

          <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                MongoDB timeout issue
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Fix completed
              </p>
            </div>
            <p className="font-semibold text-gray-900 dark:text-white">
              ₹500
            </p>
          </div>

        </div>
      </div>

      <div className="grid sm:grid-cols-4 gap-6">

        <Link
          to="/post-error"
          className="p-6 bg-white dark:bg-gray-800 border rounded-xl hover:shadow-lg transition"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            Post New Error
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Submit a new issue
          </p>
        </Link>

        <Link
          to="/my-errors"
          className="p-6 bg-white dark:bg-gray-800 border rounded-xl hover:shadow-lg transition"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            My Errors
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            View proposals & select debugger
          </p>
        </Link>

        <Link
          to="/errors"
          className="p-6 bg-white dark:bg-gray-800 border rounded-xl hover:shadow-lg transition"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            Browse Errors
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Fix bugs & earn rewards
          </p>
        </Link>

        <Link
          to="/leaderboard"
          className="p-6 bg-white dark:bg-gray-800 border rounded-xl hover:shadow-lg transition"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            Leaderboard
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            See top debuggers
          </p>
        </Link>

      </div>

    </div>
  );
}

export default Dashboard;
