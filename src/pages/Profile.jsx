import React, { useEffect, useState } from "react";
import { Tabs, TabItem, Card } from "flowbite-react";
import { HiUserCircle, HiClipboardList, HiStar } from "react-icons/hi";
import EditProfile from "../components/EditProfile";
import { getUserProfileAPI, getMyBugsAPI } from "../services/allAPIs";

function Profile() {
  const [openEdit, setOpenEdit] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [myBugs, setMyBugs] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("userDetails")));
    setToken(sessionStorage.getItem("token"));
  }, []);

  const getProfileImage = (profile) => {
    if (!profile) {
      return "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";
    }

    if (profile.startsWith("http")) {
      return profile;
    }

    return `http://localhost:3000/uploads/${profile}`;
  };

  const getProfile = async () => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      const [profileResult, bugsResult] = await Promise.all([
        getUserProfileAPI(reqHeader),
        getMyBugsAPI(reqHeader),
      ]);

      if (profileResult.status === 200) {
        setUser(profileResult.data);
      }

      if (bugsResult.status === 200) {
        setMyBugs(bugsResult.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (token) {
      getProfile();
    }

    const handleProfileUpdate = () => {
      getProfile();
    };

    window.addEventListener("authChanged", handleProfileUpdate);

    return () => {
      window.removeEventListener("authChanged", handleProfileUpdate);
    };
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 h-60">
        <div className="absolute top-6 right-6 z-10">
          <button
            onClick={() => setOpenEdit(true)}
            className="px-5 py-2 bg-white text-gray-900 rounded-full shadow hover:shadow-md transition"
          >
            Edit Profile
          </button>
        </div>

        <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2">
          <img
            src={getProfileImage(user?.profile)}
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="mt-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {user.username}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">{user.title}</p>
      </div>

      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
        <Card className="text-center">
          <h3 className="text-2xl font-bold">{user.totalFixes}</h3>
          <p className="text-gray-500">Errors Fixed</p>
        </Card>
        <Card className="text-center">
          <h3 className="text-2xl font-bold">
            {(user.rating || 0).toFixed(1)} ⭐
          </h3>
          <p className="text-gray-500">Rating</p>
        </Card>
        <Card className="text-center">
          <h3 className="text-2xl font-bold"> {user.points || 0}</h3>
          <p className="text-gray-500">Points</p>
        </Card>
      </div>

      <div className="max-w-5xl mx-auto mt-12 px-6 pb-16">
        <Tabs aria-label="Profile Tabs" variant="fullWidth">
          <TabItem title="About" icon={HiUserCircle}>
            <Card>
              <p className="text-gray-700 dark:text-gray-300">
                {user.bio || "No bio added yet"}
              </p>
            </Card>
          </TabItem>

          <TabItem title="My Errors" icon={HiClipboardList}>
            <Card>
              {myBugs.length === 0 ? (
                <p className="text-gray-500">No bugs posted yet</p>
              ) : (
                myBugs.map((bug) => (
                  <div key={bug._id} className="border-b py-3 last:border-b-0">
                    <h3 className="font-semibold">{bug.title}</h3>

                    <p className="text-sm text-gray-600">
                      Status: {bug.status} · Budget: ₹{bug.fixBudget}
                    </p>
                  </div>
                ))
              )}
            </Card>
          </TabItem>

          <TabItem title="Reviews" icon={HiStar}>
            <Card>
              <div className="text-center">
                <h3 className="text-3xl font-bold">
                  {(user.rating || 0).toFixed(1)} ⭐
                </h3>

                <p className="text-gray-600 mt-2">
                  Based on {user.totalRatings || 0} ratings
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {user.totalFixes || 0} fixes completed
                </p>
              </div>
            </Card>
          </TabItem>
        </Tabs>
      </div>

      <EditProfile open={openEdit} onClose={() => setOpenEdit(false)} />
    </div>
  );
}

export default Profile;
