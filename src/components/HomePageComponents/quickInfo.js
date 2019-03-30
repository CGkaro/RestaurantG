import React from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

export default function QuickInfo() {
  return (
    <Section>
      <Title message="Dejanos contarte" title="Nuestra misión" />
      <QuickInfoWrapper>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est odit
          nihil laboriosam, saepe neque delectus molestiae explicabo
          perspiciatis autem repellendus aspernatur reprehenderit at eveniet
          esse laudantium nobis, voluptatum accusantium a qui, mollitia sapiente
          dicta? Necessitatibus eum expedita eos modi illum, voluptatum
          pariatur, commodi eaque fugit placeat magni consequatur? Perspiciatis,
          quas.
        </p>
        <Link to={"/about/"} style={{ textDecoration: "none" }} />
      </QuickInfoWrapper>
      <Link to="/contact/">
        <SectionButton style={{ margin: "2rem auto" }}>Contacto</SectionButton>
      </Link>
    </Section>
  )
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
