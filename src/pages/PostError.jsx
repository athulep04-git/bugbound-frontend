import React, { useEffect, useState } from "react";
import { addBugAPI } from "../services/allAPIs";
import { useNavigate } from "react-router-dom";

function PostError() {
  const navigate = useNavigate();

  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  const [bugDetails, setBugDetails] = useState({
    title: "",
    description: "",
    priority: "Urgent",
    category: "Frontend",
    fixBudget: "",
    UploadedImages: [],
  });

  //to hold image url
  const [preview, setPreview] = useState("");
  //to hold image list
  const [previewList, setPreviewList] = useState([]);

  const handleUpload = (e) => {
    // max 3 images
    if (bugDetails.UploadedImages.length >= 3) {
      alert("You can upload only 3 images");
      return;
    }
    //file format of uploaded image
    console.log(e.target.files[0]);
    //create a new array to hold file items
    let imgArray = bugDetails.UploadedImages;
    imgArray.push(e.target.files[0]);
    console.log(imgArray);
    //update image file details into state
    setBugDetails({ ...bugDetails, UploadedImages: imgArray });
    //image file to url
    const url = URL.createObjectURL(e.target.files[0]);
    console.log(url);
    setPreview(url);
    //create preview list array
    let imageListArray = previewList;
    imageListArray.push(url);
    console.log(imageListArray);
    setPreviewList(imageListArray);
  };

  const handleAddBug = async () => {
    console.log(bugDetails);
    const {
      title,
      description,
      priority,
      category,
      fixBudget,
      UploadedImages,
    } = bugDetails;

    if (!title || !description || !priority || !category || !fixBudget) {
      alert("Please fill all fields");
      return;
    }
    try {
      //req header
      const reqheader = {
        Authorization: `Bearer ${token}`,
      };
      //req body
      const reqbody = new FormData();
      for (let key in bugDetails) {
        if (key !== "UploadedImages") {
          reqbody.append(key, bugDetails[key]);
        } else {
          bugDetails.UploadedImages.forEach((item) =>
            reqbody.append("UploadedImages", item)
          );
        }
      }
      //api call
      const result = await addBugAPI(reqbody, reqheader);
      console.log(result);
      if (result.status == 200) {
        alert(result.data);
        setBugDetails({
          title: "",
          description: "",
          priority: "Urgent",
          category: "Frontend",
          fixBudget: "",
          UploadedImages: [],
        });
        setPreview("");
        setPreviewList([]);
        navigate("/dashboard");
      } else {
        alert(result.response.data);
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Post a New Error
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Describe your issue and get help from expert debuggers.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm">
        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Error Title
            </label>
            <input
              type="text"
              placeholder="Eg: Login API returning 500 error"
              value={bugDetails.title}
              onChange={(e) =>
                setBugDetails({ ...bugDetails, title: e.target.value })
              }
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Error Description
            </label>
            <textarea
              rows="5"
              placeholder="Explain the problem, steps to reproduce, and expected output..."
              value={bugDetails.description}
              onChange={(e) =>
                setBugDetails({ ...bugDetails, description: e.target.value })
              }
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Upload Screenshots(Max 3)
            </label>

            <div className="flex justify-start gap-4 flex-wrap">
              {preview ? (
                <label htmlFor="imgfile">
                  <input
                    id="imgfile"
                    type="file"
                    hidden
                    onChange={(e) => handleUpload(e)}
                  />
                  <div className="flex flex-col">
                    <div className="flex gap-4 my-2 items-center">
                      <img
                        src={preview}
                        width={"120px"}
                        height={"120px"}
                        alt=""
                        className="rounded-lg border"
                      />

                      {previewList.length < 3 ? (
                        <img
                          src="https://png.pngtree.com/png-vector/20230410/ourmid/pngtree-add-button-vector-png-image_6697932.png"
                          width={"60px"}
                          height={"60px"}
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="flex gap-3 flex-wrap mt-2">
                      {previewList &&
                        previewList.map((item, index) => (
                          <img
                            key={index}
                            src={item}
                            width={"80px"}
                            className="rounded-md border"
                            alt=""
                          />
                        ))}
                    </div>
                  </div>
                </label>
              ) : (
                <label htmlFor="imgfile">
                  <input
                    id="imgfile"
                    type="file"
                    hidden
                    onChange={(e) => handleUpload(e)}
                  />
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/round-vol-4/512/uploading-512.png"
                    width={"150px"}
                    alt=""
                  />
                </label>
              )}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Priority
              </label>
              <select
                value={bugDetails.priority}
                onChange={(e) =>
                  setBugDetails({ ...bugDetails, priority: e.target.value })
                }
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
              >
                <option>Urgent</option>
                <option>Normal</option>
                <option>Low</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Category
              </label>
              <select
                value={bugDetails.category}
                onChange={(e) =>
                  setBugDetails({ ...bugDetails, category: e.target.value })
                }
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
              >
                <option>Frontend</option>
                <option>Backend</option>
                <option>Database</option>
                <option>Deployment</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Fix Budget (₹)
              </label>
              <input
                type="number"
                placeholder="500"
                value={bugDetails.fixBudget}
                onChange={(e) =>
                  setBugDetails({ ...bugDetails, fixBudget: e.target.value })
                }
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddBug}
            className="w-full mt-6 py-3 rounded-xl text-white 
            bg-gradient-to-r from-blue-600 to-purple-600 
            hover:opacity-90 transition font-medium"
          >
            Submit Error
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostError;
