import React, { useState } from "react";
import { loginUserAPI } from "../services/allAPIs";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
function LoginPage({ setIsLoggedIn }) {
  const navigate = useNavigate();

//create a state to hold user data
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    const { email, password } = userData;
    if (!email || !password) {
      alert("Please fill all the fields");
    } else {
      //call login user api
      try {
        const response = await loginUserAPI({ email, password });
        console.log(response);

        if (response.status === 200) {
          // store token
          sessionStorage.setItem("token", response.data.token);
           if (response.data.activeUser.role === "Admin") {
            setTimeout(() => {
              navigate("/admin");
            }, 2500);
          } else {
            setTimeout(() => {
              navigate("/dashboard");
            }, 2500);
          }
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
        setIsLoggedIn(true);    
        } else {
          toast.warn(response.response.data, {
            position: "top-center",
            autoClose: 5000,
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

   const handleGoogleLogin= async (credentialResponse) =>{
    const decode=jwtDecode(credentialResponse.credential)
    console.log(decode);
   }
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

      <div className="relative w-full max-w-md p-8 bg-white/95 shadow-2xl
                      border border-gray-200 rounded-2xl">

        <h2 className="text-3xl font-bold text-center mb-6
                       bg-gradient-to-r from-blue-600 to-purple-600
                       text-transparent bg-clip-text">
          Login
        </h2>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            className="w-full p-3 rounded-lg border border-gray-300
                       outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            className="w-full p-3 rounded-lg border border-gray-300
                       outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="button"
            onClick={handleLogin}
            className="w-full py-3 rounded-lg text-white
                       bg-gradient-to-r from-blue-600 to-purple-600
                       hover:opacity-90 transition font-medium"
          >
            Login
          </button>
            <GoogleLogin
    onSuccess={credentialResponse => {
      console.log(credentialResponse);
      handleGoogleLogin(credentialResponse)
    }}
    onError={() => {
      console.log('Login Failed');
    }}
  />
        </form>
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

export default LoginPage;
