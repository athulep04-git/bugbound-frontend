import React from "react";

function PostError() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Post a New Error
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Describe your issue and get help from expert debuggers.
        </p>
      </div>

      {/* FORM */}
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm">

        <form className="space-y-6">

          {/* ERROR TITLE */}
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

          {/* DESCRIPTION */}
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

          {/* SCREENSHOT UPLOAD */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Upload Screenshot
            </label>
            <input
              type="file"
              className="w-full p-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900"
            />
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* PRIORITY */}
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

            {/* CATEGORY */}
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

            {/* BUDGET */}
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

          {/* SUBMIT */}
          <button
            type="button"
            className="w-full mt-6 py-3 rounded-xl text-white 
            bg-gradient-to-r from-blue-600 to-purple-600 
            hover:opacity-90 transition font-medium"
          >
            Submit Error
          </button>

        </form>
      </div>

    </div>
  );
}

export default PostError;
