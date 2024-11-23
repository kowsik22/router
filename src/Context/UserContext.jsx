import React, { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Manage user data
  const [user, setUser] = useState(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Manage screen usage data
  const [usageData, setUsageData] = useState(() => {
    const savedUsageData = localStorage.getItem("usageData");
    return savedUsageData
      ? JSON.parse(savedUsageData)
      : [
          { app: "Instagram", time: 0 },
          { app: "YouTube", time: 0 },
          { app: "Twitter", time: 0 },
        ]; // Default apps
  });

  const [focusMode, setFocusMode] = useState(() => {
    const savedFocusMode = localStorage.getItem("focusMode");
    return savedFocusMode ? JSON.parse(savedFocusMode) : false; // Default: Focus Mode off
  });

  const [lockedPages, setLockedPages] = useState(() => {
    const savedLockedPages = localStorage.getItem("lockedPages");
    return savedLockedPages ? JSON.parse(savedLockedPages) : []; // Default: No locked pages
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser)); // Restore user state
    }
    setIsHydrated(true); // Mark hydration complete
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("lockedPages", JSON.stringify(lockedPages));
  }, [lockedPages]);

  if (!isHydrated) {
    return null; // Render nothing until hydration is complete
  }

  // Function to update usage data
  const updateUsageData = (newData) => {
    setUsageData(newData);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        usageData,
        setUsageData,
        updateUsageData,
        focusMode,
        setFocusMode,
        lockedPages,
        setLockedPages,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use context data
export const useUser = () => useContext(UserContext);
