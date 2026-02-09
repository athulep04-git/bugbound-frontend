import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  getFixWorkspaceAPI,
  markBugFixedAPI,
  approveBugAPI,
  submitRatingAPI,
} from "../services/allAPIs";
import { toast } from "react-toastify";
import RatingModal from "../components/RatingModal";
import { io } from "socket.io-client";

function FixWorkspace() {
  const { bugId } = useParams();

  const [token, setToken] = useState("");
  const [workspace, setWorkspace] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isDebugger, setIsDebugger] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [showRating, setShowRating] = useState(false);

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socketRef = useRef(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    const storedUser = JSON.parse(sessionStorage.getItem("userDetails"));
    setToken(storedToken);

    if (storedUser && workspace) {
      setIsDebugger(storedUser.email === workspace.assignedTo);
      setIsOwner(storedUser.email === workspace.userMail);
    }
  }, [workspace]);

  const fetchWorkspace = async () => {
    const reqHeader = { Authorization: `Bearer ${token}` };
    const result = await getFixWorkspaceAPI(bugId, reqHeader);

    if (result.status === 200) {
      setWorkspace(result.data);
      const hours = parseInt(result.data.estimatedTime);
      if (!isNaN(hours)) setTimeLeft(hours * 3600);
    }
  };

  useEffect(() => {
    if (token) fetchWorkspace();
  }, [token]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    socketRef.current = io("http://localhost:3000");
    socketRef.current.emit("joinRoom", { bugId });

    socketRef.current.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socketRef.current.disconnect();
  }, [bugId]);

  const sendMessage = () => {
    if (!message.trim()) return;
    const user = JSON.parse(sessionStorage.getItem("userDetails"));
    socketRef.current.emit("sendMessage", {
      bugId,
      sender: user.email,
      text: message,
    });
    setMessage("");
  };

  const handleMarkFixed = async () => {
    const reqHeader = { Authorization: `Bearer ${token}` };
    const result = await markBugFixedAPI(bugId, reqHeader);
    if (result.status === 200) {
      toast.success("Bug marked as fixed");
      fetchWorkspace();
    }
  };

  const handleApprove = async () => {
    const reqHeader = { Authorization: `Bearer ${token}` };
    const result = await approveBugAPI(bugId, reqHeader);
    if (result.status === 200) {
      toast.success("Bug completed successfully");
      fetchWorkspace();
    }
  };

  const getStepIndex = () => {
    if (workspace.status === "Open") return 1;
    if (workspace.status === "In Progress") return 2;
    if (workspace.status === "Fixed") return 3;
    if (workspace.status === "Completed") return 4;
    return 0;
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  if (!workspace) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading workspace...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">
      {workspace.status === "Fixed" && isOwner && (
        <div className="max-w-6xl mx-auto mb-6 p-4 rounded-xl bg-yellow-100 text-yellow-800 border">
          Debugger marked this bug as fixed. Please review and approve.
        </div>
      )}

      {workspace.status === "Fixed" && isDebugger && (
        <div className="max-w-6xl mx-auto mb-6 p-4 rounded-xl bg-blue-100 text-blue-800 border">
          Waiting for bug owner approval.
        </div>
      )}

      {workspace.status === "Completed" && (
        <div className="max-w-6xl mx-auto mb-6 p-4 rounded-xl bg-green-100 text-green-800 border">
          Bug successfully completed 🎉
        </div>
      )}

      <div className="max-w-6xl mx-auto mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Fix Workspace</h1>
          <p className="text-gray-500">Track fix progress</p>
        </div>

        <div className="bg-white border rounded-xl px-5 py-3 text-center">
          <p className="text-sm text-gray-500">Time Remaining</p>
          <p className="text-lg font-bold text-red-600">
            {timeLeft > 0 ? formatTime(timeLeft) : "Time Over"}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto bg-white border rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">{workspace.title}</h2>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <span>{workspace.category}</span>
          <span>₹{workspace.fixBudget}</span>
          <span>{workspace.status}</span>
          <span>Posted by: {workspace.userMail}</span>
          <span>Assigned to: {workspace.assignedTo}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto bg-white border rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Progress</h3>

        <div className="flex items-center justify-between text-sm">
          {["Assigned", "Analyzing", "Fixing", "Completed"].map((step, i) => {
            const current = getStepIndex();
            let style = "bg-gray-300 text-gray-700";
            let icon = "⏸";

            if (i < current) {
              style = "bg-green-600 text-white";
              icon = "✓";
            } else if (i === current) {
              style = "bg-yellow-500 text-white";
              icon = "⏳";
            }

            return (
              <div key={i} className="flex-1 text-center">
                <div
                  className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${style}`}
                >
                  {icon}
                </div>
                <p className="mt-2">{step}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Discussion</h3>

          <div className="h-56 overflow-y-auto border rounded-lg p-3 mb-3 text-sm">
            {messages.length === 0 && (
              <p className="text-gray-500">No messages yet</p>
            )}
            {messages.map((msg, index) => (
              <div key={index} className="mb-2">
                <span className="font-semibold">{msg.sender}</span>: {msg.text}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border rounded-lg px-3 py-2 text-sm"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
            >
              Send
            </button>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Actions</h3>

          {workspace.status === "In Progress" && isDebugger && (
            <button
              onClick={handleMarkFixed}
              className="w-full mb-3 px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              Mark as Fixed
            </button>
          )}

          {workspace.status === "Fixed" && isOwner && (
            <button
              onClick={handleApprove}
              className="w-full mb-3 px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              Approve & Complete
            </button>
          )}

          {workspace.status === "Completed" && isOwner && (
            <>
              <button
                onClick={() => setShowRating(true)}
                className="w-full mb-3 px-4 py-2 bg-purple-600 text-white rounded-lg"
              >
                Rate Debugger 
              </button>

              <button
                
                className="w-full px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Release Payment 
              </button>
            </>
          )}
        </div>
      </div>

      <RatingModal
        open={showRating}
        onClose={() => setShowRating(false)}
        onSubmit={async (stars) => {
          const reqHeader = { Authorization: `Bearer ${token}` };
          const result = await submitRatingAPI(
            { bugId, debuggerMail: workspace.assignedTo, rating: stars },
            reqHeader,
          );
          if (result.status === 200) {
            toast.success("Rating submitted");
            setShowRating(false);
            fetchWorkspace();
          }
        }}
      />
    </div>
  );
}

export default FixWorkspace;
