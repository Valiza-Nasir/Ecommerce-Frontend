import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
width:20%;
gap:5px;
img{
width:95px;
}
  h5 {
    font-size: 22px;
    color:#000000;
    font-weight: thin;
    font-family: 'Cinzel', serif;
    margin:0px 0px 8px;
    text-transform:uppercase;
  }
  p{
    color:#000000B3;
    font-size:15px;
    font-family:"Roboto",sans-serif;
    font-weight:thin;
    }

  @media (max-width: 1024px) {
    width: 40%;  /* Allow better spacing for medium screens */
  }

  @media (max-width: 768px) {
    width: 80%;  /* Full width for smaller screens */
    
    h1 {
      font-size: 50px;
    }

    h2 {
      font-size: 24px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;  /* Full width on small devices */
    
    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }
`;

function SimpleCard({ logo, title, paragraph }) {
  return (
    <Container>
      <img src={logo} alt="" />
      <h5>{title}</h5>
      <p>{paragraph}</p>
    </Container>
  );
}

export default SimpleCard;
