import theme from "styled-theming";

export const backgroundColor = theme("mode", {
  light: "#EEEEEE",
  dark: "#212121"
});
export const textColor = theme("mode", {
  light: "#212121",
  dark: "#EEEEEE"
});

export const buttonBackgroundColor = theme("mode", {
  light: "#222",
  dark: "#eee"
});
export const buttonTextColor = theme("mode", {
  light: "white",
  dark: "black"
});
