import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaBug,
  FaHeadset,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-6 md:px-16">
      <h1 className="text-3xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
        Contact & Support
      </h1>

      <p className="text-center text-gray-700 dark:text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
        Need help with an error, bug bounty challenge, or platform-related issue?
        Reach out to us and our support team will get back to you as soon as possible.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12">
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-blue-600 text-lg">
            <FaMapMarkerAlt />
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-tight">
            Kakkanad, Kochi
            <br /> Kerala, India
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-green-600 text-lg">
            <FaPhoneAlt />
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            +91 9645741697
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-purple-600 text-lg">
            <FaEnvelope />
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            support@bugboundhub.com
          </p>
        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
          <h2 className="text-center text-lg font-medium mb-6 text-gray-900 dark:text-white">
            Send us a message
          </h2>

          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
            />
            <select className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
              <option>Support Type</option>
              <option>Error Fixing Help</option>
              <option>Bug Bounty Challenge</option>
              <option>Account / Login Issue</option>
              <option>General Query</option>
            </select>

            <textarea
              placeholder="Describe your issue"
              rows="4"
              className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded flex items-center justify-center gap-2 transition"
            >
              Send Message <FaPaperPlane />
            </button>
            <p className="text-xs text-center text-gray-500 mt-2">
              Our team typically responds within 24 hours.
            </p>

          </form>
        </div>

        <div className="w-full h-[350px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.124406891863!2d76.35782837491227!3d9.978702773003846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d8e8e07a3c5%3A0x7dc53b47af27b7b8!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1699437927659!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl border border-gray-300 dark:border-gray-700"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

    </div>
  );
}

export default Contact;
