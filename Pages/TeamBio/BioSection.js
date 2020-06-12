import React from "react";
import styled from "styled-components";
import { ThemedContainer } from "../../Themes/DarkTheme";
import Heading from "../../Components/Heading";
import { Container, Row, Col } from "react-bootstrap";

const BioSection = () => {
  return (
    <Container fluid>
      <Row>
        <HeadingCol xs={12}>
          <Name>John Dough</Name>
        </HeadingCol>
      </Row>
      <Row>
        <SubheadingCol xs={12}>
          <Position>Head Chef</Position>
        </SubheadingCol>
      </Row>
      <Row>
        <TextOneCol xs={12}>
          <b>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, temporibus! Minus repudiandae facere id iure?
          </b>
        </TextOneCol>
      </Row>
      <Row>
        <TextTwoCol xs={12}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          harum consequatur magnam, aut eum pariatur voluptatum unde suscipit
          est, sequi quibusdam similique sed perferendis aperiam, ipsam itaque.
          Quaerat rerum voluptatum eum adipisci voluptatem corporis cum, impedit
          architecto debitis illum magni!
        </TextTwoCol>
      </Row>
      <Row>
        <SocialCol xs={12}>
          <SocialButtons />
        </SocialCol>
      </Row>
    </Container>
  );
};

const Name = styled.h1`
  color: #deb150;
`;

const Position = styled.h3`
  color: #deb150;
`;

const HeadingCol = styled(Col)`
  margin: 0px 0 10px 0;
  text-align: center;
`;

const SubheadingCol = styled(Col)`
  margin: 0 0;
  text-align: center;
`;

const SocialCol = styled(Col)`
  margin: 15px 0;
  text-align: center;
`;

const TextOneCol = styled(Col)`
  margin: 15px 0;
  text-align: center;
`;

const TextTwoCol = styled(Col)`
  margin: 15px 0;
  text-align: center;
`;

const IconContainer = styled.div`
  border-radius: 50%;
  border: 1px solid #434448;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: #a8a8a8;
  width: 45px;
  height: 45px;
  margin: 0px 5px;

  &:hover {
    color: black;
    background: #deb150;
    border: 1px solid #deb150;
  }
`;

const SocialButtons = () => {
  return (
    <div>
      <IconContainer>F</IconContainer>
      <IconContainer>T</IconContainer>
      <IconContainer>G</IconContainer>
      <IconContainer>P</IconContainer>
      <IconContainer>Y</IconContainer>
    </div>
  );
};

export default BioSection;
