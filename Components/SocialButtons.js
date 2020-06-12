import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
  faYoutube,
  faPinterest
} from "@fortawesome/fontawesome-free-brands";

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
  text-align: center;

  &:hover {
    color: black;
    background: #deb150;
    border: 1px solid #deb150;
  }
`;

const SocialButton = ({ icon }) => (
  <IconContainer>
    <FontAwesomeIcon icon={icon} />
  </IconContainer>
);

const SocialButtons = () => {
  return (
    <>
      <SocialButton icon={faFacebookF} />
      <SocialButton icon={faTwitter} />
      <SocialButton icon={faGooglePlusG} />
      <SocialButton icon={faYoutube} />
      <SocialButton icon={faPinterest} />
    </>
  );
};

export default SocialButtons;