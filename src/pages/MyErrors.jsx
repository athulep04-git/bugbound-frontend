import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  getMyBugsAPI,
  getMyBountiesAPI,
  deleteBugAPI,
  deleteBountyAPI,
} from "../services/allAPIs";

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
    const reqHeader = { Authorization: `Bearer ${token}` };
    const result = await getMyBugsAPI(reqHeader);
    if (result.status === 200) {
      setMyBugs(result.data);
    }
  };

  const getMyBounties = async () => {
    const reqHeader = { Authorization: `Bearer ${token}` };
    const result = await getMyBountiesAPI(reqHeader);
    if (result.status === 200) {
      setMyBounties(result.data);
    }
  };

  useEffect(() => {
    if (token) {
      getMyBugs();
      getMyBounties();
    }
  }, [token]);

  const handleDeleteBug = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This bug will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const reqHeader = { Authorization: `Bearer ${token}` };
        const res = await deleteBugAPI(id, reqHeader);

        if (res.status === 200) {
          setMyBugs((prev) => prev.filter((bug) => bug._id !== id));
          Swal.fire("Deleted!", "Bug deleted successfully.", "success");
        }
      }
    });
  };

  const handleDeleteBounty = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This bounty will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const reqHeader = { Authorization: `Bearer ${token}` };
        const res = await deleteBountyAPI(id, reqHeader);

        if (res.status === 200) {
          setMyBounties((prev) =>
            prev.filter((bounty) => bounty._id !== id)
          );
          Swal.fire("Deleted!", "Bounty deleted successfully.", "success");
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
          My Errors
        </button>

        <button
          onClick={() => setActiveTab("bounties")}
          className={`px-6 py-2 rounded-xl font-medium ${
            activeTab === "bounties"
              ? "bg-purple-600 text-white"
              : "bg-white border"
          }`}
        >
          My Bounties
        </button>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">

        {activeTab === "errors" &&
          (myBugs.length ? (
            myBugs.map((bug) => (
              <div
                key={bug._id}
                onClick={() => navigate(`/workspace/${bug._id}`)}
                className="cursor-pointer bg-white border rounded-xl p-6
                           flex justify-between hover:shadow-lg transition"
              >
                <div>
                  <h3 className="text-xl font-semibold">{bug.title}</h3>
                  <p className="text-sm text-gray-600">
                    {bug.category} • ₹{bug.fixBudget}
                  </p>
                </div>

                <div
                  className="flex flex-col gap-2 items-end"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/edit-error/${bug._id}`)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      ✏️
                    </button>

                    <button
                      onClick={() => handleDeleteBug(bug._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded"
                    >
                      🗑️
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
            <p className="text-center text-gray-500">
              No errors posted yet.
            </p>
          ))}

        {activeTab === "bounties" &&
          (myBounties.length ? (
            myBounties.map((bounty) => (
              <div
                key={bounty._id}
                className="bg-white border rounded-xl p-6 flex justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold">{bounty.title}</h3>
                  <p className="text-sm text-gray-600">
                    {bounty.category} • ₹{bounty.reward}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/edit-bounty/${bounty._id}`)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    ✏️
                  </button>

                  <button
                    onClick={() => handleDeleteBounty(bounty._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No bounties posted yet.
            </p>
          ))}
      </div>
    </div>
  );
}

export default MyErrors;
