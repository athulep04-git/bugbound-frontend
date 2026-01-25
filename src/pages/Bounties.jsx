import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBountiesAPI } from "../services/allAPIs";
import { serverURL } from "../services/serverURL";

function Bounties() {
  const [token, setToken] = useState("");
  const [allBounties, setAllBounties] = useState([]);

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  const getAllBounties = async () => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await getAllBountiesAPI(reqHeader);
      if (result.status === 200) {
        setAllBounties(result.data);
      }
    } catch (err) {
      console.log("Error fetching bounties:", err);
    }
  };

  useEffect(() => {
    if (token) {
      getAllBounties();
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 md:px-10 py-10">
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Bug Bounty Challenges
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl">
            Test real-world projects, find bugs, and earn rewards by reporting
            issues.
          </p>
        </div>

        <Link
          to="/post-bounty"
          className="inline-flex items-center justify-center
                     px-6 py-3 rounded-xl
                     bg-gradient-to-r from-blue-600 to-purple-600
                     text-white font-medium
                     hover:opacity-90 hover:scale-105
                     transition"
        >
          + Add Bounty
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allBounties && allBounties.length > 0 ? (
          allBounties.map((item) => (
            <Link
              key={item._id}
              to={`/bounties/${item._id}`}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={
                  item.UploadedImages && item.UploadedImages.length > 0
                    ? `${serverURL}/uploads/${item.UploadedImages[0]}`
                    : "https://cdn-icons-png.flaticon.com/512/685/685655.png"
                }
                alt="bounty"
                className="w-full h-44 object-cover rounded-xl mb-4 border"
              />

              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-600">
                  Active
                </span>
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  ₹{item.reward}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                {item.description}
              </p>

              <div className="flex justify-between items-center mt-6 text-sm">
                <span className="text-gray-500 dark:text-gray-400">
                  Category: {item.category}
                </span>
                <span className="text-blue-600 dark:text-purple-400 font-medium">
                  View Details →
                </span>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-400 text-center col-span-3">
            No bounties found
          </p>
        )}
      </div>
    </div>
  );
}

export default Bounties;
