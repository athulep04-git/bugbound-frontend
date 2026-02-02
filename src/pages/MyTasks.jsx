import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyTasksAPI } from "../services/allAPIs";

function MyTasks() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  const fetchTasks = async () => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await getMyTasksAPI(reqHeader);

      if (result.status === 200) {
        setTasks(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) fetchTasks();
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          My Tasks
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Bugs you are currently working on
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {tasks.length > 0 ? (
          tasks.map((bug) => (
            <div
              key={bug._id}
              onClick={() => navigate(`/workspace/${bug._id}`)}
              className="cursor-pointer bg-white dark:bg-gray-800 border rounded-xl p-6
                         flex justify-between items-center
                         hover:shadow-xl hover:scale-[1.01] transition"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {bug.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {bug.category} • ₹{bug.fixBudget}
                </p>

                <div className="flex gap-3 mt-3 text-xs">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600">
                    Debugger
                  </span>

                  <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                    {bug.status || "In Progress"}
                  </span>
                </div>
              </div>

              <div className="text-blue-600 font-medium">
                Open Workspace →
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">
            No active tasks yet.
          </p>
        )}
      </div>
    </div>
  );
}

export default MyTasks;
