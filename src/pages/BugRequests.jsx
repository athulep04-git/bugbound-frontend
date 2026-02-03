import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getBugProposalsAPI, acceptProposalAPI } from "../services/allAPIs";
import { toast } from "react-toastify";

function BugRequests() {
  const { bugId } = useParams();
  const navigate = useNavigate();

  const [token, setToken] = useState("");
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  const fetchProposals = async () => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const result = await getBugProposalsAPI(bugId, reqHeader);

    if (result?.status === 200) {
      setProposals(result.data);
      return;
    }

    if (result?.response?.status === 401 || result?.response?.status === 403) {
      toast.warn(result.response.data);
      return;
    }

    toast.error("Failed to load proposals");
  };

  useEffect(() => {
    if (token) {
      fetchProposals();
    }
  }, [token]);

  const handleAccept = async (proposalId) => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const result = await acceptProposalAPI(proposalId, reqHeader);

    if (result?.status === 200) {
      toast.success("Proposal accepted");
      navigate(`/workspace/${bugId}`);
      return;
    }

    if (result?.response?.status === 400) {
      toast.warn(result.response.data);
      return;
    }

    if (result?.response?.status === 401 || result?.response?.status === 403) {
      toast.error(result.response.data);
      return;
    }

    toast.error("Failed to accept proposal");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Debugger Requests
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Choose the best debugger to fix your issue.
          </p>
        </div>

        <Link
          to="/my-errors"
          className="px-5 py-2 rounded-xl border bg-white dark:bg-gray-800"
        >
          ← Back
        </Link>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {proposals.length > 0 ? (
          proposals.map((proposal) => (
            <div
              key={proposal._id}
              className="bg-white dark:bg-gray-800 border rounded-2xl p-6 shadow-sm flex justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                  className="w-14 h-14 rounded-full border"
                  alt="profile"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    {proposal.debuggerMail}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Can fix within {proposal.estimatedTime}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Message: {proposal.message}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold">
                  ₹{proposal.proposedAmount}
                </p>

                {proposal.status === "Pending" ? (
                  <button
                    onClick={() => handleAccept(proposal._id)}
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded-xl"
                  >
                    Select Debugger
                  </button>
                ) : (
                  <span className="mt-4 inline-block px-4 py-2 rounded-xl bg-gray-200">
                    {proposal.status}
                  </span>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No proposals received yet.
          </p>
        )}
      </div>
    </div>
  );
}

export default BugRequests;
