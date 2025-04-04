import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Button from './Button';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import cartStore from '../../mobx/cartStore';
import InnerImageZoom from 'react-inner-image-zoom';
const SecondContainer = styled.div`
  max-width: 1000px;
  margin: 10px 30px 18px 275px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  p{
  font-family:"Roboto",sans-serif;
  color:#000000B3;
  font-size:15px;
  
  }
   @media (max-width:1098px){
  flex-wrap:wrap;
   gap:30px;
  margin: 10px 30px 18px 250px;

  }
    @media (max-width:998px){
  flex-wrap:wrap;
   gap:30px;
  margin: 10px 30px 18px 200px;
  }
     @media (max-width:768px){
  flex-wrap:wrap;
   gap:30px;
  margin: 10px 30px 18px 30px;
  }
`;

const Titles = styled.h3`
  font-size: 20.1px;
  font-family:"Roboto",sans-serif;
  padding:20.1px 0px 0px;
  color:#000000B3;
`;

const Rating = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
  font-size:18px;
  font-family:"Roboto",sans-serif;
  color:#000000B3;
  
`;

const Star = styled.span`
  font-size: 20px;
  color: #ccc;
  &:hover,
  &:hover ~ span {
    color: #f5c518;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
`;
const TextAreaContainer=styled.div`
label{
color:#000000B3;
font-size:18px;
font-family:"Roboto",sans-serif;
padding:0px 9px 0px 0px;
}
`
const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  outline:none;
  height:90px;
  color:#000000B3;

  &:focus{
  border:1px dotted black;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline:none;
  color:#000000B3;
`;

const CheckboxLabel = styled.label`
  color:#000000B3;
  font-size:13.8px;
  font-family:"Roboto",sans-serif;
  display: flex;
  gap:10px;
  align-items: center;
  margin-top: 10px;
`;

const Buttons=styled.button`
  border:1.5px solid #000000B3;
  font-size:14px;
  padding:10px 30px;
  color:#000000B3;
  margin:15px 0px 6px;
  text-transform:uppercase;
  &:hover{
  background-color:black;
  color:white;
  font-weight:bold;
  }
  `
const Container = styled.div`
  display: flex;
  gap: 15px;
  padding: 23px;
  margin: 30px 0px;
  justify-content: space-between;
  flex-wrap:wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;


  }
`;

const ImageDiv = styled.div`
  width: 100%;
  max-width: 500px;
  height: 570px;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width:1100px){
    max-width:800px;
  height: 570px;

    img{
    width: 100%;
    height: 100%;
    }
    }
    @media (max-width:628px){
    max-width:400px;
    height:510px
    }
    @media (max-width:480px){
    max-width:300px;
    height:400px;
    }
     @media (max-width:445px){
     max-width:280px;
    height:320px;
    }
     @media (max-width:380px){
     max-width:320px;
     height:230px;
    }
`;
const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 630px;
  margin-left: 40px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
const CartDiv=styled.div`
`
const Title=styled.div`
`
const Price=styled.div`
`
const RowImage = styled.div`
  display: flex;
  flex-direction:column;
  gap: 10px;
  width: 100%;
  max-width: 130px;
  img {
    width: 100%;
    height: 135px;
  }
    @media (max-width:628px){
    max-width:125px;
    img{
    height:120px;
    }
    }
     @media (max-width:480px){
    max-width:100px;
    img{
    height:92px;
    }
    }
      @media (max-width:445px){
    max-width:90px;
    img{
    height:72px;
    }
    }
      @media (max-width:380px){
    max-width:60px;
    gap:5px;
    img{
    height:54px;
    }
    }
`
const MainContainer=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`
const IconDiv=styled.div`
display:flex;
gap:8px;
a{
border:1px solid #000000B3;
padding:5px; 
background-color:transparent;
color:#000000B3;
&:hover{
background-color:black;
color:white;
}
}

`
const CategoryDiv=styled.div`
display:flex;
gap:3px;
margin-top:5px;
a{
color:#000000B3;
font-size:13.5px;
font-family:"Roboto",sans-serif;
}
span{
color:#000000B3;
font-size:13.5px;
font-family:"Roboto",sans-serif;
}

`
const FirstContainer=styled.div`
display:flex;
gap:5px;
color:#000000B3;
font-size:13.8px;
margin:0px 0px 14px;
font-family: 'Roboto', sans-serif;
font-weight: 300;
span{
text-transform:capitalize;
}
`
const SecondDiv=styled.div`
display:flex;
flex-direction:column;
gap:10px;
a{
color:#000000B3;
}
h1{
color:#000000;
font-size:40px;
margin:0px 0px 20px;
font-family:"Cinzel",serif;
@media(max-width:480px){
font-size:25px;
}
}
h3{
color:#A86E3B;
font-size:22.5px;
font-family:"Roboto",sans-serif;
font-weight:bold;
}
span{
color:#000000B3;
font-size:15px;
font-family:"Roboto",sans-serif;
}
p{
color:#000000B3;
margin:0px 0px 12px;
font-size:15.5px;
font-weight:thin;
font-family:"Roboto",sans-serif;
}

`
const RatingContainer=styled.div`
margin:20px 0px 15px 0px;
display:flex;
label{
color:#000000B3;
font-size:18px;
font-family:"Roboto",sans-serif;
padding:0px 9px 0px 0px;
font-weight:200;
}
`

const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 15px; 
`;
const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  label{
  color:#000000B3;
  font-size:13.68px;
  font-family:"Roboto",sans-serif;
  font-weight:normal;
  }

`;
const HeadLine=styled.div`
display:flex;
align-items:center;
gap:3px;
`
const ButtonsDiv=styled.div`
display:flex;
align-items:center;
a{
border:1px solid #000000B3;
padding:5px; 
background-color:transparent;
color:#000000B3;
&:hover{
background-color:black;
color:white;
}
}
button{
border:1px solid #e5cccc;
padding:0px 12px; 
font-weight:bold;
background-color:transparent;
color:black;
text-align:center;
font-size:20px;
&:hover{
background-color:black;
color:white;
}
}
p{
border:1px solid #e5cccc;
padding:1.5px 12px; 
font-size:18px;
color:gray;
}
`
const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
`;
const ThirdContainer = styled.div`
display:flex;
gap:120px;
  margin: 0px 30px;
  background: #fff;
  margin-top:35px;
  @media (max-width:1098px){
  flex-wrap:wrap;
  gap:30px;
  }
`;
const ReviewsContainer = styled.div`
  display:flex;
  gap:120px;
  margin: 0px 30px;
  background: #fff;
  margin-top:35px;
  @media (max-width:1098px){
  display:flex;
  flex-direction:column;
  gap:10px;
  }
`;
const SectionTitle = styled.h3`
  font-size: 20.1px;
  color:#000000B3;
  font-family:"Cinzel",serif;
  text-transform: uppercase;
`;

const Text = styled.p`
    color:#000000B3;
   font-family:"Roboto",sans-serif;
   font-size:14px;
   font-weight:thin;
   line-height:27px; 
`;
const NoReviews = styled.p`
   color:#000000B3;
   font-family:"Roboto",sans-serif;
   font-size:14px;
   font-weight:thin;
   line-height:27px;
   margin-left:12px;
`;
const MainImageDiv=styled.div`
display:flex; 
gap:15px;
`
const HeadLines=styled.hr`
margin:20px 0px 15px 0px;

`
const SingleProduct=observer(({id,image,title,description,paragraph,price,category,images})=>{
  const handleClick=(id,image,title,price)=>{
   cartStore.addProductData({id,image,title,price})
   cartStore.count+=1;
  }
  const product=cartStore.todo.find(item=>item.id===id)

  return (
    <>
    <Container>
     <MainImageDiv>
     <RowImage>
      {images.map((value,index)=>{
        console.log('value',value)
        return <>
         <img src={value} alt="" />
        </>
      })}
      
     </RowImage>
     <ImageDiv>
      <img src={image} alt="Product Image" />
      {/* <InnerImageZoom src={image} 
           zoomSrc={image} 
           zoomType="hover"
           zoomScale={1.5}
           zoomPreload={true}    
           style={{ width: "100%", height: "auto" }}   
           /> */}
     </ImageDiv>
     </MainImageDiv>
     <ContentDiv>
       <MainContainer>
         <FirstContainer>
         <NavLink>Home /</NavLink>
         <NavLink to={`/${category.toLowerCase()}`}>{category} /</NavLink>
         <span>{title}</span>
         </FirstContainer>
         <IconDiv>
           <NavLink><IoIosArrowBack /></NavLink>
           <NavLink><IoIosArrowForward /> </NavLink>
         </IconDiv>
         </MainContainer>
         <SecondDiv>
       <NavLink to={`/${category.toLowerCase()}`}>{category}</NavLink>
       <h1>{title}</h1>
       <HeadLine>
       <h3>{price}</h3><span> & Free Shipping</span>
       </HeadLine>
       <p>{description}</p>
        <p>{paragraph}</p>
        </SecondDiv>
        <ButtonContainer>
         <ButtonsDiv>
           <button onClick={()=>cartStore.decrement(id)}>-</button>
           <p>{product ? product.quantity : 0}</p>
           <button  onClick={()=>cartStore.increment(id)}>+</button>
         </ButtonsDiv>
           <CartDiv>
             <Button title={'ADD TO CART'} onClick={()=>handleClick(id,image,title,price)}/>
           </CartDiv>
        </ButtonContainer>
        <HeadLines/>
        <CategoryDiv>
         <span>Category:</span>
         <NavLink to={`/${category.toLowerCase()}`}>{category}</NavLink>
        </CategoryDiv>
     </ContentDiv>

   </Container>
   <ThirdContainer>
     <SectionTitle>Description</SectionTitle>
     <Text>
     Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod.

     </Text>
     </ThirdContainer>
     <ReviewsContainer>
       <SectionTitle>Reviews (0)</SectionTitle>
       <NoReviews>There are no reviews yet.</NoReviews>
     </ReviewsContainer>

   <SecondContainer>
     <Titles>Be the first to review "{title}"</Titles>
     <p>Your email address will not be published. Required fields are marked *</p>
     <RatingContainer>
     <Label>Your rating *</Label>
     <Rating>
       {[...Array(5)].map((_, i) => (
         <Star key={i}>★</Star>
       ))}
     </Rating>
     </RatingContainer>
     <TextAreaContainer>
     <label>Your review *</label>
     <TextArea rows="5" />
     </TextAreaContainer>
    
     <InputDiv>
 <InputContent>
   <Label>Name *</Label>
   <Input type="text" />
 </InputContent>

 <InputContent>
   <Label>Email *</Label>
   <Input type="email" />
 </InputContent>
</InputDiv>
     
     <CheckboxLabel>
       <input type="checkbox" /> Save my name, email, and website for next time.
     </CheckboxLabel>
     <Buttons>Submit</Buttons>
   </SecondContainer>
   </>
  )
})




export default SingleProduct