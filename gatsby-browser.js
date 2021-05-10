/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
require("./src/styles/global.css")

const { ThemeProvider } = require("./src/hooks/useTheme")

exports.wrapPageElement = ({ element, props }) => {
  return <ThemeProvider {...props}>{element}</ThemeProvider>
}
