import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"

export default class ExtrainfoSection extends Component {
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
          <p className="text">
            Contactanos por Facebook, Twitter e Instagram en los siguientes
            enlaces:
          </p>

          <div className="icons">
            {this.state.icons.map(item => {
              return (
                <a
                  href={item.path}
                  key={item.id}
                  className="icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              )
            })}
          </div>

          <hr />

          <div className="addInfo">
            <div>
              <h3 className="textMain">POR TELÉFONO</h3>
              <p className="textParagraph">
                ¿Prefieres hacer tu reserva por teléfono? Llama al (347)
                555-1234 entre las 10 a. m. y el mediodía.
              </p>
            </div>
            <div>
              <h3 className="textMain">EVENTOS SOCIALES Y FIESTAS PRIVADAS</h3>
              <p className="textParagraph">
                Los servicios de Catering y Eventos son oportunidades que nos
                permiten trabajar más de cerca con nuestros comensales,
                ocasiones en las que podemos compartir nuestra dedicación a
                celebrar de nuevas y emocionantes maneras.
              </p>
            </div>
          </div>
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
  }
  .textParagraph {
    margin-top: 1rem;
    word-spacing: 0.2rem;
    font-size: 0.8rem;
    color: ${styles.colors.mainGrey};
  }
  @media (min-width: 360px) {
    width: 70%;
    .icons {
      width: 10rem;
    }
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
