import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Manage user data
  const [user, setUser] = useState(null);

  // Manage screen usage data
  const [usageData, setUsageData] = useState([
    { app: "Instagram", time: 0 },
    { app: "YouTube", time: 0 },
    { app: "Twitter", time: 0 },
  ]);

  // Function to update usage data
  const updateUsageData = (newData) => {
    setUsageData(newData);
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, usageData, setUsageData, updateUsageData }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use context data
export const useUser = () => useContext(UserContext);
