import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFixWorkspaceAPI } from "../services/allAPIs";

function FixWorkspace() {
  const { bugId } = useParams();
  const [token, setToken] = useState("");
  const [workspace, setWorkspace] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);
  const fetchWorkspace = async () => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      const result = await getFixWorkspaceAPI(bugId, reqHeader);
      if (result.status === 200) {
        setWorkspace(result.data);
        const seconds = Number(result.data.estimatedTime) * 3600;
        setTimeLeft(seconds);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) fetchWorkspace();
  }, [token]);
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  if (!workspace) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading workspace...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">
      <div className="max-w-6xl mx-auto mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Fix Workspace
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track progress of the assigned fix
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border rounded-xl px-5 py-3 text-center shadow">
          <p className="text-sm text-gray-500">Time Remaining</p>
          <p className="text-lg font-bold text-red-600">
            {timeLeft > 0 ? formatTime(timeLeft) : "Time Over"}
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 border rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">
          {workspace.title}
        </h2>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
          <span> {workspace.category}</span>
          <span> ₹{workspace.fixBudget}</span>
          <span> {workspace.status}</span>
          <span> Posted by: {workspace.userMail}</span>
          <span> Assigned to: {workspace.assignedTo}</span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 border rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Progress</h3>

        <div className="flex items-center justify-between text-sm">
          {["Assigned", "Analyzing", "Fixing", "Completed"].map((step, i) => (
            <div key={i} className="flex-1 text-center">
              <div
                className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
                  i < 2
                    ? "bg-green-600 text-white"
                    : i === 2
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {i < 2 ? "✓" : i === 2 ? "⏳" : "⏸"}
              </div>
              <p className="mt-2">{step}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white dark:bg-gray-800 border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Discussion</h3>

          <div className="text-sm text-gray-500">
           
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Actions</h3>

          <button className="w-full mb-3 px-4 py-2 bg-yellow-500 text-white rounded-lg">
            Mark as Fixed
          </button>

          <button className="w-full mb-3 px-4 py-2 bg-green-600 text-white rounded-lg">
            Approve & Release Payment
          </button>

          <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg">
            Close Issue
          </button>

          <p className="text-xs text-gray-500 mt-4">
            * Payment is released only after approval
          </p>
        </div>

      </div>
    </div>
  );
}

export default FixWorkspace;
