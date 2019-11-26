import React from "react";
import { useTheme } from "../Theme/ThemeContext";
import { withTheme } from "styled-components";
import ToggleSwitch from "../FormControl/ToggleSwitch";

const Footer = props => {
  const themeToggle = useTheme();
  const isDark = props.theme.mode === "dark";

  return (
    <div className="footer">
      <ToggleSwitch
        isChecked={isDark}
        onChange={() => themeToggle.toggle()}
        label={isDark ? "\u263E" : "\u263C"}
      ></ToggleSwitch>
    </div>
  );
};

export default withTheme(Footer);
