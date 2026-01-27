import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getABugAPI, editBugAPI } from "../services/allAPIs";
import { toast, Bounce } from "react-toastify";

function EditError() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bugData, setBugData] = useState({
    title: "",
    description: "",
    priority: "Low",
    category: "Frontend",
    fixBudget: "",
    UploadedImages: [],
  });

  const [newImages, setNewImages] = useState([]);

  useEffect(() => {
    const fetchBug = async () => {
      const token = sessionStorage.getItem("token");

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      try {
        const response = await getABugAPI(id, reqHeader);
        if (response.status === 200) {
          setBugData(response.data);
        }
      } catch (err) {
        toast.error("Failed to load bug details", {
          transition: Bounce,
        });
      }
    };

    fetchBug();
  }, [id]);

  const handleUpdate = async () => {
    if (!bugData.title || !bugData.description || !bugData.fixBudget) {
      toast.warn("Please fill all required fields", {
        transition: Bounce,
      });
      return;
    }

    const token = sessionStorage.getItem("token");

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const updatedBug = {
      ...bugData,
      UploadedImages:
        newImages.length > 0 ? newImages : bugData.UploadedImages,
    };

    try {
      const response = await editBugAPI(id, updatedBug, reqHeader);

      if (response.status === 200) {
        toast.success("Bug updated successfully", {
          transition: Bounce,
        });

        setTimeout(() => {
          navigate("/my-errors");
        }, 1500);
      }
    } catch (err) {
      toast.error("Update failed", {
        transition: Bounce,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">
      <div className="max-w-3xl mx-auto mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Edit Error
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Update your bug details and images.
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

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 border rounded-2xl p-8 shadow-sm">
        <div className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium">
              Error Title
            </label>
            <input
              type="text"
              value={bugData.title}
              onChange={(e) =>
                setBugData({ ...bugData, title: e.target.value })
              }
              className="w-full p-3 rounded-lg border"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Error Description
            </label>
            <textarea
              rows="5"
              value={bugData.description}
              onChange={(e) =>
                setBugData({ ...bugData, description: e.target.value })
              }
              className="w-full p-3 rounded-lg border"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Upload New Images (optional)
            </label>
            <input
              type="file"
              multiple
              onChange={(e) => setNewImages([...e.target.files])}
              className="w-full p-2 border rounded-lg"
            />

            <div className="flex gap-3 mt-3 flex-wrap">
              {bugData.UploadedImages?.map((img, index) => (
                <div
                  key={index}
                  className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-xs"
                >
                  Image {index + 1}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <select
              value={bugData.priority}
              onChange={(e) =>
                setBugData({ ...bugData, priority: e.target.value })
              }
              className="p-3 rounded-lg border"
            >
              <option>Urgent</option>
              <option>Normal</option>
              <option>Low</option>
            </select>

            <select
              value={bugData.category}
              onChange={(e) =>
                setBugData({ ...bugData, category: e.target.value })
              }
              className="p-3 rounded-lg border"
            >
              <option>Frontend</option>
              <option>Backend</option>
              <option>Database</option>
              <option>Deployment</option>
            </select>

            <input
              type="number"
              value={bugData.fixBudget}
              onChange={(e) =>
                setBugData({ ...bugData, fixBudget: e.target.value })
              }
              className="p-3 rounded-lg border"
            />
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Link
              to="/my-errors"
              className="px-6 py-3 rounded-xl border"
            >
              Cancel
            </Link>

            <button
              onClick={handleUpdate}
              className="px-8 py-3 rounded-xl text-white
                         bg-gradient-to-r from-blue-600 to-purple-600
                         hover:opacity-90 hover:scale-105 transition"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditError;
