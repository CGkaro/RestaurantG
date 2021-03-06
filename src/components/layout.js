import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
//import "./layout.css"
//import "./bootstrap.min.css"
import Navbar from "./globals/navbar"
import Footer from "./globals/footer"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <GlobalStyle />
      {children}
      <Footer />
    </React.Fragment>
  )
}
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  font-family:"Open-Sans", sans-serif;
  color:red;
  background:#fff
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
