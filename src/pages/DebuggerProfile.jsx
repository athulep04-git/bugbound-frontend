import React from "react";

function DebuggerProfile() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Rahul Dev
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Full Stack Developer | MERN | 4+ Years Experience
        </p>

        <div className="flex gap-6 mb-6">
          <div>
            <p className="text-sm text-gray-500">Rating</p>
            <p className="font-semibold">⭐ 4.8</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Completed Fixes</p>
            <p className="font-semibold">32</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Success Rate</p>
            <p className="font-semibold">96%</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            About
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            I specialize in debugging backend APIs, authentication issues, and
            performance optimization. I also explain fixes clearly so users can
            learn.
          </p>
        </div>

        <button
          className="w-full py-3 rounded-xl text-white 
          bg-gradient-to-r from-blue-600 to-purple-600 
          hover:opacity-90 transition font-medium"
        >
          Select This Debugger
        </button>

      </div>

    </div>
  );
}

export default DebuggerProfile;
