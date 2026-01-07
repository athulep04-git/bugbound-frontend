import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center
                 bg-gradient-to-b from-gray-100 to-white
                 dark:from-gray-900 dark:to-gray-800
                 text-center px-6"
    >
      {/* GIF */}
      <img
        src="https://static.wixstatic.com/media/8b3992_0a73511e2ff84d8fa3cd109284e28645~mv2.gif"
        alt="Page not found"
        className="
          w-56 sm:w-64 md:w-80
          max-h-64 sm:max-h-72 md:max-h-80
          object-contain
          mb-6
          rounded-xl
          shadow-lg
        "
      />

      {/* Message */}
      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-md">
        Oops! The page you’re looking for doesn’t exist or was moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="px-7 py-3 rounded-xl
                   bg-gradient-to-r from-blue-600 to-purple-600
                   text-white font-medium
                   hover:scale-105 transition-transform"
      >
        Go Home
      </Link>
    </div>
  );
}

export default PageNotFound;
