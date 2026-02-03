import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getABugAPI, sendProposalAPI } from "../services/allAPIs";
import { serverURL } from "../services/serverURL";
import { toast } from "react-toastify";

function ErrorDetails() {
  const { id } = useParams();

  const [token, setToken] = useState("");
  const [bug, setBug] = useState(null);
  const [requested, setRequested] = useState(false);
  const [user, setUser] = useState({});

  const [proposalData, setProposalData] = useState({
    message: "",
    proposedAmount: "",
    estimatedTime: "",
  });


  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("userDetails"));
    const storedToken = sessionStorage.getItem("token");

    setUser(storedUser);
    setToken(storedToken);

    if (storedUser?.email) {
      setRequested(
        sessionStorage.getItem(`proposal_${id}_${storedUser.email}`) === "true"
      );
    }
  }, [id]);


  const getBugDetails = async () => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const result = await getABugAPI(id, reqHeader);

    if (result?.status === 200) {
      setBug(result.data);
    } else {
      toast.error("Failed to load bug details");
    }
  };

  useEffect(() => {
    if (token) {
      getBugDetails();
    }
  }, [token]);


  const handleRequestFix = async () => {
    if (!token || !user?.email) {
      toast.error("Authentication error");
      return;
    }

    if (bug.userMail === user.email) {
      toast.warn("You cannot send a request to your own bug");
      return;
    }

    const { message, proposedAmount, estimatedTime } = proposalData;

    if (!message || !proposedAmount || !estimatedTime) {
      toast.warn("Please fill all fields before sending request");
      return;
    }

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const reqBody = {
      bugId: id,
      message,
      proposedAmount,
      estimatedTime,
    };

    const result = await sendProposalAPI(reqBody, reqHeader);

    if (result?.status === 201 || result?.status === 200) {
      toast.success("Fix request sent successfully");
      setRequested(true);
      sessionStorage.setItem(
        `proposal_${id}_${user.email}`,
        "true"
      );
      return;
    }

    if (result?.response?.status === 400) {
      toast.info(result.response.data);
      setRequested(true);
      return;
    }

    if (
      result?.response?.status === 401 ||
      result?.response?.status === 403
    ) {
      toast.warn(result.response.data);
      return;
    }

    toast.error("Failed to send request");
  };


  if (!bug) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading bug details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">
      <div className="max-w-5xl mx-auto mb-6">
        <Link to="/errors" className="text-blue-600 font-medium hover:underline">
          ← Back to Errors
        </Link>
      </div>

      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 border rounded-2xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">{bug.title}</h1>
            <p className="text-sm text-gray-500 mt-1">
              Posted by: <span className="font-medium">{bug.userMail}</span>
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">
            <span className="px-4 py-1 rounded-full text-sm bg-gray-100">
              {bug.category}
            </span>

            <span className="px-4 py-1 rounded-full text-sm bg-purple-100 text-purple-700">
              Status: {bug.status}
            </span>
          </div>
        </div>

        {!requested && (
          <div className="mt-8 space-y-4">
            <textarea
              placeholder="Explain how you will fix this bug"
              className="w-full p-3 border rounded-lg"
              rows={3}
              value={proposalData.message}
              onChange={(e) =>
                setProposalData({ ...proposalData, message: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Proposed Amount (₹)"
              className="w-full p-3 border rounded-lg"
              value={proposalData.proposedAmount}
              onChange={(e) =>
                setProposalData({
                  ...proposalData,
                  proposedAmount: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Estimated Time (e.g. 4 hours)"
              className="w-full p-3 border rounded-lg"
              value={proposalData.estimatedTime}
              onChange={(e) =>
                setProposalData({
                  ...proposalData,
                  estimatedTime: e.target.value,
                })
              }
            />
          </div>
        )}

        <div className="mt-6">
          {!requested ? (
            <button
              onClick={handleRequestFix}
              className="px-6 py-3 rounded-xl text-white font-medium
              bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
            >
              Send Fix Request
            </button>
          ) : (
            <button
              disabled
              className="px-6 py-3 rounded-xl font-medium bg-gray-300 text-gray-700 cursor-not-allowed"
            >
              Request Sent
            </button>
          )}
        </div>

        {bug.UploadedImages?.length > 0 && (
          <div className="mt-10">
            <h2 className="text-lg font-semibold mb-3">
              Uploaded Screenshots
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {bug.UploadedImages.map((img, index) => (
                <img
                  key={index}
                  src={`${serverURL}/uploads/${img}`}
                  alt="bug"
                  className="w-full h-48 object-cover rounded-xl border"
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
