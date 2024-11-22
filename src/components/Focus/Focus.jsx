import React, { useState } from "react";

const FocusMode = () => {
  const [focusMode, setFocusMode] = useState(false);

  const toggleFocusMode = () => {
    setFocusMode(!focusMode);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Focus Mode</h2>
      <button
        onClick={toggleFocusMode}
        className={`px-4 py-2 rounded ${
          focusMode ? "bg-red-500 text-white" : "bg-green-500 text-white"
        }`}
      >
        {focusMode ? "Disable Focus Mode" : "Enable Focus Mode"}
      </button>
      {focusMode && (
        <p className="mt-4 text-red-500">
          Focus Mode is Active. App usage is restricted.
        </p>
      )}
    </div>
  );
};

export default FocusMode;
