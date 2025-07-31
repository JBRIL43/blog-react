import React from "react";

const Button = ({
  type = "button",
  className = "",
  disabled = false,
  loading = false,
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`flex-1 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded font-semibold shadow-lg hover:from-indigo-600 hover:to-pink-600 transition-colors disabled:opacity-60 ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
