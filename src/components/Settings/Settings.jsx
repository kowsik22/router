import React, { useState, useEffect } from "react";
import { useUser } from "../../Context/UserContext";

const Settings = () => {
  const { usageData } = useUser();
  const [timeLimit, setTimeLimit] = useState(120); // Default limit in minutes

  const totalTime = usageData.reduce((total, app) => total + app.time, 0);

  useEffect(() => {
    if (totalTime > timeLimit) {
      alert("You have exceeded your screen time limit!");
    }
  }, [totalTime, timeLimit]); // Trigger alert when `totalTime` or `timeLimit` changes

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto mt-20 mb-24">
      <h2 className="text-2xl font-bold mb-4">Set Screen Time Limit</h2>
      <label className="block mb-4">
        Daily Limit (minutes):
        <input
          type="number"
          value={timeLimit}
          onChange={(e) => setTimeLimit(Number(e.target.value))} // Ensure value is a number
          className="ml-2 p-2 border rounded"
        />
      </label>
      <p className="text-lg">Your daily limit is set to {timeLimit} minutes.</p>
    </div>
  );
};

export default Settings;
