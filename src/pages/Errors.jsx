import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBugsAPI } from "../services/allAPIs";
import { serverURL } from "../services/serverURL";

function Errors() {
  const [token, setToken] = useState("");
  const [allBugs, setAllBugs] = useState([]);
  const [tempBugs, setTempBugs] = useState([]);
  // search state
  const [searchKey, setSearchKey] = useState("");
  const [category, setCategory] = useState("No-filter");
  const [priority, setPriority] = useState("All");
  const [sort, setSort] = useState("None");
  const [showAll, setShowAll] =useState(false);
  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);
  // 1 function for api call
  const getAllBugs = async () => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      const response = await getAllBugsAPI(reqHeader);
      console.log(response);
      setAllBugs(response.data);
      setTempBugs(response.data);
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    if (token) {
      getAllBugs();
    }
  }, [token]);
  
  useEffect(() => {
  let filtered = tempBugs;
  // search
  if (searchKey !== "") {
    filtered = filtered.filter((item) =>item.title.toLowerCase().includes(searchKey.toLowerCase()) ||item.description.toLowerCase().includes(searchKey.toLowerCase()));
  }
  // category
  if (category !== "No-filter") {
    filtered = filtered.filter((item) => item.category === category);
  }
  // priority
  if (priority !== "All") {
    filtered = filtered.filter((item) => item.priority === priority);
  }
  // hide completed by default
if (!showAll) {
  filtered = filtered.filter((item) =>item.status == "Open");
}
  // sort
if (sort === "Newest") {
  filtered = [...filtered].sort((a, b) =>new Date(b.createdAt) -new Date(a.createdAt));
}
if (sort === "High") {
  filtered = [...filtered].sort((a, b) =>b.fixBudget - a.fixBudget);
}
if (sort === "Low") {
  filtered = [...filtered].sort((a, b) =>a.fixBudget - b.fixBudget);
}
  setAllBugs(filtered);
}, [searchKey, category, priority,sort, tempBugs,showAll]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">
      {token ? (
        <>
          <div className="max-w-7xl mx-auto mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Browse Errors
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Find issues you can fix and earn rewards.
              </p>
            </div>

            <Link
              to="/post-error"
              className="inline-flex items-center justify-center
                     px-6 py-3 rounded-xl
                     bg-gradient-to-r from-blue-600 to-purple-600
                     text-white font-medium
                     hover:opacity-90 hover:scale-105
                     transition"
            >
              + Add Error
            </Link>
          </div>

          <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Search errors..."
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select
                className="p-3 border rounded-lg"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="No-filter">All Categories</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Database">Database</option>
                <option value="Authentication">Authentication</option>
                <option value="Deployment">Deployment</option>
              </select>

              <select className="p-3 border rounded-lg"
               onChange={(e) => setPriority(e.target.value)}>
                <option value="All">All Priorities</option>
                <option value="Urgent">Urgent</option>
                <option value="Normal">Normal</option>
                <option value="Low">Low</option>
              </select>

              <select className="p-3 border rounded-lg"
              onChange={(e) => setSort(e.target.value)}>
                <option>Sort By</option>
                <option value="Newest">Newest</option>
                <option value="High">Budget: High → Low</option>
                <option value="Low">Budget: Low → High</option>
              </select>
              <div className="flex items-center gap-2">
              <input type="checkbox"checked={showAll}onChange={(e) =>setShowAll(e.target.checked)}/>
              <label>Include Closed / Ongoing</label>
          </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allBugs && allBugs.length > 0 ? (
              allBugs.map((bug) => (
                <Link
                  key={bug._id}
                  to={`/errors/${bug._id}`}
                  className="block bg-white dark:bg-gray-800 border rounded-xl p-0 shadow-sm hover:shadow-lg hover:-translate-y-1 transition overflow-hidden"
                >
                  <img
                    src={
                      bug?.UploadedImages?.length > 0
                        ? `${serverURL}/uploads/${bug.UploadedImages[0]}`
                        : "https://dummyimage.com/400x250/e5e7eb/6b7280&text=No+Image"
                    }
                    alt="bug"
                    className="w-full h-44 object-cover"
                  />

                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-1">{bug.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{bug.category}</p>

                    <div className="flex justify-between">
                      <span
                        className={`px-3 py-1 text-sm rounded-full ${
                          bug.priority === "Urgent"
                            ? "bg-red-100 text-red-600"
                            : bug.priority === "Normal"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {bug.priority}
                      </span>
                      <span className="font-semibold">₹{bug.fixBudget}</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-400">
                No errors posted yet.
              </p>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20">
          <h1 className="text-center text-3xl mb-6 text-gray-900 dark:text-white">
            Please login to view errors
          </h1>

          <img
            src="https://i.pinimg.com/originals/23/27/58/232758911e209e24258fed0dcb095398.gif"
            alt="Login required"
            className="w-64 h-64 object-contain"
          />
        </div>
      )}
    </div>
  );
}

export default Errors;
