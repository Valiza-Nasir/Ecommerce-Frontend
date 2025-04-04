import React from "react";
import styled from "styled-components";
import Card from "../card/Card";
import { fetchData } from "../../@api/fetchData/fetchData";
import { useNavigate } from "react-router-dom";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px 0; /* Adjusted margin for better spacing */
  text-align: center;

  @media (max-width: 768px) {
    margin: 40px 0; /* Adjusted margin for smaller screens */
  }
`;

const HeadingThree = styled.h6`
  font-size: 14px;
  font-family: "Roboto Condensed", sans-serif;
  color: #000000B3;
`;

const HeadingOne = styled.h2`
  font-size: 2rem; /* Adjusted base font size */
  font-weight: normal;
  font-family: "Cinzel", serif;
  color: #000000;

  @media (max-width: 1024px) {
    font-size: 1.8rem; /* Slightly reduced font size for medium screens */
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 15px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const LineContainer = styled.hr`
  background-color: #b37b57;
  width: 4%;
  height: 2px;
  margin-top: 20px;
`;

function PopularProducts() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`populardetail/${id}`);
  };

  return (
    <>
      <Main>
        <HeadingThree>Popular Products</HeadingThree>
        <HeadingOne>TRENDING NOW</HeadingOne>
        <LineContainer />
      </Main>
      <MainContainer>
        {fetchData.length > 0 ? (
          fetchData.map((item) => (
            <Card key={item.id} image={item.image} title={item.title} price={item.price} id={item.id}description={item.description} paragraph={item.paragraph}category={item.category} onClick={() => handleClick(item.id)} sale={item.sale} discount={item.discount}
            />
          ))
        ) : (
          <p>No Data is Present</p>
        )}
      </MainContainer>
    </>
  );
}

export default PopularProducts;