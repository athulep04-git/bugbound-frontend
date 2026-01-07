import React, { useEffect, useState } from "react";

function FixWorkspace() {
  const messages = [
    { sender: "client", text: "Hi, any update on the bug?" },
    { sender: "debugger", text: "Yes, I identified the issue. Working on fix." },
  ];

  const [timeLeft, setTimeLeft] = useState(1 * 1 * 10);
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">
      <div className="max-w-6xl mx-auto mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Fix Workspace
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track progress and communicate with the client
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border rounded-xl px-5 py-3 text-center shadow">
          <p className="text-sm text-gray-500">Time Remaining</p>
          <p className="text-lg font-bold text-red-600">
            {timeLeft > 0 ? formatTime(timeLeft) : "Time Over"}
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 border rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Login API returns 500 error
        </h2>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
          <span> Backend</span>
          <span> ₹800</span>
          <span> In Progress</span>
          <span> Posted by: Athul</span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 border rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Progress</h3>

        <div className="flex items-center justify-between text-sm">
          <div className="flex-1 text-center">
            <div className="w-8 h-8 mx-auto rounded-full bg-green-600 text-white flex items-center justify-center">
              ✓
            </div>
            <p className="mt-2">Assigned</p>
          </div>

          <div className="flex-1 text-center">
            <div className="w-8 h-8 mx-auto rounded-full bg-green-600 text-white flex items-center justify-center">
              ✓
            </div>
            <p className="mt-2">Analyzing</p>
          </div>

          <div className="flex-1 text-center">
            <div className="w-8 h-8 mx-auto rounded-full bg-yellow-500 text-white flex items-center justify-center">
              ⏳
            </div>
            <p className="mt-2">Fixing</p>
          </div>

          <div className="flex-1 text-center">
            <div className="w-8 h-8 mx-auto rounded-full bg-gray-300 text-gray-700 flex items-center justify-center">
              ⏸
            </div>
            <p className="mt-2">Completed</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        <div className="md:col-span-2 bg-white dark:bg-gray-800 border rounded-xl p-6 flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Discussion</h3>
          <div className="flex-1 overflow-y-auto space-y-3 mb-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-xs p-3 rounded-lg text-sm ${
                  msg.sender === "debugger"
                    ? "bg-blue-600 text-white ml-auto"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

      
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-3 border rounded-lg"
            />

            <button
              type="button"
              className="px-5 py-3 bg-gray-400 text-white rounded-lg"
            >
              Send
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            * Messaging will be enabled after debugger selection
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Actions</h3>

          <button className="w-full mb-3 px-4 py-2 bg-yellow-500 text-white rounded-lg">
            Mark as Fixed
          </button>

          <button className="w-full mb-3 px-4 py-2 bg-green-600 text-white rounded-lg">
            Approve & Release Payment
          </button>

          <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg">
            Close Issue
          </button>

          <p className="text-xs text-gray-500 mt-4">
            * Payment is released only after approval
          </p>
        </div>

      </div>
    </div>
  );
}

export default FixWorkspace;
