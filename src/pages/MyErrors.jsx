import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getMyBugsAPI, getMyBountiesAPI } from "../services/allAPIs";

function MyErrors() {
  const [activeTab, setActiveTab] = useState("errors");
  const [token, setToken] = useState("");
  const [myBugs, setMyBugs] = useState([]);
  const [myBounties, setMyBounties] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  const getMyBugs = async () => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await getMyBugsAPI(reqHeader);

      if (result.status === 200) {
        setMyBugs(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getMyBounties = async () => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await getMyBountiesAPI(reqHeader);

      if (result.status === 200) {
        setMyBounties(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) {
      getMyBugs();
      getMyBounties();
    }
  }, [token]);

  const handleDelete = async (type, id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your item has been deleted.", "success");

        if (type === "bug") {
          setMyBugs((prev) => prev.filter((item) => item._id !== id));
        } else {
          setMyBounties((prev) => prev.filter((item) => item._id !== id));
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        My Posts
      </h1>

      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveTab("errors")}
          className={`px-6 py-2 rounded-xl font-medium ${
            activeTab === "errors"
              ? "bg-blue-600 text-white"
              : "bg-white border"
          }`}
        >
          🐞 My Errors
        </button>

        <button
          onClick={() => setActiveTab("bounties")}
          className={`px-6 py-2 rounded-xl font-medium ${
            activeTab === "bounties"
              ? "bg-purple-600 text-white"
              : "bg-white border"
          }`}
        >
          🏆 My Bounties
        </button>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {activeTab === "errors" && (
          <>
            {myBugs?.length > 0 ? (
              myBugs.map((bug) => (
                <div
                  key={bug._id}
                  onClick={() => navigate(`/workspace/${bug._id}`)}
                  className="cursor-pointer bg-white dark:bg-gray-800 border rounded-xl p-6
                             flex justify-between items-start
                             hover:shadow-lg hover:border-blue-500 transition"
                >
                  <div>
                    <h3 className="text-xl font-semibold">{bug.title}</h3>

                    <p className="text-sm text-gray-600 mt-1">
                      {bug.category} • ₹{bug.fixBudget}
                    </p>

                    <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-600">
                      {bug.status || "Open"}
                    </span>
                  </div>

                  <div
                    className="flex flex-col items-end gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigate(`/edit-error/${bug._id}`)}
                        className="px-3 py-1 bg-gray-200 rounded"
                      >
                        ✏️ Edit
                      </button>

                      <button
                        onClick={() => handleDelete("bug", bug._id)}
                        className="px-3 py-1 bg-red-600 text-white rounded"
                      >
                        🗑️ Delete
                      </button>
                    </div>

                    <button
                      onClick={() => navigate(`/bug-requests/${bug._id}`)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                      View Requests
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 dark:text-gray-400">
                No errors posted yet.
              </p>
            )}
          </>
        )}

        {activeTab === "bounties" && (
          <>
            {myBounties?.length > 0 ? (
              myBounties.map((bounty) => (
                <div
                  key={bounty._id}
                  className="bg-white dark:bg-gray-800 border rounded-xl p-6 flex justify-between items-start"
                >
                  <div>
                    <h3 className="text-xl font-semibold">{bounty.title}</h3>

                    <p className="text-sm text-gray-600 mt-1">
                      {bounty.category} • ₹{bounty.reward}
                    </p>

                    <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                      {bounty.status || "Active"}
                    </span>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigate(`/edit-bounty/${bounty._id}`)}
                        className="px-3 py-1 bg-gray-200 rounded"
                      >
                        ✏️ Edit
                      </button>

                      <button
                        onClick={() => handleDelete("bounty", bounty._id)}
                        className="px-3 py-1 bg-red-600 text-white rounded"
                      >
                        🗑️ Delete
                      </button>
                    </div>

                    <Link
                      to={`/bounties/${bounty._id}`}
                      className="text-sm text-blue-600"
                    >
                      View Reports →
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 dark:text-gray-400">
                No bounties posted yet.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default MyErrors;
