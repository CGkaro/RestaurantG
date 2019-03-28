import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { Section } from "../../utils"
import ProductMenu from "./ProductMenu"

const GET_IMAGES = graphql`
  {
    allContentfulProductMenu {
      edges {
        node {
          name
          subtitle
          date
          img {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function MenuGallery() {
  return (
    <Section>
      <GalleryWrapper>
        <hr />
        <StaticQuery
          query={GET_IMAGES}
          render={data => {
            //console.log(data)
            const products = data.allContentfulProductMenu.edges
            //console.log(products)
            return products.map(item => {
              console.log("MENU ITEM\\", item.node.img)
              return <ProductMenu key={item.node.id} product={item.node} />
            })
          }}
        />
      </GalleryWrapper>
    </Section>
  )
}

const GalleryWrapper = styled.div`
  .section {
    padding: 1rem;
  }
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 100%;

  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 65%;
    justify-content: center;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 776px) {
    grid-template-columns: 90%;
    grid-gap: 2rem;
    justify-content: center;
  }
`
