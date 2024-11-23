import React, { useState } from "react";
import { motion } from "framer-motion";
import trackingImage from "../../assets/tracking.png";
import insightsImage from "../../assets/insights.png";
import remindersImage from "../../assets/settings.png";
import gamificationImage from "../../assets/gamefication.png";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState("tracking");

  const features = {
    tracking: {
      title: "Tracking",
      description:
        "Track your daily screen usage across various apps and get detailed insights.",
      image: trackingImage,
    },
    insights: {
      title: "Insights",
      description:
        "Get weekly and monthly trends in your screen time with easy-to-read graphs.",
      image: insightsImage,
    },
    reminders: {
      title: "Reminders",
      description:
        "Set personalized reminders to help you limit screen time and stay productive.",
      image: remindersImage,
    },
    gamification: {
      title: "Gamification",
      description:
        "Earn rewards for meeting your screen time goals and unlock achievements.",
      image: gamificationImage,
    },
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">App Features</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col space-y-4 md:w-1/3">
          {Object.keys(features).map((key) => (
            <button
              key={key}
              className={`p-4 text-left font-semibold rounded-lg ${
                activeFeature === key
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setActiveFeature(key)}
            >
              {features[key].title}
            </button>
          ))}
        </div>
        <motion.div
          className="flex flex-col items-center md:w-2/3 text-center"
          key={activeFeature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            {features[activeFeature].title}
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            {features[activeFeature].description}
          </p>
          {features[activeFeature].image && (
            <img
              src={features[activeFeature].image}
              alt={features[activeFeature].title}
              className="rounded-lg shadow-lg w-full md:w-2/3"
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
