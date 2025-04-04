import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logoImage from '../../assets/images/logofolder/logo-regular.png'

const FooterContainer = styled.footer`
  background-color: #faf5f0;
  padding: 80px 80px 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-family: Arial, sans-serif;
  color: #333;
  border-top:1px solid #ede7e1;
  border-bottom:1px solid #ede7e1;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    padding: 60px 40px;
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 50px 20px;
    justify-content: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  img {
    width: 110px;
    @media (max-width: 768px) {
      margin: 0 auto;
    }
  }

  h6 {
    color: #000000;
    line-height: 1.25em;
    font-weight: normal;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    color: gray;
  }

  a {
    font-size: 15px;
    color: gray;
  }

  @media (max-width: 1024px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LastFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background-color: #faf5f0;

  p {
    font-size: 15px;
    color: #000000B3;
    font-family: 'Roboto', sans-serif;
    padding: 10px 30px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterSection>
          <NavLink to='/'>
            <img src={logoImage} alt="logo" />
          </NavLink>
        </FooterSection>
        <FooterSection>
          <h6>About us</h6>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </FooterSection>
        <FooterSection>
          <h6>Shop</h6>
          <NavLink to="/ring">Rings</NavLink>
          <NavLink to="/bracelet">Bracelets</NavLink>
          <NavLink to="/earrings">Earrings</NavLink>
          <NavLink to="/necklaces">Necklaces</NavLink>
        </FooterSection>
        <FooterSection>
          <h6>Address</h6>
          <NavLink>123 Fifth Avenue, New York, NY 10160</NavLink>
          <NavLink>contact@info.com</NavLink>
          <NavLink>929-242-6868</NavLink>
        </FooterSection>
      </FooterContainer>
      <LastFooter>
        <p>Copyright © 2025 Blingg Jewelry | Powered by Blingg Jewelry</p>
      </LastFooter>
    </>
  );
}

export default Footer;