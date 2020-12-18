import React from "react"
import { Container } from "../../styles/globalStyles"
import { FooterNav } from "../../styles/footerStyles"
import FooterContents from "../FooterContents/FooterContents"

const Footer = () => {
  return (
    <FooterNav>
      <Container>
        <FooterContents />
      </Container>
    </FooterNav>
  )
}

export default Footer
