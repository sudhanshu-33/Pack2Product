import React from "react";

export default function WelcomeCard({ name = "User" }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-black">
        Welcome Back, {name} 👋
      </h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-black-400">
        Manage your product content from one place.
      </p>
    </div>
  );
}