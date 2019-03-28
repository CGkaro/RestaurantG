import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { styles } from "../../utils"

export default function ProductMenu({ product }) {
  const { name, subtitle, date } = product
  const { fluid } = product.img

  return (
    <ProductWrapper>
      <div className="text">
        <Img fluid={fluid} className="img" />
        <div className="product-content">
          <h6 className="price">{date}</h6>
          <h3 className="name">{name}</h3>
          <p className="info">{subtitle}</p>
        </div>
      </div>
      <hr />
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-row-gap: 3rem;
  color: ${styles.colors.mainBlack};
  .text {
  }
  .product-content * {
    padding: 0.5rem;
  }

  @media (min-width: 576px) {
    grid-template-columns: 90%;
    justify-content: center;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 776px) {
    grid-template-columns: 60%;
    justify-content: center;
  }

  .product-content {
  }
  .name {
    color: ${styles.colors.mainBlack};
  }
  .price {
    color: ${styles.colors.mainGrey};
  }
  .info {
    color: ${styles.colors.mainGrey};
  }
`
