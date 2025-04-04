import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { FaShoppingBasket } from 'react-icons/fa';
import styled from 'styled-components';
import Logo from '../../assets/images/logofolder/Logo.png';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import cartStore from '../../mobx/cartStore';
import { observer } from 'mobx-react-lite';
import SearchModal from '../../mobx/SearchModal';
import SearchModalComponent from '../../pages/searchmodal/SearchModalComponent';
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  border-bottom: 1px solid #eaeaea;

  @media (max-width: 1340px) {
    padding: 1rem 2rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 1290px) {
    display: none;
  }
`;

const NavItem = styled.li`
  font-size: 13px;
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;

  a {
    text-decoration: none;              
    color: black;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    position: relative;
  }

  &::before {
    content: '';
    position: absolute;
    top: -18px;
    left: 0;
    width: 0%;
    height: 1px;
    background-color: #b37b57;
    transition: width 0.3s ease-in-out;
  }

  @media (min-width: 1290px) {
    &:hover::before {
      width: 100%;
    }
  }

  &:hover a {
    color: #b37b57;
  }

  .active {
    color: #b37b57 !important;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 110px;
  }
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color:black;
  position:relative;
  svg {
    font-size: 1.3rem;
    cursor: pointer;
    &:hover{
    color:#b37b57;
    }
  }
    span{
    position:absolute;
    top:-50%;
    right:-30%;
    background-color:black;
    color:white;
    padding:1px 6px;
    border-radius:50%;
    font-size:12px;
    text-align:center;
    }
`;
const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.2rem;
  font-weight:800;
  cursor: pointer;
  position: absolute;
  right: 2rem;
  color: #a86e3b;
  
  @media (max-width: 1290px) {
    display: block;
  }
  .close-icon {
    border: 2px dotted #a86e3b;
    padding: 5px 10px;
    font-size:2.5rem;
  }
`;


const Sidebar = styled.div`
  position:absolute;
  top: 18%;
  left: 0;
  transform: translateX(-50%); 
  width:100%;
  // max-width:300px;
  // height:30.5vw;
  background: white;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  padding: 20px;
  z-index: 1000;
  max-height:90vh;
  overflow-y:auto;
  transform:none;
  box-sizing:border-box;
   @media (max-width: 1290px) {
      top: 15%;
  }
  //      @media (max-width: 1280px) {
  //     top: 20%;
  // }
       @media (max-width: 1024px) {
      top: 15%;
  }
       @media (max-width: 768px) {
      top: 15%;
  }
           @media (max-width: 320px) {
      top: 25%;
  }
`;
const SidebarNavItem = styled(NavItem)`
  padding: 10px 20px;
  border-bottom: 2px solid #eaeaea;
  text-align: left;
  list-style: none;
  a {
    color: black;
    font-size: 14px;
    display: block;
    width: 100%;
    font-style: inherit;
    font-weight: inherit;
    font-family:'Roboto',sans-serif;
    text-decoration: none;
    transition: color 0.3s ease, background 0.3s ease;
  }

  &:hover {
    background: #f9f6f2;
    
    a {
      color: #b37b57;
    }
  }
`;
const FirstContent=styled.div`
display:flex;
align-items:center;
gap:12px;
margin-bottom:10px;
`
const SecondContent=styled.div`
width:70px;
height:70px;
img{
width:100%;
height:100%;
}
`
const ThirdContent=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
p{
font-size:13px;
color:#000000;
font-family:"Roboto",sans-serif;
}

`
const BtnDiv=styled.div`
display:flex;
align-items:center;
margin-top:15px;
`
const QuantityButton = styled.button`
  padding: 0.5px 10px;
  font-weight: bold;
  border:1px solid #e2e8f0;
  font-size:18px;
`;

const QuantityDisplay = styled.p`
  border:1px solid #e2e8f0;
   padding:4px 10px;
  font-size:15px;
`;
const ForthContent=styled.div`
display:flex;
flex-direction:column;
align-items:flex-end;
margin-left:80px;
gap:10px;
svg {
    border: 1px solid gray;
    padding: 0px 5px;
    border-radius: 50%;
    color: gray;
    cursor: pointer;
  }
    p{
    font-size:20px;
    color:#000000B3;
    font-family:"Roboto",sans-serif;
    font-size:15px;
    }

`
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  transition: opacity 0.3s ease;
  z-index:1000;
`;

const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: white;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  z-index:1000;
`;

const Header = styled.div`
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  font-size: 1rem;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 2px solid #ddd;
  h2{
  color:black;
  font-size:15px;
  font-family:"Roboto",sans-serif;
  }
  svg{
  color:black;
  font-size:18px;
  font-family:"Roboto Condensed",sans-serif;
  }
`;
const ItemList = styled.div`
  flex-grow: 1;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  font-size: 1.2rem;
`;

const ContinueButton = styled.button`
  background: transparent;
  color: black;
  border:1px solid black;
  padding: 10px 100px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: auto;

  &:hover {
    background: black;
    color:white;
  }
