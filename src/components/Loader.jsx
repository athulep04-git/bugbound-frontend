import React from "react";
import loaderGif from "../assets/loader.gif";

function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center gap-6">
        <img
          src={loaderGif}
          alt="Loading"
          className="w-40 h-40 sm:w-44 sm:h-44"
        />
        <p className="text-gray-600 dark:text-gray-400 font-medium text-lg">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default Loader;
