import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleBountyAPI } from "../services/allAPIs";
import { serverURL } from "../services/serverURL";

function BountyDetails() {
  const { id } = useParams();

  const [token, setToken] = useState("");
  const [bounty, setBounty] = useState(null);

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  const getBountyDetails = async () => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await getSingleBountyAPI(id, reqHeader);
      if (result.status === 200) {
        setBounty(result.data);
      }
    } catch (err) {
      console.log("Error fetching bounty details:", err);
    }
  };

  useEffect(() => {
    if (token && id) {
      getBountyDetails();
    }
  }, [token, id]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 border rounded-xl p-6">
        {bounty ? (
          <>
            {bounty.UploadedImages && bounty.UploadedImages.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {bounty.UploadedImages.map((img, index) => (
                  <img
                    key={index}
                    src={`${serverURL}/uploads/${img}`}
                    alt="bounty"
                    className="w-full h-52 object-cover rounded-xl border"
                  />
                ))}
              </div>
            )}

            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {bounty.title}
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {bounty.description}
            </p>

            <div className="flex gap-6 mb-6 flex-wrap">
              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full">
                Active
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">
                Bounty: ₹{bounty.reward}
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">
                Category: {bounty.category}
              </span>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                Project Link
              </h3>

              <a
                href={bounty.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-all"
              >
                {bounty.projectUrl}
              </a>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                Report a Bug
              </h3>

              <textarea
                rows="4"
                placeholder="Describe the bug you found..."
                className="w-full p-3 border rounded-lg mb-4 dark:bg-gray-900 dark:text-white"
              />

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                  Attach Screenshot (optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="block w-full text-sm border rounded-lg p-2 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Submit Bug Report
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">
            Loading bounty details...
          </p>
        )}
      </div>
    </div>
  );
}

export default BountyDetails;
