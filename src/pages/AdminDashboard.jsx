import React, { useEffect, useState } from "react";
import { getAdminStatsAPI } from "../services/allAPIs";

function AdminDashboard() {
  const [counts, setCounts] = useState({
    users: 0,
    bugs: 0,
    activeBugs: 0,
    blockedUsers: 0,
  });

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) return;

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    getAdminStatsAPI(reqHeader)
      .then((res) => {
        if (res.status === 200) {
          setCounts(res.data);
        }
      })
      .catch((err) => {
        console.log("Admin stats error", err);
      });
  }, []);

  return (
    <div className="p-6 md:p-10">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Platform overview & management controls
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Users" value={counts.users} />
        <StatCard title="Bug Reports" value={counts.bugs} />
        <StatCard title="Active Bugs" value={counts.activeBugs} />
        <StatCard title="Blocked Users" value={counts.blockedUsers} />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">

        <div className="bg-white dark:bg-gray-800 border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">System Health</h2>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>🟢 API Status: Online</li>
            <li>🟢 Database: Connected</li>
            <li>🟡 Payment Gateway: Stable</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Recent Admin Actions
          </h2>
          <ul className="space-y-3 text-sm">
            <li>Blocked suspicious account</li>
            <li>Reviewed bug reports</li>
            <li>System audit completed</li>
          </ul>
        </div>

      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        <ActionCard
          title="Manage Users"
          desc="View, block, or remove users"
        />

        <ActionCard
          title="Review Bug Reports"
          desc="Monitor and resolve reported bugs"
        />

        <ActionCard
          title="Handle Complaints"
          desc="Review user and debugger complaints"
        />
      </div>

    </div>
  );
}


const StatCard = ({ title, value }) => (
  <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const ActionCard = ({ title, desc }) => (
  <div className="p-6 bg-white dark:bg-gray-800 border rounded-xl hover:shadow-md transition">
    <h3 className="font-semibold mb-1">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

export default AdminDashboard;
