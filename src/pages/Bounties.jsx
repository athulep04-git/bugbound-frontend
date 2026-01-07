import React from "react";
import { Link } from "react-router-dom";

function Bounties() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 md:px-10 py-10">

      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Bug Bounty Challenges
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl">
            Test real-world projects, find bugs, and earn rewards by reporting issues.
          </p>
        </div>
        <Link
          to="/post-bounty"
          className="inline-flex items-center justify-center
                     px-6 py-3 rounded-xl
                     bg-gradient-to-r from-blue-600 to-purple-600
                     text-white font-medium
                     hover:opacity-90 hover:scale-105
                     transition"
        >
          + Add Bounty
        </Link>
      </div>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <Link
          to="/bounties/1"
          className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 
          hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-600">
              Active
            </span>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              ₹1500
            </span>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition">
           Bank App
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Find security flaws, logic bugs, or performance issues 
          </p>

          <div className="flex justify-between items-center mt-6 text-sm">
            <span className="text-gray-500 dark:text-gray-400">
              Category: Full Stack
            </span>
            <span className="text-blue-600 dark:text-purple-400 font-medium">
              View Details →
            </span>
          </div>
        </Link>
        <Link
          to="/bounties/2"
          className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 
          hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-600">
              Medium
            </span>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              ₹900
            </span>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition">
            Authentication System
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Test JWT authentication, role handling, and session management.
          </p>

          <div className="flex justify-between items-center mt-6 text-sm">
            <span className="text-gray-500 dark:text-gray-400">
              Category: Backend
            </span>
            <span className="text-blue-600 dark:text-purple-400 font-medium">
              View Details →
            </span>
          </div>
        </Link>
        <Link
          to="/bounties/3"
          className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 
          hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-600">
              High
            </span>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              ₹2200
            </span>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition">
            Payment Gateway Integration
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Identify payment failures, callback issues, and security loopholes.
          </p>

          <div className="flex justify-between items-center mt-6 text-sm">
            <span className="text-gray-500 dark:text-gray-400">
              Category: Payments
            </span>
            <span className="text-blue-600 dark:text-purple-400 font-medium">
              View Details →
            </span>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Bounties;
