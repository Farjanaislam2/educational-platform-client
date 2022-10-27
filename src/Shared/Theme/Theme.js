import React from "react";
import { createContext } from "react";
import { useState } from "react";


const ThemeContext = createContext(null);

const Theme = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.provider value={{ theme, toggleTheme }}>
      <div id="theme">
        <button type="">night</button>
      </div>
    </ThemeContext.provider>
  );
};

export default Theme;
