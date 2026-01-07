import React from "react";

function PostBounty() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 md:px-10 py-10">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Create Bug Bounty
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Publish a project and reward developers for finding bugs.
        </p>
      </div>

      {/* FORM */}
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 border rounded-2xl p-8 shadow">

        <form className="space-y-6">

          {/* PROJECT TITLE */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
              Project Title
            </label>
            <input
              type="text"
              placeholder="e.g. MERN E-commerce App"
              className="w-full p-3 border rounded-lg outline-none
                         focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* CATEGORY */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
              Category
            </label>
            <select
              className="w-full p-3 border rounded-lg outline-none
                         focus:ring-2 focus:ring-blue-500"
            >
              <option>Select category</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Full Stack</option>
              <option>Security</option>
              <option>Payments</option>
              <option>Deployment</option>
            </select>
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
              Project Description
            </label>
            <textarea
              rows="4"
              placeholder="Describe the project, scope, and what to test..."
              className="w-full p-3 border rounded-lg outline-none
                         focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* PROJECT LINK */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
              Project URL / Repository
            </label>
            <input
              type="url"
              placeholder="https://github.com/username/project"
              className="w-full p-3 border rounded-lg outline-none
                         focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* BOUNTY AMOUNT */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
              Bounty Amount (₹)
            </label>
            <input
              type="number"
              placeholder="e.g. 1500"
              className="w-full p-3 border rounded-lg outline-none
                         focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* RULES */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
              Rules / Guidelines (optional)
            </label>
            <textarea
              rows="3"
              placeholder="Any rules, limitations, or notes for testers"
              className="w-full p-3 border rounded-lg outline-none
                         focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* SUBMIT */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              className="px-6 py-3 rounded-xl border text-gray-700
                         hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-8 py-3 rounded-xl
                         bg-gradient-to-r from-blue-600 to-purple-600
                         text-white font-medium
                         hover:opacity-90 hover:scale-105 transition"
            >
              Publish Bounty
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default PostBounty;
