import React from "react"
import styled from "styled-components"
import { styles } from "../utils"

export default function Banner({ title, subtitle, children }) {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
      {children}
    </BannerWrapper>
  )
}
const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  @media (min-width: 360px) {
    .title {
      font-size: 1.5rem;
      text-transform: uppercase;
      ${styles.letterSpacing({ spacing: "0.45rem" })};
      color: ${styles.colors.mainWhite};
    }
    .subtitle {
      ${styles.textSlanted};
      ${styles.letterSpacing({ spacing: "0.1rem" })};
      font-size: 1.2rem;
      text-transform: capitalize;
      color: ${styles.colors.mainWhite};
    }
  }
  @media (min-width: 768px) {
    .title {
      font-size: 3rem;
      text-transform: uppercase;
      ${styles.letterSpacing({ spacing: "0.75rem" })};
      color: ${styles.colors.mainWhite};
    }
    .subtitle {
      ${styles.textSlanted};
      ${styles.letterSpacing({ spacing: "0.1rem" })};
      font-size: 1.5rem;
      text-transform: capitalize;
      color: ${styles.colors.mainWhite};
    }
  }
`

Banner.defaultProps = {
  title: "default title",
}
