import React from "react";
import styled from "styled-components";
import { ThemedContainer } from "../../Themes/DarkTheme";
import Heading from "../../Components/Heading";
import { Container, Row, Col } from "react-bootstrap";

const DEFAULT_CHEFS = [
  {
    imageUrl:
      "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/2494654/pexels-photo-2494654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
];

const ImageSection = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <Container fluid className="d-flex justify-content-center">
            {DEFAULT_CHEFS.map(chef => (
              <Col>
                <SliderPortrait src={chef.imageUrl} />
              </Col>
            ))}
          </Container>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <Portrait src={DEFAULT_CHEFS[0].imageUrl} />
        </Col>
      </Row>
    </Container>
  );
};

const Portrait = styled.img`
  height: 45vw;
  width: 30vw;
  margin-top:3vw;
`;

const SliderPortrait = styled.img`
  height: 10vw;
  width: 10vw;

`;

export default ImageSection;