import React from "react";

function AdminComplaints() {
  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-6">Complaints</h1>

      <div className="bg-white dark:bg-gray-800 border rounded-xl p-6">
        <p className="text-gray-600 dark:text-gray-400">
          Review and resolve complaints raised by users or debuggers.
        </p>

        <div className="mt-4 text-sm text-gray-500">
          (Complaints table will be displayed here)
        </div>
      </div>
    </div>
  );
}

export default AdminComplaints;
