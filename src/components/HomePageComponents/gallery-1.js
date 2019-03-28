import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { styles, Section } from "../../utils"
import Img from "gatsby-image"

const GET_IMAGES = graphql`
  {
    allContentfulPhotoGallery {
      edges {
        node {
          name
          img {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Gallery() {
  return (
    <StaticQuery
      query={GET_IMAGES}
      render={data => {
        const images = data.allContentfulPhotoGallery.edges

        return (
          <Section>
            <GalleryWrapper>
              {images.map(({ node }, index) => {
                console.log(" NODEEEEE", node)
                return (
                  <div key={index} className={`item item-${index + 1}`}>
                    <Img fluid={node.img.fluid} />
                    <p className="info"> {node.name}</p>
                  </div>
                )
              })}
            </GalleryWrapper>
          </Section>
        )
      }}
    />
  )
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .item {
    position: relative;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
    color: ${styles.colors.mainBlack};
  }

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:
      "one one two two"
      "one one three three";
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
  }
`
