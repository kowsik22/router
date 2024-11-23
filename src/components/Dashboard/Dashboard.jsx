import React, { useEffect, useState } from "react";
import { useUser } from "../../Context/UserContext";

const Dashboard = () => {
  // Initialize usage data from localStorage or use default values
  const { usageData, updateUsageData } = useUser();
  const totalLimit = 120; // Maximum allowed total screen time

  // Function to calculate the total screen time
  const calculateTotalTime = (data) =>
    data.reduce((sum, app) => sum + app.time, 0);

  // UseEffect to simulate usage data updates every second
  useEffect(() => {
    const interval = setInterval(() => {
      updateUsageData((prevData) => {
        // Calculate the total time for all apps
        const totalTime = calculateTotalTime(prevData);
        const remainingTime = totalLimit - totalTime; // Time remaining to stay within 120 minutes

        if (remainingTime <= 0) {
          // If total time exceeds the limit, stop further increments
          return prevData;
        }

        const newUsageData = prevData.map((app) => {
          if (app.time >= 120) {
            // Prevent time from exceeding 120 minutes for any app
            return app;
          }

          // Random time increment between 0 and remainingTime
          const maxIncrement = Math.min(remainingTime, 2, 120 - app.time); // Max increment per app
          const increment = Math.floor(Math.random() * (maxIncrement + 1)); // Ensure no negative increments

          return { ...app, time: app.time + increment };
        });

        return newUsageData;
      });
    }, 10000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [updateUsageData]);

  // Calculate total time across all apps
  const totalTime = calculateTotalTime(usageData);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto mt-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Screen Usage Stats</h2>
      <p className="text-lg mb-4">Total Time Today: {totalTime} minutes</p>
      <ul className="list-disc pl-5 flex" style={{ flexDirection: "column" }}>
        {usageData.map((app) => (
          <li key={app.app} className="mb-2" style={{ listStyleType: "none" }}>
            {app.app}: {app.time} minutes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
