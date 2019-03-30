import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"

export default function MailForm() {
  return (
    <MailFormWrapper>
      <form className="item item-3 submission-form">
        <h5>
          Para negocios,dudos o comentarios, tambien puede usar este formulario:
        </h5>
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" />
        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" />
        <label for="email">Email</label>
        <input type="email" id="email" />
        <label for="phone">Telephone</label>
        <input type="tel" id="phone" />
        <label for="message">Message</label>
        <textarea id="message" />
        <input type="submit" value="Send" id="sendBtn" />
      </form>
    </MailFormWrapper>
  )
}
const MailFormWrapper = styled.form`
  color: ${styles.colors.mainBlack};
  .submission-form {
    max-width: 500px;
    margin: 2rem auto;
    border: 2px solid ${styles.colors.mainYellow2};
    padding: 2rem;
    border-radius: 5px;
    label {
      display: block;
      padding: 1rem 0 0.25rem;
      text-transform: uppercase;
      font-size: 14px;
    }
    input,
    textarea {
      display: block;
      width: 100%;
      border: 2px solid ${styles.colors.mainGrey};
      padding: 0.5rem;
      font-size: 18px;
      border-radius: 5px;
    }
  }

  #sendBtn {
    border: 0;
    background: ${styles.colors.mainGrey};
    padding: 0.5rem;
    color: white;
    margin: 1rem 0;
    width: 9rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s background ease;
    &:hover {
      background: #3498db;
    }
  }
`
