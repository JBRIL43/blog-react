// Header.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "./Button";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.replace("/login");
  };

  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  return (
    <header className="bg-[#181f2a] px-6 py-3 flex items-center justify-between shadow">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="bg-indigo-400/30 roundeSwitch to HTTP-only cookies for storing tokensd-full p-2">
            <svg
              className="w-6 h-6 text-indigo-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </span>
          <span className="font-extrabold text-xl text-white">
            <span className="text-indigo-400">Modern</span>Blog
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <nav className="hidden md:flex gap-6 text-gray-200 font-medium text-sm">
          <Link to="/posts" className="hover:text-indigo-400">
            Articles
          </Link>
          <Link to="/categories" className="hover:text-indigo-400">
            Categories
          </Link>
          <Link to="/about" className="hover:text-indigo-400">
            About
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-3">
        {localStorage.getItem("token") ? (
          <div className="relative" ref={profileRef}>
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={toggleProfile}
            >
              <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-400/40 to-blue-200/20 flex items-center justify-center text-indigo-400 font-bold shadow text-sm">
                {user?.name?.charAt(0)}
              </span>
              <span className="text-white font-semibold hidden md:inline">
                {user?.name}
              </span>
            </div>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-[#1f2937] rounded-lg shadow-lg py-2 z-50 border border-gray-700">
                <div className="px-4 py-3 border-b border-gray-700">
                  <p className="text-white font-medium truncate">
                    {user?.name}
                  </p>
                  <p className="text-gray-400 text-sm truncate">
                    {user?.email}
                  </p>
                </div>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Profile Settings
                </Link>
                <Link
                  to="/profile/edit"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Edit Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="text-white px-4 py-1 rounded hover:bg-white/10 transition"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-4 py-1 rounded-full font-semibold ml-2 shadow hover:from-indigo-600 hover:to-pink-600 transition"
            >
              Get Started
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
