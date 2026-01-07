import React from "react";
import { Link } from "react-router-dom";

function ErrorDetails() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 border rounded-xl p-6">


        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Login API returns 500 error
        </h1>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Backend • Priority: Urgent • Budget: ₹800
        </p>

        <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 border rounded-lg p-4 mb-6">
          <div>
            <p className="text-sm text-gray-500">Posted by</p>
            <p className="font-medium text-gray-900 dark:text-white">
              Athul EP
            </p>
            <p className="text-sm text-gray-500">
              ⭐ 4.7 • Errors posted: 12
            </p>
          </div>

          <Link
            to="/profile"
            className="text-blue-600 text-sm font-medium"
          >
            View Profile →
          </Link>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Whenever the user tries to log in, the backend API responds with
          a 500 internal server error. The issue started after adding JWT
          authentication.
        </p>
        <div className="mb-6">
          <img
            src="https://via.placeholder.com/600x250"
            alt="Error screenshot"
            className="rounded-lg border w-full"
          />
        </div>
        <h2 className="text-xl font-semibold mb-3">
          Send Fix Proposal
        </h2>

        <textarea
          placeholder="Explain how you will fix this issue..."
          className="w-full p-3 border rounded-lg mb-4"
          rows="4"
        />

        <div className="flex gap-4 mb-4">
          <input
            type="number"
            placeholder="Your price (₹)"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Estimated time (e.g. 2 hours)"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:opacity-90 transition">
          Submit Proposal
        </button>

      </div>
    </div>
  );
}

export default ErrorDetails;
