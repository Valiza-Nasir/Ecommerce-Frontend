import React from 'react';
import styled from 'styled-components';
import { FaEye } from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri";
import cartStore from '../../mobx/cartStore';
import { observer } from 'mobx-react-lite';
import { Tooltip } from 'react-tooltip';
import Modal from '../../pages/modal/Modal';
import ModalStore from '../../mobx/ModalStore';
const Heading = styled.h2`
  font-size: 26px;
  color: #000000;
  font-family: 'Cinzel', serif;
  margin: 0px 0px 13px;
  line-height: 1em;
  cursor: pointer;
  @media (max-width:1080px){
  font-size: 20px;
  }
   @media (max-width:925px){
  font-size: 16px;
  }
   @media (max-width:644px){
  font-size: 12px;
  }
    @media (max-width:480px){
  font-size: 20px;
  }
    @media (max-width:380px){
  font-size: 12px;
  }
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 
  max-width: 306px;
  gap: 5px;
  position: relative;

  &:hover .icon-container {
    opacity: 1;
  }

  img {
    width: 100%;
    height: auto; 
    object-fit: cover;
    cursor: pointer;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%; /* Ensures full width */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Prevents any overflow */
`;

const IconContainer = styled.div`
  position: absolute;
  top: 5%;
  right: 8%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease, right 0.3s ease;
`;

const IconButton = styled.div`
  background:white;
  color: #000000B3;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
`;

const Span = styled.span`
  margin-top: -20px;
  color: #000000B3;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  @media (max-width:644px){
  font-size: 12px;
  }
    @media (max-width:480px){
  font-size: 12px;
  }
     @media (max-width:380px){
  font-size:10px;
  }
`;
const SaleButton=styled.div`
position:absolute;
top:2%;
left:5%;
background-color:white;
color:black;
padding:5px 13px;
font-size:13px;
border-radius:20px;
font-weight:500;
cursor:pointer;
`
const MainSaleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SalePrice = styled.span`
  text-decoration: line-through;
  color:gray;
  font-size: 16px;
  font-family:"Roboto",sans-serif;
  font-weight:thin;
`;
const DiscountedPrice = styled.span`
  color:rgba(0,0,0,0.7);
   font-size: 16px;
   font-family:"Roboto",sans-serif;
`;
const MainContainer = styled.div``;
const Card=observer(({ image, title, price,id,description,paragraph,category,onClick,sale,discount })=>{
  const handleClick=(event,id,image,price,title)=>{
    event.stopPropagation()
    cartStore.addProductData({id,image,price,title})
    }
    const handleModal=(event,id,image,price,title,description,category,paragraph)=>{
      event.stopPropagation();
      ModalStore.openModal({id,image,price,title,description,category,paragraph})
    }
  return (  
  <>
  <ContentDiv onClick={onClick}>
      <ImageContainer>
        <img src={image} alt='Random Image' />
        <IconContainer className="icon-container">
          <IconButton>
            <RiShoppingBasketFill data-tooltip-id="cart-tooltip" data-tooltip-content="Add to cart" size={20} onClick={(event)=>handleClick(event,id,image,price,title)} />
            <Tooltip id="cart-tooltip"  />
          </IconButton>
          <IconButton>
            <FaEye  data-tooltip-id="eye-tooltip" data-tooltip-content="Quick View" size={20} onClick={(event)=>handleModal(event,id,image,price,title,description,category,paragraph)}/>
            <Tooltip id="eye-tooltip"  />

          </IconButton>
        </IconContainer>
        
          {sale&& ( <SaleButton onClick={(e)=>e.stopPropagation()}>
            <p>Sale!</p>
            </SaleButton>)}
          
      </ImageContainer>

      <MainContainer>
  <Heading onClick={() => handleClick(id)}>{title}</Heading>
  <MainSaleDiv>
    {sale && <SalePrice>{discount}</SalePrice>}
    <DiscountedPrice>${price}</DiscountedPrice>
  </MainSaleDiv>
</MainContainer>
    </ContentDiv>
  <Modal/>
  </>

  )
})
export default Card;
