import React, { useEffect, useState } from "react";
import { addBountyAPI } from "../services/allAPIs";
import { useNavigate } from "react-router-dom";

function PostBounty() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  const [bountyDetails, setBountyDetails] = useState({
    title: "",
    category: "Frontend",
    description: "",
    projectUrl: "",
    reward: "",
    rules: "",
    UploadedImages: [],
  });

  const [previewList, setPreviewList] = useState([]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (bountyDetails.UploadedImages.length >= 3) {
      alert("Only 3 images allowed");
      return;
    }
    const imgArray = [...bountyDetails.UploadedImages, file];
    setBountyDetails({ ...bountyDetails, UploadedImages: imgArray });

    const url = URL.createObjectURL(file);
    setPreviewList([...previewList, url]);
  };

  const handleAddBounty = async (e) => {
    e.preventDefault();

    const { title, category, description, projectUrl, reward, UploadedImages } =
      bountyDetails;

    if (!title || !category || !description || !projectUrl || !reward) {
      alert("Please fill all fields");
      return;
    }

    if (UploadedImages.length === 0) {
      alert("Please upload at least 1 image");
      return;
    }

    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const reqBody = new FormData();

      for (let key in bountyDetails) {
        if (key !== "UploadedImages") {
          reqBody.append(key, bountyDetails[key]);
        } else {
          bountyDetails.UploadedImages.forEach((item) => {
            reqBody.append("UploadedImages", item);
          });
        }
      }

      const result = await addBountyAPI(reqBody, reqHeader);

      if (result.status === 200) {
        alert(result.data);

        setBountyDetails({
          title: "",
          category: "Frontend",
          description: "",
          projectUrl: "",
          reward: "",
          rules: "",
          UploadedImages: [],
        });
        setPreviewList([]);

        navigate("/bounties");
      } else {
        alert(result.response.data);
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 md:px-10 py-10">
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Create Bug Bounty
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Publish a project and reward developers for finding bugs.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 border rounded-2xl p-8 shadow">
        <form className="space-y-6" >
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
              Project Title
            </label>
            <input
              type="text"
              placeholder="e.g. MERN E-commerce App"
              value={bountyDetails.title}
              onChange={(e) =>
                setBountyDetails({ ...bountyDetails, title: e.target.value })
              }
              className="w-full p-3 border rounded-lg outline-none
                         focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
              Category
            </label>
            <select
              value={bountyDetails.category}
              onChange={(e) =>
                setBountyDetails({ ...bountyDetails, category: e.target.value })
              }
              className="w-full p-3 border rounded-lg outline-none
                         focus:ring-2 focus:ring-blue-500"
            >
              <option>Frontend</option>
              <option>Backend</option>
              <option>Full Stack</option>
              <option>Security</option>
              <option>Payments</option>
              <option>Deployment</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
              Project Description
            </label>
            <textarea
              rows="4"
              placeholder="Describe the project, scope, and what to test..."
              value={bountyDetails.description}
              onChange={(e) =>
                setBountyDetails({
                  ...bountyDetails,
                  description: e.target.value,
                })
              }
              className="w-full p-3 border rounded-lg outline-none
                         focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
              Project URL / Repository
            </label>
            <input
              type="url"
              placeholder="https://github.com/username/project"
              value={bountyDetails.projectUrl}
              onChange={(e) =>
                setBountyDetails({
                  ...bountyDetails,
                  projectUrl: e.target.value,
                })
              }
              className="w-full p-3 border rounded-lg outline-none
                         focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
              Bounty Amount (₹)
            </label>
            <input
              type="number"
              placeholder="e.g. 1500"
              value={bountyDetails.reward}
              onChange={(e) =>
                setBountyDetails({ ...bountyDetails, reward: e.target.value })
              }
              className="w-full p-3 border rounded-lg outline-none
                         focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
              Rules / Guidelines (optional)
            </label>
            <textarea
              rows="3"
              placeholder="Any rules, limitations, or notes for testers"
              value={bountyDetails.rules}
              onChange={(e) =>
                setBountyDetails({ ...bountyDetails, rules: e.target.value })
              }
              className="w-full p-3 border rounded-lg outline-none
                         focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
              Upload Images (Max 3)
            </label>
            <input
              type="file"
              onChange={handleUpload}
              className="w-full p-3 border rounded-lg outline-none
                         focus:ring-2 focus:ring-blue-500"
            />

            {previewList.length > 0 && (
              <div className="flex gap-3 mt-3 flex-wrap">
                {previewList.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt="preview"
                    className="w-24 h-24 object-cover rounded-lg border"
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate("/bounties")}
              className="px-6 py-3 rounded-xl border text-gray-700
                         hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleAddBounty}
              className="px-8 py-3 rounded-xl
                         bg-gradient-to-r from-blue-600 to-purple-600
                         text-white font-medium
                         hover:opacity-90 hover:scale-105 transition"
            >
              Publish Bounty
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostBounty;
