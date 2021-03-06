import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Header = () => (
  <Container fluid style={{ maxHeight: '25px' }}>
    <Row>
      <Col>Open 7 days: 11:00 - 20:00</Col>
      <Col className="ml-auto">1800 012 345</Col>
    </Row>
  </Container>
)

export default Header
