import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getSingleBountyAPI, editBountyAPI } from "../services/allAPIs";
import { toast, Bounce } from "react-toastify";

function EditBounty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bountyData, setBountyData] = useState({
    title: "",
    category: "",
    description: "",
    projectUrl: "",
    reward: "",
    rules: "",
  });

  useEffect(() => {
    fetchBounty();
  }, []);

  const fetchBounty = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const res = await getSingleBountyAPI(id, reqHeader);
      if (res.status === 200) {
        setBountyData({
          title: res.data.title,
          category: res.data.category,
          description: res.data.description,
          projectUrl: res.data.projectUrl,
          reward: res.data.reward,
          rules: res.data.rules || "",
        });
      }
    } catch (err) {
      toast.warn("Failed to load bounty", {
        transition: Bounce,
        theme: "colored",
      });
    }
  };

  const handleUpdate = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      const res = await editBountyAPI(id, bountyData, reqHeader);
      if (res.status === 200) {
        toast.success("Bounty updated successfully", {
          transition: Bounce,
          theme: "colored",
        });
        setTimeout(() => navigate("/my-errors"), 2000);
      }
    } catch (err) {
      toast.warn("Update failed", {
        transition: Bounce,
        theme: "colored",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 md:px-10 py-10">
      <div className="max-w-3xl mx-auto mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Edit Bug Bounty
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Update your bounty details and rules.
          </p>
        </div>

        <Link
          to="/my-errors"
          className="px-5 py-2 rounded-xl border bg-white dark:bg-gray-800
                     text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          ← Back
        </Link>
      </div>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 border rounded-2xl p-8 shadow">
        <div className="space-y-6">
          <input
            type="text"
            value={bountyData.title}
            onChange={(e) =>
              setBountyData({ ...bountyData, title: e.target.value })
            }
            className="w-full p-3 border rounded-lg bg-transparent"
            placeholder="Project Title"
          />

          <select
            value={bountyData.category}
            onChange={(e) =>
              setBountyData({ ...bountyData, category: e.target.value })
            }
            className="w-full p-3 border rounded-lg bg-transparent"
          >
            <option>Frontend</option>
            <option>Backend</option>
            <option>Full Stack</option>
            <option>Security</option>
            <option>Payments</option>
            <option>Deployment</option>
          </select>

          <textarea
            rows="4"
            value={bountyData.description}
            onChange={(e) =>
              setBountyData({ ...bountyData, description: e.target.value })
            }
            className="w-full p-3 border rounded-lg bg-transparent"
            placeholder="Description"
          />

          <input
            type="url"
            value={bountyData.projectUrl}
            onChange={(e) =>
              setBountyData({ ...bountyData, projectUrl: e.target.value })
            }
            className="w-full p-3 border rounded-lg bg-transparent"
            placeholder="Project URL"
          />

          <input
            type="number"
            value={bountyData.reward}
            onChange={(e) =>
              setBountyData({ ...bountyData, reward: e.target.value })
            }
            className="w-full p-3 border rounded-lg bg-transparent"
            placeholder="Bounty Amount"
          />

          <textarea
            rows="3"
            value={bountyData.rules}
            onChange={(e) =>
              setBountyData({ ...bountyData, rules: e.target.value })
            }
            className="w-full p-3 border rounded-lg bg-transparent"
            placeholder="Rules"
          />

          <div className="flex justify-end gap-4 pt-4">
            <Link
              to="/my-errors"
              className="px-6 py-3 rounded-xl border"
            >
              Cancel
            </Link>

            <button
              onClick={handleUpdate}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600
                         text-white font-medium hover:opacity-90 hover:scale-105 transition"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBounty;
