import React from "react"
import Product from "./product"
import { StaticQuery, graphql } from "gatsby"
import { Section, Title } from "../../utils"
import styled from "styled-components"

const PRODUCTS = graphql`
  {
    allContentfulMenu {
      edges {
        node {
          name
          price
          id
          ingredients
          img {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

export default function Menu() {
  return (
    <Section>
      <Title title="Menu" message="Esta es nuestra carta" />
      <ProductList>
        <StaticQuery
          query={PRODUCTS}
          render={data => {
            //console.log(data)
            const products = data.allContentfulMenu.edges
            //console.log(products)
            return products.map(item => {
              console.log("MENU ITEM\\", item.node.img)
              return <Product key={item.node.id} product={item.node} />
            })
          }}
        />
      </ProductList>
    </Section>
  )
}
const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 776px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`
