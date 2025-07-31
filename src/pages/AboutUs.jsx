import React from "react";

const AboutUs = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div
          className="absolute w-96 h-96 bg-purple-600 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-blob1"
          style={{ top: "-6rem", left: "-6rem" }}
        />
        <div
          className="absolute w-96 h-96 bg-blue-500 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-blob2"
          style={{ top: "10rem", right: "-6rem" }}
        />
        <div
          className="absolute w-96 h-96 bg-pink-500 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-blob3"
          style={{ bottom: "-6rem", left: "20%" }}
        />
      </div>

      {/* Logo and Heading */}
      <div className="flex items-center gap-2 mb-8 mt-8">
        <span className="text-3xl font-extrabold text-blue-400 animate-pulse">
          &#128218;
        </span>
        <span className="text-2xl font-bold text-white tracking-tight">
          ModernBlog<span className="text-purple-400">About</span>
        </span>
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-4 animate-fadeInUp">
        About <span className="text-purple-400">Us</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-200 text-center mb-8 max-w-2xl animate-fadeInUp delay-100">
        ModernBlog is a vibrant community of writers, readers, and innovators.
        Our mission is to empower voices, share knowledge, and inspire
        creativity through insightful articles and meaningful connections.
      </p>

      <div className="w-full max-w-3xl mx-auto animate-fadeInUp delay-200 mb-12">
        <div className="bg-white/10 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Our Story</h2>
          <p className="mb-4">
            Founded in 2024, ModernBlog was created to bridge the gap between
            passionate writers and curious readers. We believe in the power of
            storytelling and the impact of shared experiences.
          </p>
          <h2 className="text-2xl font-bold mb-2 mt-6">What We Offer</h2>
          <ul className="list-disc list-inside text-left mx-auto max-w-xl mb-4">
            <li>Curated articles on technology, design, and innovation</li>
            <li>Opportunities for writers to grow and connect</li>
            <li>Engaged community discussions and feedback</li>
            <li>Resources for learning and personal development</li>
          </ul>
          <h2 className="text-2xl font-bold mb-2 mt-6">Join Us</h2>
          <p>
            Whether you're here to read, write, or connect, ModernBlog welcomes
            you. Together, we shape the future of ideas.
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 1s cubic-bezier(.4,0,.2,1) both; }
        .animate-fadeInUp.delay-100 { animation-delay: .1s; }
        .animate-fadeInUp.delay-200 { animation-delay: .2s; }
        @keyframes blob1 {
          0%, 100% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.1) translate(30px, 20px); }
        }
        @keyframes blob2 {
          0%, 100% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.1) translate(-20px, 30px); }
        }
        @keyframes blob3 {
          0%, 100% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.1) translate(20px, -20px); }
        }
        .animate-blob1 { animation: blob1 12s infinite ease-in-out; }
        .animate-blob2 { animation: blob2 14s infinite ease-in-out; }
        .animate-blob3 { animation: blob3 16s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default AboutUs;
