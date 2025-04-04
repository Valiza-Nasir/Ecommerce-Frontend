import React from 'react';
import styled from 'styled-components';
import SimpleCard from '../simplecard/SimpleCard';
import star from '../../assets/icons/star.png'
import bus from '../../assets/icons/bus.png'
import location from '../../assets/icons/location.png'
import text from '../../assets/icons/text.png'
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 55px 0px 0px 0px;
  gap: 15px;
  h6{
  color:#000000B3;
  font-size:14px;
  font-family:"Roboto Condensed",sans-serif;
  }
  h2{
  color:#000000;
  font-size:45px;
  font-family:"Cinzel" , serif;
  }
h4{
color:#000000B3;
font-size:26px;
font-family:"Cinzel" , serif;
font-weight: normal;
text-transform:uppercase;
text-align:center;
}

  @media (max-width: 768px) {
  h2{
  font-size:25px;
  }
  h4{
  font-size:22px;
  text-align:justify;
  padding:0px 45px 0px 28px;
  color:gray;
  }
  }
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  flex-wrap: wrap;
  margin: 80px 20px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
    margin: 60px 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 40px 10px;
  }
`;
const LineContainer=styled.hr`
background-color:#b37b57;
width:4%; 
height:2px;
margin-top:25px;
`

function BusinessCard() {
  return (
    <>
      <MainContainer>
        <h6>best in business</h6>
        <h2>WHY CHOOSE US</h2>
        <h4>
          Cras malesuada dolor sit amet est egestas <br /> ullamcorper. Nullam in tortor mi. Maecenas <br /> 
          vulputate libero
        </h4>
        <LineContainer />
      </MainContainer>
      <CardContainer>
        <SimpleCard logo={star} title={'Big Discounts'} paragraph={'Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.'} />
        <SimpleCard logo={bus} title={'Free Shipping'} paragraph={'Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.'} />
        <SimpleCard logo={location} title={'Secure Payments'} paragraph={'Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.'} />
        <SimpleCard logo={text} title={'Order Tracking'} paragraph={'Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.'} />
      </CardContainer>
    </>
  );
}

export default BusinessCard;
