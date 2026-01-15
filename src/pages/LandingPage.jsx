import React from "react";
import DecryptedText from "../components/reactbits/DecryptedText/DecryptedText";
import TextType from "../components/reactbits/TextType/TextType";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen scroll-smooth overflow-x-hidden">
      <section
        data-aos="flip-up"
        data-aos-delay="200"
        className="min-h-[90vh] flex items-center justify-center text-center px-6
                   bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://i.makeagif.com/media/9-02-2016/ENpm3c.gif')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative max-w-5xl bg-white/90 border border-gray-200 shadow-2xl rounded-3xl p-8 md:p-14">
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-6
                         bg-gradient-to-r from-blue-600 to-purple-600
                         text-transparent bg-clip-text"
          >
            <TextType
              text={["Debug Faster.", "Pay Fairly.", "Learn More."]}
              typingSpeed={75}
              pauseDuration={750}
              showCursor
              cursorCharacter="|"
            />
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            BugBound Hub is a collaborative debugging marketplace where
            developers post real bugs and expert debuggers solve them.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link to={"/register"}>
              <button
                className="px-10 md:px-12 py-4 rounded-xl text-lg text-white
                               bg-gradient-to-r from-blue-600 to-purple-600
                               hover:scale-105 transition"
              >
                Get Started
              </button>
            </Link>

            <button
              className="px-10 md:px-12 py-4 rounded-xl text-lg border
                               hover:bg-gray-100 hover:scale-105 transition"
            >
              Explore Platform
            </button>
          </div>
        </div>
      </section>

      <section
        data-aos="flip-up"
        data-aos-delay="200"
        className="relative py-28 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            <DecryptedText text="Why Debugging Is a Pain" hover />
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
            <div
              className="p-8 bg-white/90 backdrop-blur rounded-3xl border shadow
                            hover:scale-105 hover:bg-blue-600 hover:text-white transition"
            >
              <h3 className="text-2xl font-semibold mb-3"> Time Drain</h3>
              <p>Developers waste hours stuck on bugs.</p>
            </div>

            <div
              className="p-8 bg-white/90 backdrop-blur rounded-3xl border shadow
                            hover:scale-105 hover:bg-purple-600 hover:text-white transition"
            >
              <h3 className="text-2xl font-semibold mb-3"> No Guidance</h3>
              <p>Online answers are outdated or incomplete.</p>
            </div>

            <div
              className="p-8 bg-white/90 backdrop-blur rounded-3xl border shadow
                            hover:scale-105 hover:bg-rose-600 hover:text-white transition"
            >
              <h3 className="text-2xl font-semibold mb-3"> Costly Delays</h3>
              <p>Bugs delay releases and reduce quality.</p>
            </div>
          </div>
        </div>
      </section>

      <section
        data-aos="flip-up"
        data-aos-delay="200"
        className="relative py-28 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            <DecryptedText text="The BugBound Hub Solution" hover />
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
            <div
              className="p-10 bg-white/90 rounded-3xl border shadow
                            hover:scale-105 hover:bg-blue-600 hover:text-white transition"
            >
              <div className="text-5xl mb-4"></div>
              <h3 className="text-2xl font-semibold mb-3">
                Structured Bug Posting
              </h3>
              <p>Post bugs with screenshots & logs.</p>
            </div>

            <div
              className="p-10 bg-white/90 rounded-3xl border shadow
                            hover:scale-105 hover:bg-purple-600 hover:text-white transition"
            >
              <div className="text-5xl mb-4"></div>
              <h3 className="text-2xl font-semibold mb-3">Expert Proposals</h3>
              <p>Receive clear solutions & time estimates.</p>
            </div>

            <div
              className="p-10 bg-white/90 rounded-3xl border shadow
                            hover:scale-105 hover:bg-green-600 hover:text-white transition"
            >
              <div className="text-5xl mb-4"></div>
              <h3 className="text-2xl font-semibold mb-3">
                Merit-Based Rewards
              </h3>
              <p>Pay only after successful fixes.</p>
            </div>
          </div>
        </div>
      </section>

      <section
        data-aos="flip-up"
        data-aos-delay="200"
        className="relative py-28 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526378722484-cc5c510fef74?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            <DecryptedText text="How it works" hover />
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
            <div className="p-8 bg-white/90 rounded-2xl border shadow hover:scale-105 hover:bg-blue-600 hover:text-white transition">
              <div className="text-4xl mb-4">1️⃣</div>
              <p className="font-semibold">Post Bug</p>
              <p className="text-sm">Describe the issue</p>
            </div>

            <div className="p-8 bg-white/90 rounded-2xl border shadow hover:scale-105 hover:bg-purple-600 hover:text-white transition">
              <div className="text-4xl mb-4">2️⃣</div>
              <p className="font-semibold">Receive Proposals</p>
              <p className="text-sm">Compare solutions</p>
            </div>

            <div className="p-8 bg-white/90 rounded-2xl border shadow hover:scale-105 hover:bg-indigo-600 hover:text-white transition">
              <div className="text-4xl mb-4">3️⃣</div>
              <p className="font-semibold">Collaborate</p>
              <p className="text-sm">Work together</p>
            </div>

            <div className="p-8 bg-white/90 rounded-2xl border shadow hover:scale-105 hover:bg-green-600 hover:text-white transition">
              <div className="text-4xl mb-4">4️⃣</div>
              <p className="font-semibold">Bug Fixed </p>
              <p className="text-sm">Verify & pay</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h2 className="text-4xl font-bold mb-6">
          <DecryptedText text="Stop Fighting Bugs Alone" hover />
        </h2>
        <p className="max-w-2xl mx-auto mb-10 opacity-90">
          BugBound Hub is built for developers and debuggers alike.
        </p>
        <button className="px-14 py-4 text-lg rounded-xl bg-white text-gray-900 hover:scale-105 transition">
          Join BugBound Hub
        </button>
      </section>
    </div>
  );
}

export default LandingPage;
