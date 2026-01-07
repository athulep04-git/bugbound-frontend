import React from "react";
import { useNavigate } from "react-router-dom";

function MyTasks() {
  const navigate = useNavigate();


 

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          My Tasks
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Bugs you are currently working on
        </p>
      </div>


      <div className="max-w-6xl mx-auto space-y-6">

        <div
           onClick={() => navigate("/debuggerwork/1")}
          className="cursor-pointer bg-white dark:bg-gray-800 border rounded-xl p-6
                     flex justify-between items-center
                     hover:shadow-xl hover:scale-[1.01] transition"
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Login API returns 500 error
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Backend • ₹800
            </p>

            <div className="flex gap-3 mt-3 text-xs">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600">
                Debugger
              </span>

              <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                In Progress
              </span>
            </div>
          </div>

          <div className="text-blue-600 font-medium">
            Open Workspace →
          </div>
        </div>

        <div
          onClick={() => navigate("/debuggerwork/2")}
          className="cursor-pointer bg-white dark:bg-gray-800 border rounded-xl p-6
                     flex justify-between items-center
                     hover:shadow-xl hover:scale-[1.01] transition"
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              JWT Authentication Crash
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Node / Express • ₹1200
            </p>

            <div className="flex gap-3 mt-3 text-xs">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600">
                Debugger
              </span>

              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
                Fixing
              </span>
            </div>
          </div>

          <div className="text-blue-600 font-medium">
            Open Workspace →
          </div>
        </div>

      </div>
    </div>
  );
}

export default MyTasks;
