import React from "react";
import { useUser } from "../../Context/UserContext";

const User = () => {
  const { user } = useUser(); // Access user details from context

  return (
    <div className="bg-orange-500 text-black text-3xl text-center py-5">
      {user ? `Welcome, ${user.name}!` : "No user logged in."}
    </div>
  );
};

export default User;
