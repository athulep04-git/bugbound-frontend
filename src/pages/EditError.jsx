import React from "react";
import { Link } from "react-router-dom";

function EditError() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">
      <div className="max-w-3xl mx-auto mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Edit Error
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Update your bug details and images.
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

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm">
        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Error Title
            </label>
            <input
              type="text"
              placeholder="Eg: Login API returning 500 error"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Error Description
            </label>
            <textarea
              rows="5"
              placeholder="Explain the problem, steps to reproduce, and expected output..."
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Upload New Images (optional)
            </label>
            <input
              type="file"
              multiple
              className="w-full p-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900"
            />

            <div className="mt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Current Images
              </p>

              <div className="flex gap-3 flex-wrap">
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-lg border flex items-center justify-center text-xs text-gray-500">
                  Image 1
                </div>
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-lg border flex items-center justify-center text-xs text-gray-500">
                  Image 2
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Priority
              </label>
              <select className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent">
                <option>Urgent</option>
                <option>Normal</option>
                <option>Low</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Category
              </label>
              <select className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent">
                <option>Frontend</option>
                <option>Backend</option>
                <option>Database</option>
                <option>Deployment</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Fix Budget (₹)
              </label>
              <input
                type="number"
                placeholder="500"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Link
              to="/my-errors"
              className="px-6 py-3 rounded-xl border text-gray-700 dark:text-gray-200
                         hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              Cancel
            </Link>

            <button
              type="button"
              className="px-8 py-3 rounded-xl text-white font-medium
                         bg-gradient-to-r from-blue-600 to-purple-600
                         hover:opacity-90 hover:scale-105 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditError;
