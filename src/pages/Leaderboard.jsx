import React from "react";

function Leaderboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">

      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Debugger Leaderboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Ranked by fixes, ratings, and earnings
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-12">

        {[
          { rank: "🥇", name: "Rahul", fixes: 48, rating: 4.9, amount: "₹24,500" },
          { rank: "🥈", name: "Aditya", fixes: 39, rating: 4.7, amount: "₹19,800" },
          { rank: "🥉", name: "Vishnu", fixes: 31, rating: 4.6, amount: "₹15,300" },
        ].map((user, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center shadow"
          >
            <img
              src={`https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg`}
              className="mx-auto rounded-full mb-3"
              alt={user.name}
            />
            <h3 className="text-xl font-bold">{user.rank} {user.name}</h3>
            <p className="text-sm mt-1">⭐ {user.rating}</p>
            <p className="text-sm">Fixes: {user.fixes}</p>
            <p className="font-semibold mt-2">{user.amount}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="p-3">Rank</th>
              <th className="p-3">Name</th>
              <th className="p-3">Rating</th>
              <th className="p-3">Fixes</th>
              <th className="p-3">Earnings</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["4", "Sneha JS", "4.5", "26", "₹11,200"],
              ["5", "Arjun Node", "4.4", "22", "₹9,800"],
            ].map((row, i) => (
              <tr key={i} className="border-t">
                {row.map((cell, idx) => (
                  <td key={idx} className="p-3">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Leaderboard;
