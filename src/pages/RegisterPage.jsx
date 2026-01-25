import React, { useState } from "react";
import { registerUserAPI } from "../services/allAPIs";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterPage() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async () => {
    const { username, email, password } = userData;

    if (!username || !email || !password) {
      toast.warn("Please fill all the fields", {
        position: "top-center",
        autoClose: 2500,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    try {
      setLoading(true);

      const response = await registerUserAPI(userData);

      if (response.status === 200 || response.status === 201) {
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 2500,
          theme: "colored",
          transition: Bounce,
        });

        setUserData({
          username: "",
          email: "",
          password: "",
        });

        setTimeout(() => {
          navigate("/login");
        }, 2500);
      }
    } catch (err) {
      toast.warn(err?.response?.data || "Registration failed", {
        position: "top-center",
        autoClose: 2500,
        theme: "colored",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4
                 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://64.media.tumblr.com/a7d100aabe2033b2fff1b7d5bf6af05f/tumblr_nlprx4nuGI1relaado1_400.gifv')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative w-full max-w-md p-8 bg-white/95 shadow-2xl border border-gray-200 rounded-2xl">
        <h2
          className="text-3xl font-bold text-center mb-6
                     bg-gradient-to-r from-blue-600 to-purple-600
                     text-transparent bg-clip-text"
        >
          Create Account
        </h2>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
            className="w-full p-3 rounded-lg border border-gray-300"
          />

          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            className="w-full p-3 rounded-lg border border-gray-300"
          />

          <input
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            className="w-full p-3 rounded-lg border border-gray-300"
          />

          <button
            type="button"
            disabled={loading}
            onClick={handleRegister}
            className="w-full py-3 rounded-lg text-white
                       bg-gradient-to-r from-blue-600 to-purple-600
                       hover:opacity-90 transition font-medium disabled:opacity-60"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center mt-5 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
}

export default RegisterPage;
