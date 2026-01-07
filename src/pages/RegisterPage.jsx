import React, { useState } from "react";
import { registerUserAPI } from "../services/allAPIs";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterPage() {
  //create a state to hold user data
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!userData.username || !userData.email || !userData.password) {
      toast.warn("Please fill all the fields", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      //call register user api
      try {
        const response = await registerUserAPI(userData);
        console.log(response);

        if (response.status === 200 || response.status === 201) {
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Bounce,
          });

          setTimeout(() => {
            navigate("/login");
          }, 2500);
        } else {
          toast.warn(response.response.data, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Bounce,
          });
        }
      } catch (err) {
        console.log(err);
      }
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
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
            className="w-full p-3 rounded-lg border border-gray-300"
          />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            className="w-full p-3 rounded-lg border border-gray-300"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            className="w-full p-3 rounded-lg border border-gray-300"
          />

          <button
            type="button"
            onClick={handleRegister}
            className="w-full py-3 rounded-lg text-white
                       bg-gradient-to-r from-blue-600 to-purple-600
                       hover:opacity-90 transition font-medium"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-5 text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </a>
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
