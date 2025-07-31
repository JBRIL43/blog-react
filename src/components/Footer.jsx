import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#151e2e] text-[#c9d1e0] pt-10 pb-4 px-4 md:px-16 border-t border-[#232f47]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
        {/* Brand & Description */}
        <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#6c63ff] rounded-full p-2">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <rect width="24" height="24" rx="6" fill="#6c63ff" />
                <path
                  d="M8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"
                  fill="#fff"
                />
              </svg>
            </span>
            <span className="text-xl font-bold text-white">ModernBlog</span>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Where ideas come to life. Join our community of writers and readers
            exploring the latest in technology, design, and innovation.
          </p>
          <div className="flex gap-4 text-lg mt-2">
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" aria-label="Github" className="hover:text-white">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Email" className="hover:text-white">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[150px] mb-8 md:mb-0">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Articles
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Authors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex-1 min-w-[150px] mb-8 md:mb-0">
          <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Community Guidelines
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                API Documentation
              </a>
            </li>
          </ul>
        </div>

        {/* Stay Updated */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-lg font-semibold text-white mb-3">
            Stay Updated
          </h3>
          <p className="text-sm mb-3">
            Get the latest articles and updates delivered to your inbox.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-md px-4 py-2 bg-[#202b40] text-white placeholder-[#7a869a] focus:outline-none focus:ring-2 focus:ring-[#6c63ff]"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#6c63ff] to-[#a084ee] text-white font-semibold py-2 rounded-md hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 border-t border-[#232f47] pt-4 flex flex-col md:flex-row md:justify-between items-center text-xs text-[#7a869a] gap-2">
        <div>© 2024 ModernBlog. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">
            Sitemap
          </a>
          <a href="#" className="hover:text-white">
            RSS Feed
          </a>
          <a href="#" className="hover:text-white">
            Accessibility
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
