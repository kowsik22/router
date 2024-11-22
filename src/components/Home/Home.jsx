import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div>
        <h1 className="text-center text-3xl font-bold mt-8">
          Welcome to Screen Time Manager
        </h1>
        <Dashboard />
      </div>
    </div>
  );
}
