import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getABugAPI } from "../services/allAPIs";
import { serverURL } from "../services/serverURL";

function ErrorDetails() {
  const { id } = useParams();

  const [token, setToken] = useState("");
  const [bug, setBug] = useState(null);
  const [requested, setRequested] = useState(false);

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  useEffect(() => {
    const alreadyRequested = sessionStorage.getItem(`requested_${id}`);
    if (alreadyRequested) {
      setRequested(true);
    }
  }, [id]);

  const getBugDetails = async () => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await getABugAPI(id, reqHeader);
      setBug(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) getBugDetails();
  }, [token]);

  const handleRequestFix = () => {
    setRequested(true);
    sessionStorage.setItem(`requested_${id}`, "true");
  };

  const handleCancelRequest = () => {
    setRequested(false);
    sessionStorage.removeItem(`requested_${id}`);
  };

  if (!bug) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-300">
        Loading bug details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">
      <div className="max-w-5xl mx-auto mb-6">
        <Link
          to="/errors"
          className="text-blue-600 dark:text-purple-400 font-medium hover:underline"
        >
          ← Back to Errors
        </Link>
      </div>

      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {bug.title}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Posted by: <span className="font-medium">{bug.userMail}</span>
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">
            <span className="px-4 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              {bug.category}
            </span>

            <span
              className={`px-4 py-1 rounded-full text-sm font-medium ${
                bug.priority === "Urgent"
                  ? "bg-red-100 text-red-600"
                  : bug.priority === "Normal"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {bug.priority}
            </span>

            <span className="px-4 py-1 rounded-full text-sm bg-purple-100 text-purple-700">
              Status: {bug.status}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Description
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {bug.description}
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Fix Budget
          </h2>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            ₹{bug.fixBudget}
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          {!requested ? (
            <button
              onClick={handleRequestFix}
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-white font-medium
              bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition"
            >
              Send Fix Request
            </button>
          ) : (
            <button
              onClick={handleCancelRequest}
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-red-600 font-medium
              border border-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
            >
              Cancel Request
            </button>
          )}
        </div>

        {bug.UploadedImages && bug.UploadedImages.length > 0 && (
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Uploaded Screenshots
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {bug.UploadedImages.map((img, index) => (
                <img
                  key={index}
                  src={`${serverURL}/uploads/${img}`}
                  alt="bug screenshot"
                  className="w-full h-48 object-cover rounded-xl border border-gray-200 dark:border-gray-700"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ErrorDetails;
