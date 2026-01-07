import React from "react";
import { Link } from "react-router-dom";

function CompletedTasks() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">

      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Completed Tasks
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Tasks you have successfully completed
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">

        <div className="bg-white dark:bg-gray-800 border rounded-xl p-6 hover:shadow-lg transition">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">
                Login API returns 500 error
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Backend • ₹800
              </p>

              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <p>👤 Client: Athul</p>
                <p>⏱️ Time Taken: 1h 42m</p>
                <p>✅ Completed On: 12 Dec 2025, 7:45 PM</p>
              </div>
            </div>

            <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
              Completed
            </span>
          </div>

          <div className="mt-4">
            <Link
              to="/workspace/1"
              className="text-blue-600 text-sm hover:underline"
            >
              View Workspace →
            </Link>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 border rounded-xl p-6 hover:shadow-lg transition">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">
                JWT Authentication Failure
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Authentication • ₹1200
              </p>

              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <p>👤 Client: Rahul</p>
                <p>⏱️ Time Taken: 2h 10m</p>
                <p>✅ Completed On: 10 Dec 2025, 9:20 PM</p>
              </div>
            </div>

            <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
              Completed
            </span>
          </div>

          <div className="mt-4">
            <Link
              to="/workspace/2"
              className="text-blue-600 text-sm hover:underline"
            >
              View Workspace →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CompletedTasks;
