import React from "react"
import styled from "styled-components"
import { styles, Title } from "../../utils"
import MailForm from "./mailForm"

export default function LocationsInfo() {
  return (
    <InfoSectionWrapper>
      <Title title="Nuestras ubicaciones" message="" />
      <div className="addInfo">
        <div>
          <h3 className="textMain">CONSTITUCION</h3>
          <p className="textParagraph">
            376 Calle sin Nombre Brooklyn, NY — 11231 (718) 555-1234
          </p>
        </div>
        <div>
          <h3 className="textMain">AMSTERDAM</h3>
          <p className="textParagraph">
            47-33 Calle sin Nombre Long Island City, NY — 11101 (347) 555-1234
          </p>
        </div>
        <div>
          <h3 className="textMain">CAMIÓN DE COMIDA</h3>
          <p className="textParagraph">
            25 Calle Sin Nombre Nueva York, NY — 10003 (917) 555-1234
          </p>
        </div>
      </div>
      <hr />
      <div className="formInfo">
        <div>
          <div className="item item-1">
            <h3 className="textMain">CONSULTAS, DUDAS O COMENTARIOS.</h3>
            <p className="textParagraph">(718) 555-1234</p>
            <h7 className="textContactMail">marcador@ejemplo.com</h7>
          </div>
          <hr />
          <div className="item item-2">
            <h3 className="textMain">RELACIONES PÚBLICAS</h3>
            <p className="textParagraph">(718) 555-1234</p>
            <h7 className="textContactMail">marcador@ejemplo.com</h7>
          </div>
        </div>
        <MailForm className="item item-3" />
      </div>
    </InfoSectionWrapper>
  )
}
const InfoSectionWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  text-align: center;
  grid-template-columns: auto;
  .textContactMail {
    color: ${styles.colors.mainYellow2};
    font-weight: bolder;
  }
  .item {
    position: relative;
    margin-top: 1rem;
  }
  .addInfo {
    display: grid;
    margin-top: 3rem;
    grid-gap: 3rem;
    color: ${styles.colors.mainBlack};
  }
  .formInfo {
    margin: 3rem 0;
    display: grid;
    grid-row-gap: 3rem;
    color: ${styles.colors.mainBlack};
  }

  .textParagraph {
    margin: 1rem;
    word-spacing: 0.2rem;
    font-size: 0.8rem;
    color: ${styles.colors.mainGrey};
  }
  @media (min-width: 360px) {
    .addInfo {
      grid-template-columns: 95%;
    }
    .formInfo {
      grid-template-columns: 95%;
      grid-template-columns: 1fr;
    }
    .icons {
      width: 10rem;
    }
  }

  @media (min-width: 768px) {
    width: 80%;
    .addInfo {
      grid-template-columns: 95%;
      grid-template-columns: 1fr 1fr 1fr;
    }
    .formInfo {
      height: 100%;

      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;

      .item-1 {
        padding: 1rem;
        margin-top: 2rem;
      }
      .item-2 {
        margin-top: 2rem;
      }
      .item-3 {
        grid-template-columns: 2/3;
      }
    }
    justify-content: center;
    .icons {
      width: 30rem;
    }
  }

  @media (min-width: 992px) {
    width: 70%;
    .addInfo {
      grid-template-columns: 95%;
      grid-template-columns: 1fr 1fr 1fr;
    }
    .formInfo {
      height: 100%;

      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;

      .item-1 {
        padding: 1rem;
        margin-top: 2rem;
      }
      .item-2 {
        margin-top: 2rem;
      }
      .item-3 {
        grid-template-columns: 2/3;
      }
    }
    justify-content: center;
    .icons {
      width: 30rem;
    }
  }
`
