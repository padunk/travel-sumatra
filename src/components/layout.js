import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"
import { THEME_COLORS } from "../constants/constants"
import Header from "./Header/Header"
import { useGlobalStateContext } from "../context/globalContext"
import CustomCursor from "./CustomCursor/CustomCursor"
import Navigation from "./Navigation/Navigation"
import Footer from "./Footer/Footer"

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    text-decoration: none;
    cursor: none;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`

const Layout = ({ children, toggleNav, setToggleNav }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const { currentTheme } = useGlobalStateContext()
  const darkTheme = THEME_COLORS.dark
  const lightTheme = THEME_COLORS.light

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <CustomCursor toggleNav={toggleNav} />
      <Header toggleNav={toggleNav} setToggleNav={setToggleNav} />
      <Navigation toggleNav={toggleNav} setToggleNav={setToggleNav} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
