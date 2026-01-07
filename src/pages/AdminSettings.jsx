import React from "react";

function AdminSettings() {
  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="bg-white dark:bg-gray-800 border rounded-xl p-6 space-y-4">
        <p className="text-gray-600 dark:text-gray-400">
          Admin account and platform settings.
        </p>

        <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400">
          <li>Change admin password</li>
          <li>Update profile information</li>
          <li>System preferences</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminSettings;
