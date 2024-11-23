import React, { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Initialize usage data from localStorage or default apps
  const [usageData, setUsageData] = useState(() => {
    const savedUsageData = localStorage.getItem("usageData");
    return savedUsageData
      ? JSON.parse(savedUsageData)
      : [
          { app: "Instagram", time: 0 },
          { app: "YouTube", time: 0 },
          { app: "Twitter", time: 0 },
        ];
  });

  useEffect(() => {
    localStorage.setItem("usageData", JSON.stringify(usageData));
  }, [usageData]);

  // Screen time limit for the dashboard
  const [totalLimit, setTotalLimit] = useState(() => {
    const savedLimit = localStorage.getItem("totalLimit");
    return savedLimit ? JSON.parse(savedLimit) : 120; // Default limit is 120 minutes
  });

  // Focus Mode state
  const [focusMode, setFocusMode] = useState(() => {
    const savedFocusMode = localStorage.getItem("focusMode");
    return savedFocusMode ? JSON.parse(savedFocusMode) : false;
  });

  // Locked Pages state
  const [lockedPages, setLockedPages] = useState(() => {
    const savedLockedPages = localStorage.getItem("lockedPages");
    return savedLockedPages ? JSON.parse(savedLockedPages) : [];
  });

  // Hydrate user from localStorage on app load
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsHydrated(true);
  }, []);

  // Save user data to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Save lockedPages to localStorage
  useEffect(() => {
    localStorage.setItem("lockedPages", JSON.stringify(lockedPages));
  }, [lockedPages]);

  // Save totalLimit to localStorage
  useEffect(() => {
    localStorage.setItem("totalLimit", JSON.stringify(totalLimit));
  }, [totalLimit]);

  // Function to update usage data
  const updateUsageData = (updater) => {
    setUsageData((prevData) => {
      const newData =
        typeof updater === "function" ? updater(prevData) : updater;
      localStorage.setItem("usageData", JSON.stringify(newData));
      return newData;
    });
  };

  if (!isHydrated) {
    return null; // Render nothing until hydration is complete
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        usageData,
        updateUsageData,
        totalLimit,
        setTotalLimit,
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
