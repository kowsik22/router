import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold mb-6">About Our App</h1>
            <p className="text-lg text-gray-700 mb-4">
              Our app is designed to help users regain control of their screen
              time by providing tools to monitor, manage, and minimize digital
              distractions.
            </p>
            <h2 className="text-2xl font-bold mt-6">Why It Matters</h2>
            <p className="text-lg text-gray-700">
              Excessive screen time has been linked to poor productivity,
              reduced focus, and health issues. Our app aims to create balance
              and foster mindful usage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
