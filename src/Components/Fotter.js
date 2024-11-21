import React from "react"
import { Container } from "react-bootstrap"

const Footer = ({ className }) => (
  <Container className={className} fluid>
    <Container className="footer-container">
      <p>Веб-приложение было разработано в ходе практики</p>
    </Container>
  </Container>
)

export default Footer
