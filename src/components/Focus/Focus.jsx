import React, { useState, useEffect } from "react";
import { useUser } from "../../Context/UserContext";

const FocusMode = () => {
  const { focusMode, setFocusMode, lockedPages, setLockedPages } = useUser(); // Access Focus Mode state from context

  const pages = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Company", path: "/company" },
    { name: "User", path: "/user" },
    { name: "Rewards", path: "/rewards" },
    { name: "Settings", path: "/settings" },
    { name: "Insights", path: "/i" },
  ];

  const toggleFocusMode = () => {
    setFocusMode(!focusMode);
  };

  const handlePageToggle = (path) => {
    if (lockedPages.includes(path)) {
      setLockedPages(lockedPages.filter((page) => page !== path));
    } else {
      setLockedPages([...lockedPages, path]);
    }
  };
  const suggestions = [
    "Take a walk 🚶‍♂️‍➡️",
    "Read a book 📝",
    "Meditate 🧘‍♂️",
    "Exercise 🏋️‍♀️",
  ];
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    if (focusMode) {
      const randomSuggestion =
        suggestions[Math.floor(Math.random() * suggestions.length)];
      setSuggestion(randomSuggestion);
    }
  }, [focusMode]);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto mt-8 mb-12">
      <h2 className="text-2xl font-bold mb-4">Focus Mode</h2>
      <button
        onClick={toggleFocusMode}
        className={`px-4 py-2 rounded ${
          focusMode ? "bg-red-500 text-white" : "bg-green-500 text-white"
        }`}
      >
        {focusMode ? "Disable Focus Mode" : "Enable Focus Mode"}
      </button>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Lock Pages:</h3>
        <ul>
          {pages.map((page) => (
            <li key={page.path}>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={lockedPages.includes(page.path)}
                  onChange={() => handlePageToggle(page.path)}
                  className="mr-2"
                />
                {page.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
      {focusMode && (
        <p className="mt-4 text-red-500">
          Focus Mode is Active. App usage is restricted.
        </p>
      )}
      {focusMode && (
        <p className="mt-4 text-green-500 text-2xl">Suggestion: {suggestion}</p>
      )}
    </div>
  );
};

export default FocusMode;
