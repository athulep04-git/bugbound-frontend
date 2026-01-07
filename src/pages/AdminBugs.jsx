import React from "react";

function AdminBugs() {
  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-6">Bug Reports</h1>

      <div className="bg-white dark:bg-gray-800 border rounded-xl p-6">
        <p className="text-gray-600 dark:text-gray-400">
          Monitor all reported bugs and their current status.
        </p>

        <div className="mt-4 text-sm text-gray-500">
          (Bug reports list will be shown here)
        </div>
      </div>
    </div>
  );
}

export default AdminBugs;
