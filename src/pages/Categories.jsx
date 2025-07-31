import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "Technology",
  "React",
  "Design",
  "TypeScript",
  "Backend",
  "CSS",
];

const Categories = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-gray-900 flex flex-col items-center py-16">
    <h1 className="text-4xl font-extrabold text-white mb-8">
      Browse by <span className="text-purple-400">Category</span>
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
      {categories.map((cat) => (
        <Link
          key={cat}
          to={`/posts?category=${encodeURIComponent(cat)}`}
          className="bg-white/10 rounded-xl shadow-lg p-8 flex flex-col items-center hover:bg-indigo-500/30 transition"
        >
          <span className="text-2xl font-bold text-indigo-300 mb-2">{cat}</span>
          <span className="text-gray-200 text-sm">
            Explore articles in {cat}
          </span>
        </Link>
      ))}
    </div>
  </div>
);

export default Categories;
