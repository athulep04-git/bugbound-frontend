import React, { useState } from "react";
import { Tabs, TabItem, Card } from "flowbite-react";
import { HiUserCircle, HiClipboardList, HiStar } from "react-icons/hi";
import EditProfile from "../components/EditProfile";

function Profile() {
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

      {/* PROFILE HEADER */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 h-60">

        {/* EDIT BUTTON */}
        <div className="absolute top-6 right-6 z-10">
          <button
            onClick={() => setOpenEdit(true)}
            className="px-5 py-2 bg-white text-gray-900 rounded-full shadow hover:shadow-md transition"
          >
            Edit Profile
          </button>
        </div>

        {/* PROFILE IMAGE */}
        <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2">
          <img
            src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-xl"
          />
        </div>
      </div>

      {/* USER INFO */}
      <div className="mt-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Athul
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          MERN Stack Developer · Debugger
        </p>
      </div>

      {/* STATS */}
      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
        <Card className="text-center">
          <h3 className="text-2xl font-bold">42</h3>
          <p className="text-gray-500">Errors Fixed</p>
        </Card>
        <Card className="text-center">
          <h3 className="text-2xl font-bold">4.8 ⭐</h3>
          <p className="text-gray-500">Rating</p>
        </Card>
        <Card className="text-center">
          <h3 className="text-2xl font-bold">₹18,500</h3>
          <p className="text-gray-500">Earnings</p>
        </Card>
      </div>

      {/* TABS */}
      <div className="max-w-5xl mx-auto mt-12 px-6 pb-16">
        <Tabs aria-label="Profile Tabs" variant="fullWidth">

          <TabItem title="About" icon={HiUserCircle}>
            <Card>
              <p className="text-gray-700 dark:text-gray-300">
                I specialize in fixing backend issues, authentication bugs,
                and performance problems.
              </p>
            </Card>
          </TabItem>

          <TabItem title="My Errors" icon={HiClipboardList}>
            <Card>
              <h3 className="font-semibold mb-2">Login API Error</h3>
              <p className="text-sm text-gray-600">
                Status: Open · Budget: ₹800
              </p>
            </Card>
          </TabItem>

          <TabItem title="Reviews" icon={HiStar}>
            <Card>
              <p className="font-medium">Rahul Dev ⭐⭐⭐⭐⭐</p>
              <p className="text-sm text-gray-600">
                “Explained the fix very clearly and solved it fast.”
              </p>
            </Card>
          </TabItem>

        </Tabs>
      </div>

      {/* EDIT PROFILE MODAL */}
      <EditProfile open={openEdit} onClose={() => setOpenEdit(false)} />

    </div>
  );
}

export default Profile;
