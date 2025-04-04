import React from 'react';
import mainImage from '../../assets/images/bg-01.jpg';
import sideImage from '../../assets/images/sideImage.jpg';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MainContainer = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  margin: 100px 0;
  gap: 50px;
  justify-content:space-between;
  padding:0px 24px;
  @media (max-width: 815px) {
    flex-direction: column;
  }
`;

const ContentContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 15px;

  h6 {
    font-size: 14px;
   color:black;
   font-family:"Roboto Condensed",sans-serif;
   }

  h2 {
   font-size: 38px;
   margin:0px 0px 5px;
   font-family:"Cinze" , serif;
   }

  p {
  font-size: 15px;
  color: #000000B3;
    font-family:"Roboto",sans-serif;
    @media (max-width:655px){
    font-size:10px;
    }
 }

 a {
  border: 1px solid black;
  padding: 10px 30px;
   background-color: white;
   cursor: pointer;
  width:130px;
  text-align:center;
 &:hover {
   background-color: black;
    color: white;
   }
      span{
      text-transform:uppercase;
      font-size:12px;
      }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 45px;
      line-height: 60px;
    }
   }
`;
const ImageContainer = styled.div`
  position: relative;
  height: auto;

  @media (max-width: 1021px) {
    width: 60%;
    height:450px;
  }
      @media (max-width: 815px) {
    width: 100%;
    height:420px;
  }
`;
const LargeImage = styled.img`
  width: 100%;
  height: auto;
   @media (max-width: 1021px) {
    width: 100%;
    height:100%;
  }
     @media (max-width: 815px) {
   width:100%;
   height:100%;
   object-fit:cover;
  }
`;

const SmallImage = styled.img`
  position: absolute;
  top: 13%;
  right: 45%;
  transform: translateX(-50%);
  width: 70%;
  height: auto;

   @media (max-width: 1021px) {
   top: 5%;
    width: 90%;
    height:400px;
    right: 30%;

  }
  @media (max-width: 815px) {
    top: -80%;
    width: 35%;
    height:350px;
    left: 80%;
  }
     @media (max-width: 705px) {
    width: 30%;
    height:300px;
    left: 80%;
    top: -60%;
  }
     @media (max-width: 670px) {
    width: 25%;
    height:220px;
    left: 80%;
    top: -40%;
  }
       @media (max-width: 571px) {
    width: 25%;
    height:200px;
    left: 85%;
    top: -40%;
  }
      @media (max-width: 438px) {
    width: 25%;
    height:150px;
    left: 85%;
    top: -30%;
  }
`;

function UniqueSection() {
  return (
    <MainContainer>
      <ContentContainer>
        <h6>Unique pieces</h6>
        <h2>BE <br/> ALWAYS <br/>ON <br/>TREND</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Ut elit tellus, luctus nec ullamcorper <br/>mattis, pulvinar dapibus leo.
        </p>
        <NavLink><span>shop now</span></NavLink>
      </ContentContainer>
      <ImageContainer>
      <LargeImage src={mainImage} alt="" />
      <SmallImage src={sideImage} alt="" />
      </ImageContainer>
    </MainContainer>
  );
}

export default UniqueSection;
