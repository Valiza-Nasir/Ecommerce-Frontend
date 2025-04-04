import React, { useEffect, useState } from 'react'
import { ringCategory } from '../../../@api/category/ringcategory/ringCategory';
import { NavLink, useNavigate } from 'react-router-dom';
import Card from '../../card/Card';
import styled from 'styled-components';

const MainContent = styled.div`
padding:60px 10px 70px 20px;
display:flex;
flex-direction:column;
`;
const FirstContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  margin: 0 0 10px;
  font-size: 12px;
  color: #777777;

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    font-size: 14px;
  }
`;
const Heading=styled.div`
h1{
color:#000000;
font-size:65px;
margin:0px 0px 65px;
font-family: 'Cinzel', serif;
line-height: 1.4em;
@media (max-width:786px){
font-size:40px;
}
}
`
const ContentContainer=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
@media (max-width:786px){
flex-direction:column;
gap:10px;
align-items:center;

}
p{
font-size:15px;
color:#000000B3;
font-family: 'Roboto', sans-serif;
@media (max-width:786px){
font-size:16.5px;
}
}
`
const OptionContainer = styled.div`
  color: gray;
  order: 1;

  @media (max-width: 768px) {
    order: 2;
    text-align: center;
    width: 100%;
    margin-top: 10px;
  }

  option {
    color: black;
  }
`;
const Select=styled.select`
border:none; 
outline:none;
font-size:14.5px;
padding:7.5px;
background-color:transparent;
font-family: 'Roboto', sans-serif;
font-weight: 300;
max-width:160px;
color:#666666;
margin-right:20px;
&:focus{
border:1px dotted black;
}
option{
font-size:14.5px;
color:#666666;
font-family: 'Roboto', sans-serif;
width:220px;
}
`
const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

function RingCategory() {
  const[data,setData]=useState([...ringCategory]);
  const[sorting,setSorting]=useState('');
  const sortingFunction=()=>{
  let sortedData=[...data];
  if (sorting === 'low-to-high') {
    sortedData.sort((a, b) => Number(a.price.replace(/,/g, '')) - Number(b.price.replace(/,/g, '')));
  } else if (sorting === 'high-to-low') {
    sortedData.sort((a, b) => Number(b.price.replace(/,/g, '')) - Number(a.price.replace(/,/g, '')));
  }
  setData(sortedData)
  }
  useEffect(()=>{
  sortingFunction()
  },[sorting])
  const navigate=useNavigate()
  const handleClick=(id)=>{
  navigate(`/ringdetail/${id}`)
  }
  return (
    <>
    <MainContent>
    <FirstContainer>
      <NavLink to='/'>Home/</NavLink>
      <h1>Rings</h1>
    </FirstContainer>
    <Heading><h1>RINGS</h1></Heading>
    <ContentContainer>
    <p>Showing all {ringCategory.length} results</p>
    <OptionContainer>
    <Select name="" id="" value={sorting} onChange={(e)=>setSorting(e.target.value)}>
      <option value="">Default Sorting</option>
      <option value="popularity">Sort by popularity</option>
      <option value="rating">Sort by average rating</option>
      <option value="latest">Sort by latest</option>
      <option value="low-to-high">Sort by price: low to high</option>
      <option value="high-to-low">Sort by price: high to low</option>
    </Select>
    </OptionContainer>
    </ContentContainer>
    <MainContainer>
            {data.length > 0 ? (
              data.map((item) => (
                <Card key={item.id} image={item.image} title={item.title} price={item.price} id={item.id} description={item.description} paragraph={item.paragraph} category={item.category} onClick={()=>handleClick(item.id)} sale={item.sale} discount={item.discount}/>
              ))
            ) : (
              <p>No Data is Present</p>
            )}
          </MainContainer>
    </MainContent>
  
    </>
  )
}

export default RingCategory