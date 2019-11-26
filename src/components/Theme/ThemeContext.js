import React, { useState, useContext, useEffect, createContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { backgroundColor, textColor } from "./Theme";

// define our toggle context, with a default empty toggle function
const ThemeToggleContext = createContext({
  toggle: () => {}
});
// define exportable useContext hook object
export const useTheme = () => useContext(ThemeToggleContext);

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = useState({
    mode: "dark",
    isThemeLoaded: false
  });

  useEffect(() => {
    const currentMode = localStorage.getItem("dark") || "dark";
    setThemeState({ mode: currentMode, isThemeLoaded: true });
  }, []);
  return [themeState, setThemeState];
};

// define MyThemeProvider
export const AppThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode();

  const toggle = () => {
    const mode = themeState.mode === "light" ? "dark" : "light";
    localStorage.setItem("dark", mode);
    setThemeState({ ...themeState, mode: mode });
  };

  const Wrapper = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
  `;

  if (!themeState.isThemeLoaded) return <div></div>;
  // render both contexts, then Wrapper, then children
  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode
        }}
      >
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};
