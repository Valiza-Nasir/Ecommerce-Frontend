import React from "react";
import { NavLink, useParams } from "react-router-dom";
import SingleProduct from "../../@commonComponents/SingleProduct";
import { earingCategory } from "../../../@api/category/earingcategory/earingCategory";
import styled from "styled-components";
import Card from "../../card/Card";
const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:20px;
    align-items: center;
    margin:auto;
    margin-top:30px;
    margin-left:30px;
    
    margin-bottom: 100px;
    @media (max-width: 768px) {
      gap: 20px;
      justify-content: space-between;
    }
  `;
  const Heading=styled.h2`
  color:#000000;
  font-size:45px;
  font-family:"Cinzel",serif;
   margin-left:30px;
   margin-top:63px;

  
  `
function EarnningDetail() {
  const { id } = useParams();
  const product = earingCategory.find((item) => item.id === parseInt(id)); 
  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <>
    <SingleProduct image={product.image} title={product.title} category={product.category} price={product.price} description={product.description} paragraph={product.paragraph} id={product.id} images={product.images} />               
    <Heading>
    <h1>Related Products</h1>
    </Heading>
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

export default EarnningDetail;
