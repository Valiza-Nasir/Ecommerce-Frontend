import React from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "../@commonComponents/SingleProduct";
import { earingCategory } from "../../@api/category/earingcategory/earingCategory";
import { fetchData } from "../../@api/fetchData/fetchData";
import styled from "styled-components";
import Card from "../card/Card";

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px auto 100px; 
  padding: 0 15px;
  @media (max-width: 768px) {
    gap: 15px;
  justify-content: center; 
  }
`;

const Heading = styled.h2`
  color: #000000;
  font-size: 30px;
  font-family: "Cinzel", serif;
  margin: 63px auto 30px;
  text-align: center;
  padding: 0 15px;

  @media (min-width: 768px) {
    font-size: 45px;
    text-align: left;
  }
`;

function PopularDetail() {
  const { id } = useParams();
  const product = fetchData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <SingleProduct
        image={product.image}
        title={product.title}
        category={product.category}
        price={product.price}
        description={product.description}
        paragraph={product.paragraph}
        id={product.id}
      />
      <Heading>Related Products</Heading>
      <MainContainer>
        {earingCategory.length > 0 ? (
          earingCategory.map((item) => (
            <Card key={item.id} image={item.image} title={item.title} price={item.price} />
          ))
        ) : (
          <p>No Data is Present</p>
        )}
      </MainContainer>
    </>
  );
}

export default PopularDetail;