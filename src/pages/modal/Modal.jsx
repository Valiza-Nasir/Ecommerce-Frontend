import { observer } from 'mobx-react-lite'
import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import ModalStore from '../../mobx/ModalStore'
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  width: 70%;
  max-width: 980px;
  max-height:520px;
  display: flex;
  flex-direction: row;
  position: relative;
 @media(max-width:480px){
 flex-direction:column;
 justify-content:center;
 align-items:center;
 }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -3%;
  right: -1%;
  font-size: 22px;
  cursor: pointer;
  border:1px solid gray;
  background-color:white;
  padding:0px 8px;
  border-radius:50%;
  text-align;center;
`;

const ProductImage = styled.img`
  width: 50%;
  height: auto;
  object-fit:cover;
   @media(max-width:480px){
width:100%;
 }
`;

const ProductDetails = styled.div`
  padding: 20px;
  flex: 1;
  h1{
  color:black;
  font-size:40px;
  font-family:"Cinzel",serfi;
  margin:0px 0px 20px;
  }
  h2{
  color:#A86E3B;
  font-size:22px;
  font-family:"Roboto",sans-serif;
  margin-bottom:10px;
  }
  p{
  font-size:15px;
  font-family:"Roboto",sans-serif;
  color:#000000B3;
  margin:0px 0px 12px;
  }
  span{
  color:#000000B3;
  font-family:"Roboto",sans-serif;
  font-size:15px;
  margin-bottom:10px;
  }
  a{
  font-size:15px;
  color:#000000B3;
  font-family:"Roboto",sans-serif;
  }
   @media (max-width:998px){
   h1{
   font-size:30px;
   }
   h2{
   font-size:15px;
   }
   p{
   font-size:12px;
   }
  }
   @media (max-width:798px){
   h1{
   font-size:20px;
   }
   p{
   font-size:10px;
   }
   }
`;
const CategoryDiv=styled.div`
display:flex;
align-items:center;
 h3{
 color:#000000B3;
 font-size:13.5px ;
 font-family:"Roboto",sans-serif;
 margin:0px 5px 0px 0px;
 }
  a{
color:#000000B3;
 font-size:13.5px ;
 font-family:"Roboto",sans-serif;
  }
`

const Modal=observer(()=>{
  const {modalProduct,modalState,closeModal}=ModalStore;
  return (
    <>  
<ModalOverlay isVisible={modalState}>
      <ModalContent>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <ProductImage src={modalProduct?.image} alt={modalProduct?.title} />
        <ProductDetails>
          <NavLink>{modalProduct?.category}</NavLink>
          <h1>{modalProduct?.title}</h1>
          <h2>{modalProduct?.price} <span>&Free Shipping</span> </h2>
          <p>{modalProduct?.description}</p>
          <p>{modalProduct?.paragraph}</p>
          <CategoryDiv>
          <h3>Category:</h3> <NavLink>{modalProduct?.category}</NavLink>
          </CategoryDiv>
          
        </ProductDetails>
      </ModalContent>
    </ModalOverlay>
    
    </>
  )
})

export default Modal