`;
const TwoButtons=styled.div`
display:flex;
flex-direction:column;
gap:15px;
a{
  background: transparent;
  color: black;
  border:1px solid black;
  padding: 10px 140px;
  cursor: pointer;
  font-size: 13px;
  margin-top: auto;
   &:hover {
    background: black;
    color:white;
  }
}
`
const TotalContent=styled.div`
display:flex;
margin-bottom:10px;
align-items:center;
justify-content:space-between;
border-top:1px solid lightgray;
border-bottom:1px solid lightgray;

padding:10px 68px;
h3{
margin-left:160px;
font-family:"Roboto",sans-serif;
color:#000000B3;

}
p{
color:#000000;
font-weight:500;
font-family:"Roboto",sans-serif;
}

`
const Overlays=styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ open }) => (open ? "block" : "none")};

`
const Headline=observer(()=>{
  const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <HeaderContainer>
      <MobileMenuIcon onClick={() => setSidebarOpen(!sidebarOpen)}>
      {sidebarOpen ? <RxCross2 className="close-icon" /> : <RxHamburgerMenu />}
      </MobileMenuIcon>
      <NavList>
        <NavItem><NavLink to='/ring'>Rings</NavLink></NavItem>
        <NavItem><NavLink to='/bracelet'>Bracelets</NavLink></NavItem>
        <NavItem><NavLink to='/earrings'>Earrings</NavLink></NavItem>
        <NavItem><NavLink to='/necklaces'>Necklaces</NavLink></NavItem>
      </NavList>

      <LogoContainer>
        <NavLink to='/'>
        <img src={Logo} alt='Logo' />
        </NavLink>
      </LogoContainer>
      <NavList>
        <NavItem><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></NavItem>
        <NavItem><NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink></NavItem>
        <NavItem><NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></NavItem>
        <NavItem><NavLink to='/signup' className={({ isActive }) => (isActive ? 'active' : '')}>SignUp</NavLink></NavItem>
        <NavItem><NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : '')}>Login</NavLink></NavItem>
        <IconContainer>
          <NavLink><IoIosSearch onClick={()=>SearchModal.openSearchModal()}/></NavLink>
          <NavLink><FaShoppingBasket  onClick={()=>setIsOpen(true)} /><span>{cartStore.totalQuantity}</span></NavLink>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <Drawer isOpen={isOpen}>
        <Header>
          <h2>Shopping Cart</h2>
          <RxCross2 onClick={() => setIsOpen(false)}/>
        </Header>
        <ItemList>
        {cartStore.todo.length>0 ? cartStore.todo.map((value)=>{
            return  <>
            <FirstContent>
              <SecondContent>
              <img src={value.image} alt="" />
              </SecondContent>
              <ThirdContent>
              <p>{value.title}</p>
              <BtnDiv>
              <QuantityButton onClick={()=>cartStore.decrement(value.id)}>-</QuantityButton>
              <QuantityDisplay>{value.quantity}</QuantityDisplay>
              <QuantityButton onClick={()=>cartStore.increment(value.id)}>+</QuantityButton>
              </BtnDiv>
              </ThirdContent>
              <ForthContent>
                <RxCross2  onClick={()=>cartStore.deleteProductData(value.id)}/>
                <p>${cartStore.todo.reduce((acc,item)=>{ const price = Number(value.price.replace(/[^0-9.]/g, "")) 
                const quantity=Number(value.quantity)
                   return acc+price*quantity },0)}</p>
              </ForthContent>
            </FirstContent> 
            </>
          }):<h2 className='text-[15px]'>No Products in the cart</h2>}
        </ItemList>
        {cartStore.todo.length>0 ?
 <>
 <TotalContent>
 <p>Subtotal</p>
  <h3>${cartStore.subTotal}</h3>
 </TotalContent>
         <TwoButtons>
          <NavLink to='/cartdetail'>VIEW CART</NavLink>
          <NavLink to='/checkout'>CHECKOUT</NavLink>
        </TwoButtons>
 </>: <ContinueButton><NavLink to='/'>Continue Shopping</NavLink></ContinueButton>
      }
      </Drawer>
        </IconContainer>
      </NavList>
      <Overlays open={sidebarOpen} onClick={() => setSidebarOpen(false)} />
      <Sidebar open={sidebarOpen}>
      <SidebarNavItem><NavLink to='/ring' className={({ isActive }) => (isActive ? 'active' : '')}>Rings</NavLink></SidebarNavItem>
     <SidebarNavItem><NavLink to='/bracelet' className={({ isActive }) => (isActive ? 'active' : '')}>Bracelets</NavLink></SidebarNavItem>
    <SidebarNavItem><NavLink to='/earrings' className={({ isActive }) => (isActive ? 'active' : '')}>Earrings</NavLink></SidebarNavItem>
     <SidebarNavItem><NavLink to='/necklaces' className={({ isActive }) => (isActive ? 'active' : '')}>Necklaces</NavLink></SidebarNavItem>
   </Sidebar>
    </HeaderContainer>
    <SearchModalComponent/>
    </>
  )
})


export default Headline;
