import React, { useState, useEffect } from "react";
import { useUser } from "../../Context/UserContext";

const Gamification = () => {
  const { usageData, setUsageData } = useUser();
  const totalTime = usageData.reduce((total, app) => total + app.time, 0);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    if (totalTime <= 120) {
      // Example condition for achieving points
      setPoints((prev) => prev + 10); // Add points for good usage
    }
  }, [totalTime]);

  const getBadge = (points) => {
    if (points >= 50) return "Gold Badge";
    if (points >= 30) return "Silver Badge";
    return "Bronze Badge";
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Gamification</h2>
      <p>Total Points: {points}</p>
      <p>You earned: {getBadge(points)}</p>
    </div>
  );
};

export default Gamification;
