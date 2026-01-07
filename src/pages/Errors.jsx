import React from "react";
import { Link } from "react-router-dom";

function Errors() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">
      <div className="max-w-7xl mx-auto mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Browse Errors
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Find issues you can fix and earn rewards.
          </p>
        </div>

        <Link
          to="/post-error"
          className="inline-flex items-center justify-center
                     px-6 py-3 rounded-xl
                     bg-gradient-to-r from-blue-600 to-purple-600
                     text-white font-medium
                     hover:opacity-90 hover:scale-105
                     transition"
        >
          + Add Error
        </Link>
      </div>
      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          <input
            type="text"
            placeholder="Search errors..."
            className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select className="p-3 border rounded-lg">
            <option>All Categories</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Database</option>
            <option>Authentication</option>
            <option>Deployment</option>
          </select>

          <select className="p-3 border rounded-lg">
            <option>All Priorities</option>
            <option>Urgent</option>
            <option>Normal</option>
            <option>Low</option>
          </select>

          <select className="p-3 border rounded-lg">
            <option>Sort By</option>
            <option>Newest</option>
            <option>Budget: High → Low</option>
            <option>Budget: Low → High</option>
          </select>

        </div>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          to="/errors/1"
          className="block bg-white dark:bg-gray-800 border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
        >
          <h3 className="font-semibold text-lg mb-1">
            Login API returns 500 error
          </h3>
          <p className="text-sm text-gray-600 mb-3">Backend</p>
          <div className="flex justify-between">
            <span className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full">
              Urgent
            </span>
            <span className="font-semibold">₹800</span>
          </div>
        </Link>
        <Link
          to="/errors/2"
          className="block bg-white dark:bg-gray-800 border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
        >
          <h3 className="font-semibold text-lg mb-1">
            UI alignment issue on mobile
          </h3>
          <p className="text-sm text-gray-600 mb-3">Frontend</p>
          <div className="flex justify-between">
            <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-600 rounded-full">
              Normal
            </span>
            <span className="font-semibold">₹300</span>
          </div>
        </Link>
        <Link
          to="/errors/3"
          className="block bg-white dark:bg-gray-800 border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
        >
          <h3 className="font-semibold text-lg mb-1">
            MongoDB connection timeout
          </h3>
          <p className="text-sm text-gray-600 mb-3">Database</p>
          <div className="flex justify-between">
            <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">
              Low
            </span>
            <span className="font-semibold">₹200</span>
          </div>
        </Link>
        <Link
          to="/errors/4"
          className="block bg-white dark:bg-gray-800 border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
        >
          <h3 className="font-semibold text-lg mb-1">
            Payment gateway callback not received
          </h3>
          <p className="text-sm text-gray-600 mb-3">Backend</p>
          <div className="flex justify-between">
            <span className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full">
              Urgent
            </span>
            <span className="font-semibold">₹1200</span>
          </div>
        </Link>
        <Link
          to="/errors/5"
          className="block bg-white dark:bg-gray-800 border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
        >
          <h3 className="font-semibold text-lg mb-1">
            JWT token expires too early
          </h3>
          <p className="text-sm text-gray-600 mb-3">Authentication</p>
          <div className="flex justify-between">
            <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-600 rounded-full">
              Normal
            </span>
            <span className="font-semibold">₹450</span>
          </div>
        </Link>
        <Link
          to="/errors/6"
          className="block bg-white dark:bg-gray-800 border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
        >
          <h3 className="font-semibold text-lg mb-1">
            CORS error while calling API
          </h3>
          <p className="text-sm text-gray-600 mb-3">Deployment</p>
          <div className="flex justify-between">
            <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-600 rounded-full">
              Normal
            </span>
            <span className="font-semibold">₹350</span>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Errors;
