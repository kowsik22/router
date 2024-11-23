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
          { app: "Instagram", time: 10 },
          { app: "YouTube", time: 10 },
          { app: "Twitter", time: 9 },
        ];
  });

  const [focusMode, setFocusMode] = useState(() => {
    const savedFocusMode = localStorage.getItem("focusMode");
    return savedFocusMode ? JSON.parse(savedFocusMode) : false;
  });

  const [lockedPages, setLockedPages] = useState(() => {
    const savedLockedPages = localStorage.getItem("lockedPages");
    return savedLockedPages ? JSON.parse(savedLockedPages) : [];
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsHydrated(true);
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

export const useUser = () => useContext(UserContext);
