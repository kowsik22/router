import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center text-center px-6 py-16">
      <h1 className="text-3xl sm:text-5xl font-bold mb-6">
        Take Control of Your Screen Time Today!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Track, remind, and focus with our all-in-one solution.
      </p>
      <button className="bg-red-500 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex gap-4">
        Download Now{"  "}
        <svg
          fill="white"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
        </svg>
      </button>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-semibold">Track</h3>
          <p>Monitor your daily screen usage and get actionable insights.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Remind</h3>
          <p>Set goals and receive reminders to stay on track.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Focus</h3>
          <p>Enable focus mode to minimize distractions.</p>
        </div>
      </div>
    </div>
  );
}
