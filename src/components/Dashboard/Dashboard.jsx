import React, { useEffect } from "react";
import { useUser } from "../../Context/UserContext";

const Dashboard = () => {
  // Access user data and usage data from context
  const { usageData, updateUsageData } = useUser();

  // Initialize usage data from localStorage if available
  useEffect(() => {
    const savedUsageData = localStorage.getItem("usageData");
    if (savedUsageData) {
      // Set usageData to what was stored in localStorage
      updateUsageData(JSON.parse(savedUsageData));
    }
  }, [updateUsageData]);

  // Simulate updating usage data every minute (this simulates real-time)
  useEffect(() => {
    const interval = setInterval(() => {
      const newUsageData = usageData.map((app) => ({
        ...app,
        time: app.time + Math.floor(Math.random() * 1), // Add random time
      }));

      // Update usage data and persist it in localStorage
      updateUsageData(newUsageData);
      localStorage.setItem("usageData", JSON.stringify(newUsageData));
    }, 10000); // Every 1 minute

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [usageData, updateUsageData]); // Only set up the interval once

  const totalTime = usageData.reduce((total, app) => total + app.time, 0);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Screen Usage Stats</h2>
      <p className="text-lg mb-4">Total Time Today: {totalTime} minutes</p>
      <ul className="list-disc pl-5">
        {usageData.map((app) => (
          <li key={app.app} className="mb-2">
            {app.app}: {app.time} minutes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
