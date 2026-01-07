import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-20 bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              BugBound Hub
            </h2>
            <p className="mt-3 text-gray-600 max-w-sm leading-relaxed">
              A collaborative platform where developers can get help debugging
              errors, participate in bug bounty challenges, and earn rewards.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link to="/" className="hover:text-blue-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="hover:text-blue-600 transition">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 transition">
                  Contact / Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/athulep04-git"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-600 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/athul-krishna-ep/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-600 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/torque_spectre/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-600 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>
  
        <div className="my-10 border-t border-gray-300"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} BugBound Hub. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-blue-600 transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-blue-600 transition cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
