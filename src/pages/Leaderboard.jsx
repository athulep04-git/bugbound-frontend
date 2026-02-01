import React, { useEffect, useState } from "react";
import { getLeaderboardAPI } from "../services/allAPIs";

function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const result = await getLeaderboardAPI();
      if (result.status === 200) {
        setUsers(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getProfileImage = (profile) => {
    if (!profile)
      return "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";
    if (profile.startsWith("http")) return profile;
    return `http://localhost:3000/uploads/${profile}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">

      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Debugger Leaderboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Ranked by points, fixes, and ratings
        </p>
      </div>


      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
        {users.slice(0, 3).map((user, i) => (
          <div
            key={user._id}
            className="bg-white dark:bg-gray-800 border rounded-xl p-6 text-center shadow"
          >
            <img
              src={getProfileImage(user.profile)}
              className="w-20 h-20 mx-auto rounded-full mb-3"
              alt={user.username}
            />
            <h3 className="text-xl font-bold">
              {["🥇", "🥈", "🥉"][i]} {user.username}
            </h3>
            <p className="text-sm mt-1">⭐ {user.rating}</p>
            <p className="text-sm">Fixes: {user.totalFixes}</p>
            <p className="font-semibold mt-2">{user.points} pts</p>
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
              <th className="p-3">Points</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id} className="border-t">
                <td className="p-3">{i + 1}</td>
                <td className="p-3">{user.username}</td>
                <td className="p-3">{user.rating}</td>
                <td className="p-3">{user.totalFixes}</td>
                <td className="p-3">{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Leaderboard;
