import React from "react";

function BountyDetails() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 border rounded-xl p-6">

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Bank App
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Test this project and report any bugs or vulnerabilities.
        </p>

        <div className="flex gap-6 mb-6">
          <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full">
            Active
          </span>
          <span className="font-semibold text-gray-900 dark:text-white">
            Bounty: ₹1500
          </span>
        </div>
       <div className="mb-6">
  <h3 className="font-semibold mb-2">Project Link</h3>
  <a
    href="https://bankwebsite-two.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    https://bankwebsite-two.vercel.app/
  </a>
</div>

        <div>
          <h3 className="font-semibold mb-2">Report a Bug</h3>

          <textarea
            rows="4"
            placeholder="Describe the bug you found..."
            className="w-full p-3 border rounded-lg mb-4"
          />
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Attach Screenshot (optional)
            </label>
            <input
              type="file"
              accept="image/*"
              className="block w-full text-sm border rounded-lg p-2"
            />
          </div>

          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Submit Bug Report
          </button>
        </div>

      </div>
    </div>
  );
}

export default BountyDetails;
