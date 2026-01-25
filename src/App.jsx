import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Loader from "./components/Loader";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import PostError from "./pages/PostError";
import Errors from "./pages/Errors";
import ErrorDetails from "./pages/ErrorDetails";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import PageNotFound from "./pages/PageNotFound";
import DebuggerProfile from "./pages/DebuggerProfile";
import MyErrors from "./pages/MyErrors";
import Contact from "./pages/Contact";
import Bounties from "./pages/Bounties";
import BountyDetails from "./pages/BountyDetails";
import PostBounty from "./pages/PostBounty";
import FixWorkspace from "./pages/FixWorkSpace";
import Debugger from "./pages/Debugger";
import MyTasks from "./pages/MyTasks";
import CompletedTasks from "./pages/CompletedTasks";
import AdminLayout from "./pages/AdminLayout";
import AdminUsers from "./pages/AdminUsers";
import AdminBugs from "./pages/AdminBugs";
import AdminComplaints from "./pages/AdminComplaints";
import AdminSettings from "./pages/AdminSettings";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      {!loading && (
  <>
    <Navbar />

    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post-error" element={<PostError />} />
        <Route path="/errors" element={<Errors />} />
        <Route path="/errors/:id" element={<ErrorDetails />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/debugger/:id" element={<DebuggerProfile />} />
        <Route path="/my-errors" element={<MyErrors />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="bugs" element={<AdminBugs />} />
          <Route path="complaints" element={<AdminComplaints />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        <Route path="/bounties" element={<Bounties />} />
        <Route path="/bounties/:id" element={<BountyDetails />} />
        <Route path="/workspace/:id" element={<FixWorkspace />} />
        <Route path="/mytasks" element={<MyTasks />} />
        <Route path="/debuggerwork/:id" element={<Debugger />} />
        <Route path="/post-bounty" element={<PostBounty />} />
        <Route path="/completed" element={<CompletedTasks />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>

    <Footer />
  </>
)}

    </>
  );
}

export default App;
