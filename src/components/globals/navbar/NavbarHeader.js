import React, { Component } from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import styled from "styled-components"
import { styles } from "../../../utils"
import { StaticQuery, graphql } from "gatsby"
import { SimpleImage } from "../../../utils/"

const LOGO = graphql`
  {
    allContentfulLogo {
      edges {
        node {
          companyLogo {
            fixed(width: 150, height: 40) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

export default function NavbarHeader(props) {
  const handleNavbar = props.handleNavbar
  return (
    <HeaderWrapper>
      <Link to="/">
        <StaticQuery
          query={LOGO}
          render={data => {
            const products = data.allContentfulLogo.edges[0].node
            return <SimpleImage data={products} />
          }}
        />
      </Link>
      <FaAlignRight
        className="toggle-icon"
        onClick={() => {
          handleNavbar()
        }}
      />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
