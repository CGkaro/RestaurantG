import React, { Component } from "react"
import NavbarIcons from "./NavbarIcons"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import style from "styled-components"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
  }
  handleNavbar = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen,
    })
  }
  render() {
    return (
      <NavWrapper>
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
        <NavbarIcons />
      </NavWrapper>
    )
  }
}
const NavWrapper = style.nav`
@media (min-width: 768px){
    display:flex;
    align-items:center
}
`
