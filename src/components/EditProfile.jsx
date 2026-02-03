import React, { useEffect, useState } from "react";
import { Modal, Button, TextInput, Textarea } from "flowbite-react";
import { updateProfileAPI } from "../services/allAPIs";
import { toast } from "react-toastify";
import { serverURL } from "../services/serverURL";


function EditProfile({ open, onClose }) {
  const [token, setToken] = useState("");
  const [preview, setPreview] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [initialData, setInitialData] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    title: "",
    location: "",
    github: "",
    linkedin: "",
    skills: "",
    bio: "",
    password: "",
  });
  useEffect(() => {
    if (!open) return;

    const storedUser = JSON.parse(sessionStorage.getItem("userDetails"));
    const storedToken = sessionStorage.getItem("token");

    if (storedUser) {
      const data = {
        username: storedUser.username || "",
        email: storedUser.email || "",
        title: storedUser.title || "",
        location: storedUser.location || "",
        github: storedUser.github || "",
        linkedin: storedUser.linkedin || "",
        skills: storedUser.skills || "",
        bio: storedUser.bio || "",
        password: "",
      };

      setFormData(data);
      setInitialData(data);
      if (storedUser.profile) {
        if (storedUser.profile.startsWith("http")) {
          setPreview(storedUser.profile); // Google image
        } else {
          setPreview(`${serverURL}/uploads/${storedUser.profile}`); // Uploaded image
        }
      } else {
        setPreview("");
      }
    }

    setProfilePic(null);
    setToken(storedToken);
  }, [open]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleCancel = () => {
    setFormData(initialData);
    setProfilePic(null);

    const storedUser = JSON.parse(sessionStorage.getItem("userDetails"));
    if (storedUser?.profile) {
      if (storedUser.profile.startsWith("http")) {
        setPreview(storedUser.profile);
      } else {
        setPreview(`${serverURL}/uploads/${storedUser.profile}`);
      }
    } else {
      setPreview("");
    }

    onClose();
  };

  const handleUpdate = async () => {
    try {
      const reqBody = new FormData();

      Object.keys(formData).forEach((key) => {
        if (formData[key]) reqBody.append(key, formData[key]);
      });

      if (profilePic) {
        reqBody.append("profile", profilePic);
      }

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await updateProfileAPI(reqBody, reqHeader);

      if (result.status === 200) {
        sessionStorage.setItem("userDetails", JSON.stringify(result.data));
        window.dispatchEvent(new Event("authChanged"));

        toast.success("Profile updated successfully");
        onClose();
      }
    } catch (err) {
      toast.error("Profile update failed");
      console.log(err);
    }
  };

  return (
    <Modal show={open} onClose={handleCancel} size="xl">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>

        <div className="flex items-center gap-6 mb-6">
          <img
            src={
              preview ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            }
            alt="profile"
            className="w-24 h-24 rounded-full border object-cover"
          />

          <label className="cursor-pointer px-4 py-2 bg-gray-100 rounded-lg text-sm">
            Change Photo
            <input type="file" hidden onChange={handleImageChange} />
          </label>
        </div>

  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Full Name"
          />

          <TextInput name="email" value={formData.email} disabled />

          <TextInput
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Role / Title"
          />

          <TextInput
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
          />

          <TextInput
            name="github"
            value={formData.github}
            onChange={handleChange}
            placeholder="GitHub URL"
          />

          <TextInput
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn URL"
          />

          <TextInput
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Skills"
          />

          <TextInput
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="New Password (optional)"
          />
        </div>

        <div className="mt-4">
          <Textarea
            rows={3}
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Short bio"
          />
        </div>
        <div className="mt-8 flex justify-end gap-3">
          <Button color="gray" onClick={handleCancel}>
            Cancel
          </Button>

          <Button
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={handleUpdate}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default EditProfile;
