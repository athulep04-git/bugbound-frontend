// import React from "react";

// function AdminDashboard() {
//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">

//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
//           Admin Dashboard
//         </h1>
//         <p className="text-gray-600 dark:text-gray-400 mt-1">
//           Platform overview & management controls
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

//         <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
//           <p className="text-sm text-gray-500 dark:text-gray-400">Total Users</p>
//           <p className="text-2xl font-bold text-gray-900 dark:text-white">1,248</p>
//         </div>

//         <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
//           <p className="text-sm text-gray-500 dark:text-gray-400">Errors Posted</p>
//           <p className="text-2xl font-bold text-gray-900 dark:text-white">3,560</p>
//         </div>

//         <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
//           <p className="text-sm text-gray-500 dark:text-gray-400">Active Disputes</p>
//           <p className="text-2xl font-bold text-gray-900 dark:text-white">18</p>
//         </div>

//         <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
//           <p className="text-sm text-gray-500 dark:text-gray-400">Payments Processed</p>
//           <p className="text-2xl font-bold text-gray-900 dark:text-white">₹2,45,000</p>
//         </div>

//       </div>

//       <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-10">
//         <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
//           Recent User Reports
//         </h2>

//         <div className="space-y-4">
//           <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
//             <div>
//               <p className="font-medium text-gray-900 dark:text-white">
//                 Inappropriate debugger behavior
//               </p>
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 Reported by User #245
//               </p>
//             </div>
//             <span className="text-red-600 font-medium">Open</span>
//           </div>

//           <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
//             <div>
//               <p className="font-medium text-gray-900 dark:text-white">
//                 Payment dispute
//               </p>
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 Reported by Debugger #88
//               </p>
//             </div>
//             <span className="text-yellow-600 font-medium">In Review</span>
//           </div>
//         </div>
//       </div>

//       <div className="grid sm:grid-cols-3 gap-6">

//         <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-md transition">
//           <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
//             Manage Users
//           </h3>
//           <p className="text-sm text-gray-600 dark:text-gray-400">
//             View, block, or remove users
//           </p>
//         </div>

//         <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-md transition">
//           <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
//             Review Disputes
//           </h3>
//           <p className="text-sm text-gray-600 dark:text-gray-400">
//             Resolve conflicts between users
//           </p>
//         </div>

//         <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-md transition">
//           <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
//             Payment Monitoring
//           </h3>
//           <p className="text-sm text-gray-600 dark:text-gray-400">
//             Track and verify transactions
//           </p>
//         </div>

//       </div>

//     </div>
//   );
// }

// export default AdminDashboard;
import React from "react";

function AdminDashboard() {
  return (
    <div className="p-6 md:p-10">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Platform overview & management controls
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <StatCard title="Total Users" value="1,248" />
        <StatCard title="Bug Reports" value="3,560" />
        <StatCard title="Active Disputes" value="18" />
        <StatCard title="Blocked Users" value="42" />

      </div>

      {/* SYSTEM HEALTH */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">System Health</h2>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>🟢 API Status: Online</li>
            <li>🟢 Database: Connected</li>
            <li>🟡 Payment Gateway: Stable</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Admin Actions</h2>
          <ul className="space-y-3 text-sm">
            <li>Blocked User #245</li>
            <li>Resolved payment dispute #88</li>
            <li>Approved new admin role</li>
          </ul>
        </div>

      </div>

      {/* QUICK ACTIONS */}
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

/* SMALL COMPONENTS */

const StatCard = ({ title, value }) => (
  <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
    <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
    <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
  </div>
);

const ActionCard = ({ title, desc }) => (
  <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-md transition">
    <h3 className="font-semibold mb-1">{title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
  </div>
);

export default AdminDashboard;
