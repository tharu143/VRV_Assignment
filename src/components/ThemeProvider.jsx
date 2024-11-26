import React, { useState, useEffect } from "react";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
