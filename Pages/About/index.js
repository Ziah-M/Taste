import React from "react";
import styled from "styled-components";
import Heading from "../../Components/Heading";
import { ThemedContainer } from "../../Themes/DarkTheme";
import { AboutCard } from "../../Components/Card";
import { Container, Row, Col } from "react-bootstrap";
import {
  faAddressCard,
  faBars,
  faClockO,
  faGlobe,
  faPictureO,
  faGem,
  faUsers,
  faPizzaSlice,
  faMotorcycle
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//TODO - media query to hide right column (with image) on small screens

const TEXT = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries simply dummy text of the printing standard dummy text eve and typesetting`;
const SUBTITLE = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has.
`;

const sideImage =
  "https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const About = () => {
  return (
    <ThemedContainer>
      <Container fluid style={{ minHeight: "100vh" }}>
        <Row>
          <Col
            md={7}
            sm={12}
            style={{
              overflow: "hidden",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly"
            }}
          >
            <Row>
              <Col xs={12} className="d-flex justify-content-center">
                <Heading topHeading="Our story" bottomHeading="About Taste" />
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="d-flex justify-content-center">
                <SubHeading>{SUBTITLE}</SubHeading>
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="d-flex justify-content-center">
                <P>{TEXT}</P>
              </Col>
            </Row>

            <Row>
              <Col xs={6} sm={4}>
                <AboutCard text="Free Delivery">
                  <FontAwesomeIcon icon={faMotorcycle} />
                </AboutCard>
              </Col>
              <Col xs={6} sm={4}>
                <AboutCard text="Fresh Ingredients">
                  <FontAwesomeIcon icon={faPizzaSlice} />
                </AboutCard>
              </Col>
              <Col sm={4} className="d-none d-sm-block">
                <AboutCard text="Highest Quality">
                  <FontAwesomeIcon icon={faGem} />
                </AboutCard>
              </Col>
            </Row>
          </Col>
          <Col className="d-none d-md-block" md={5}>
            <Img src={sideImage} />
          </Col>
        </Row>
      </Container>
    </ThemedContainer>
  );
};

const Img = styled.img`
  height: 100vh;
  width: 100%;
`;

const SubHeading = styled.h2`
  text-align: center;
  color: ${props => props.theme.primaryAccent};
`;

const P = styled.p`
  text-align: center;
  color: ${props => props.theme.textDark};
`;

export default About;