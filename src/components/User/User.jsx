import React from "react";
import { useUser } from "../../Context/UserContext";
import Dashboard from "../Dashboard/Dashboard";
const User = () => {
  const { user } = useUser(); // Access user details from context

  return (
    <div className="bg-orange-500 text-black text-3xl text-center py-5">
      {user ? `Welcome, ${user.name}!` : "No user logged in."}
      <div className="mx-auto w-full max-w-7xl">
        <div>
          <h1 className="text-center text-3xl font-bold mt-8">
            Welcome to Screen Time Manager
          </h1>
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default User;
