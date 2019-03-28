import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"

export default class InfoSection extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="fbIcon" />,
        path: "https://www.facebook.com",
      },
      {
        id: 2,
        icon: <FaTwitter className="twIcon" />,
        path: "https://www.twitter.com",
      },
      {
        id: 3,
        icon: <FaInstagram className="insIcon" />,
        path: "https://www.instagram.com",
      },
    ],
  }
  render() {
    return (
      <Section>
        <InfoSectionWrapper>
          <div className="addInfo">
            <div>
              <h3>EL GRAN SALÓN</h3>
              <h6 className="textSubtitle">Hasta 60 personas</h6>
              <p className="textParagraph">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Morbi leo risus, porta ac consectetur
                ac, vestibulum at eros. Maecenas faucibus mollis interdum.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Vestibulum id ligula porta felis euismod
                semper. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Nullam quis risus eget urna mollis ornare vel eu
                leo. Etiam porta sem malesuada magna mollis euismod. Nulla vitae
                elit libero, a pharetra augue.
              </p>
            </div>
            <div>
              <h3>EL SALÓN PEQUEÑO</h3>
              <h6 className="textSubtitle">Hasta 15 personas</h6>
              <p className="textParagraph">
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet. Maecenas faucibus mollis interdum. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum
                sociis natoque penatibus et magnis dis parturient montes. Cum
                sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Maecenas faucibus mollis interdum.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum.
              </p>
            </div>
          </div>
          <h2 className="textMain">
            Llama al (347) 555-1234 para reservar un salón para tu banquete o
            fiesta.
          </h2>
        </InfoSectionWrapper>
      </Section>
    )
  }
}

const InfoSectionWrapper = styled.div`
  .icons {
    border: 1px solid red;
    align-items: center;
    width: 30rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  .icon {
    color: ${styles.colors.mainGrey};
    margin: 4px;
    font-size: 1.3rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  width: 90%;
  margin: 2rem auto;
  text-align: center;
  .text {
    padding-bottom: 1rem;
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  .addInfo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1rem;
    margin-top: 3rem;
    grid-gap: 3rem;
    color: ${styles.colors.mainBlack};
  }
  .textMain {
    padding-top: 3rem;
    color: ${styles.colors.mainGrey};
  }
  .textParagraph {
    margin-top: 1rem;
    word-spacing: 0.2rem;
    font-size: 0.8rem;
    color: ${styles.colors.mainBlack};
  }
  .textSubtitle {
    margin-top: 1rem;
    color: ${styles.colors.mainGrey};
  }

  @media (min-width: 768px) {
    width: 70%;
    .icons {
      width: 30rem;
    }
  }
  @media (min-width: 992px) {
    width: 80%;
    .icons {
      width: 30rem;
    }
  }
`
