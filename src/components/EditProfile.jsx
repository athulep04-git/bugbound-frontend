import React from "react";
import { Modal, Button, TextInput, Textarea } from "flowbite-react";

function EditProfile({ open, onClose }) {
  return (
    <Modal show={open} onClose={onClose} size="xl">
      <div className="p-6">

        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Edit Profile
        </h2>

        <div className="flex items-center gap-6 mb-6">
          <img
            src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
            alt="Profile"
            className="w-24 h-24 rounded-full border"
          />

          <label className="cursor-pointer px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200">
            Change Photo
            <input type="file" hidden />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <TextInput placeholder="Full Name" />
          <TextInput placeholder="Email Address" />

          <TextInput placeholder="Role / Title (eg: MERN Developer)" />
          <TextInput placeholder="Location (City, Country)" />

          <TextInput placeholder="GitHub Profile URL" />
          <TextInput placeholder="LinkedIn Profile URL" />

          <TextInput placeholder="Skills (React, Node, MongoDB)" />

          <TextInput
            type="password"
            placeholder="New Password (optional)"
          />

        </div>

        <div className="mt-4">
          <Textarea
            rows={3}
            placeholder="Short bio about yourself"
          />
        </div>

        <div className="mt-8 flex justify-end gap-3">

          <Button
            color="gray"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={onClose}
          >
            Save Changes
          </Button>

        </div>

      </div>
    </Modal>
  );
}

export default EditProfile;
