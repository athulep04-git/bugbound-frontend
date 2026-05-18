import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBug,
  FaTools,
  FaCheckCircle,
  FaTrophy,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import {
  getMyBugsAPI,
  getUserProfileAPI,
  getBugProposalsAPI,
} from "../services/allAPIs";

function Dashboard() {
  const [token, setToken] = useState("");
  const [myBugs, setMyBugs] = useState([]);
  const [completedFixes, setCompletedFixes] = useState(0);
  const [activeFixes, setActiveFixes] = useState(0);
  const [points, setPoints] = useState(0);
  const [requestCount, setRequestCount] = useState(0);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    setToken(storedToken);
  }, []);
  useEffect(() => {
    if (!token) return;
    const fetchDashboardData = async () => {
      try {
        const reqHeader = {
          Authorization: `Bearer ${token}`,
        };
        const [bugsResult, userResult] = await Promise.all([
          getMyBugsAPI(reqHeader),
          getUserProfileAPI(reqHeader),
        ]);
        if (bugsResult.status === 200) {
          const bugs = bugsResult.data;
          setMyBugs(bugs);
          const completed = bugs.filter(
            (bug) => bug.status === "Completed",).length;
          const active = bugs.filter(
            (bug) => bug.status === "In Progress" || bug.status === "Fixed",).length;
          setCompletedFixes(completed);
          setActiveFixes(active);
          let totalRequests = 0;
          for (const bug of bugs) {
            if (bug.status !== "Open") continue;
            const proposalResult = await getBugProposalsAPI(bug._id, reqHeader);
            if (proposalResult?.status === 200) {
              totalRequests += proposalResult.data.filter(
                (proposal) => proposal.status === "Pending",
              ).length;
            }
          }
          setRequestCount(totalRequests);
        }
        if (userResult.status === 200) {
          setPoints(userResult.data.points);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchDashboardData();
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Overview of your BugBound Hub activity
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
        <Link
          to="/my-errors"
          className="flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-gray-800 border hover:shadow-lg transition"
        >
          <div className="p-3 bg-blue-600 text-white rounded-lg text-xl">
            <FaBug />
          </div>

          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Posted Errors
            </p>

            <p className="text-2xl font-bold">{myBugs.length}</p>
          </div>
        </Link>

        <Link
          to={
            myBugs.length > 0 ? `/bug-requests/${myBugs[0]._id}` : "/my-errors"
          }
          className="flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-gray-800 border hover:shadow-lg transition"
        >
          <div className="p-3 bg-purple-600 text-white rounded-lg text-xl">
            <FaEnvelopeOpenText />
          </div>

          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Requests</p>

            <p className="text-2xl font-bold">{requestCount}</p>
          </div>
        </Link>

        <Link
          to="/mytasks"
          className="flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-gray-800 border hover:shadow-lg transition"
        >
          <div className="p-3 bg-yellow-500 text-white rounded-lg text-xl">
            <FaTools />
          </div>

          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Active Fixes
            </p>

            <p className="text-2xl font-bold">{activeFixes}</p>
          </div>
        </Link>

        <Link
          to="/completed"
          className="flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-gray-800 border hover:shadow-lg transition"
        >
          <div className="p-3 bg-green-600 text-white rounded-lg text-xl">
            <FaCheckCircle />
          </div>

          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Completed Fixes
            </p>

            <p className="text-2xl font-bold">{completedFixes}</p>
          </div>
        </Link>

        <Link
          to="/profile"
          className="flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-gray-800 border hover:shadow-lg transition"
        >
          <div className="p-3 bg-pink-600 text-white rounded-lg text-xl">
            <FaTrophy />
          </div>

          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Points Earned
            </p>

            <p className="text-2xl font-bold">{points}</p>
          </div>
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 border rounded-xl p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

        {myBugs.length === 0 ? (
          <p className="text-gray-500">No activity yet</p>
        ) : (
          myBugs.slice(0, 2).map((bug) => (
            <div
              key={bug._id}
              className="flex justify-between items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900 mb-3"
            >
              <div>
                <p className="font-medium">{bug.title}</p>

                <p className="text-sm text-gray-500">Status: {bug.status}</p>
              </div>

              <p className="font-semibold">₹{bug.fixBudget}</p>
            </div>
          ))
        )}
      </div>

      <div className="grid sm:grid-cols-4 gap-6">
        <Link
          to="/post-error"
          className="p-6 bg-white dark:bg-gray-800 border rounded-xl hover:shadow-lg transition"
        >
          <h3 className="font-semibold mb-1">Post New Error</h3>

          <p className="text-sm text-gray-600">Submit a new issue</p>
        </Link>

        <Link
          to="/my-errors"
          className="p-6 bg-white dark:bg-gray-800 border rounded-xl hover:shadow-lg transition"
        >
          <h3 className="font-semibold mb-1">My Errors</h3>

          <p className="text-sm text-gray-600">View proposals & manage</p>
        </Link>

        <Link
          to="/errors"
          className="p-6 bg-white dark:bg-gray-800 border rounded-xl hover:shadow-lg transition"
        >
          <h3 className="font-semibold mb-1">Browse Errors</h3>

          <p className="text-sm text-gray-600">Fix bugs & earn points</p>
        </Link>

        <Link
          to="/leaderboard"
          className="p-6 bg-white dark:bg-gray-800 border rounded-xl hover:shadow-lg transition"
        >
          <h3 className="font-semibold mb-1">Leaderboard</h3>

          <p className="text-sm text-gray-600">Top debuggers</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
