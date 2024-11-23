import React, { useEffect } from "react";
import { useUser } from "../../Context/UserContext";

const Dashboard = () => {
  const { usageData, updateUsageData } = useUser();

  // Load usage data from localStorage on the first render
  useEffect(() => {
    const savedUsageData = localStorage.getItem("usageData");
    if (savedUsageData) {
      updateUsageData(JSON.parse(savedUsageData));
    }
  }, [updateUsageData]);

  // Update usage data every minute
  useEffect(() => {
    const interval = setInterval(() => {
      updateUsageData((prevData) => {
        const newUsageData = prevData.map((app) => ({
          ...app,
          time: app.time + Math.floor(Math.random() * 1), // Simulate random usage
        }));
        localStorage.setItem("usageData", JSON.stringify(newUsageData)); // Persist updates
        return newUsageData; // Update the state
      });
    }, 10000); // Update every 10 seconds for testing

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [updateUsageData]);

  const totalTime = usageData.reduce((total, app) => total + app.time, 0);

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
