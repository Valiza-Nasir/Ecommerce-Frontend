import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import hero from "../../assets/images/about/hero.jpg";

const BannerContainer = styled.div`
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 140%;
  min-height: 120vh;
  display: flex;
  align-items: center;
  justify-content: start;
  color: black;
  text-align: left;
  padding: 20px;

  @media (max-width: 1024px) {
    min-height: 70vh;
    padding: 40px;
    background-size: 160%;
  }

  @media (max-width: 768px) {
    min-height: 60vh;
    padding: 30px;
    background-size: 180%; 
  }

  @media (max-width: 480px) {
    min-height: 80vh
    padding: 20px;
    background-size: 200%; 
  }
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 550px;
  color: black;
  gap: 20px;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding-left: 10px; 
    gap:5px;
  }
     @media (max-width: 1024px) {
gap:10px;
  }

`;

const HeadingThree = styled.h3`
  color: black;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 16px;
  }
    @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const HeadingOne = styled.h1`
  font-size: 65px;
  font-weight: 300;
  line-height: 1.1;
  text-align: left;
  margin: 0;
  padding: 0;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    font-size: 60px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    line-height: 1.2; /* Improve line spacing on very small screens */
  }
`;

const Para = styled.p`
  color: rgb(85, 84, 84);
  font-size: 16px;
  max-width: 500px;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 10px;
    margin-top:20px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-top:10px;

  }
`;

const Button = styled(NavLink)`
  border: 1px solid black;
  padding: 12px 24px;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size:14px;
  }
    @media (max-width: 768px) {
    padding: 8px 10px;
    font-size:12px;
  }
`;

function Banner() {
  return (
    <BannerContainer>
      <ContentDiv>
        <HeadingThree>New collection</HeadingThree>
        <HeadingOne>The New Ring Sensation</HeadingOne>
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Para>
        <Button to="/">Shop Now</Button>
      </ContentDiv>
    </BannerContainer>
  );
}

export default Banner;