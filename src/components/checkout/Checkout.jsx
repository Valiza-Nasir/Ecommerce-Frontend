import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { IoLockClosedSharp } from "react-icons/io5";
import cartStore from '../../mobx/cartStore';
import { observer } from 'mobx-react-lite';
const HeadingDiv = styled.div`
  margin: 60px 0px 60px 28px;
  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    font-family: "Roboto", sans-serif;
    color: gray;
  }
`;
const NavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 30px 0px;
  gap: 13px;

  a.active {
    color: #A86E3B;
  }
`;

const NavSecond = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  h2 {
    font-size: 14px;
    background-color: #000000B3;
    color: white;
    border-radius: 20px;
    padding: 0px 7px;
  }
  a {
    font-size: 25px;
    color: #000000B3;
    font-family: "Roboto", sans-serif;
    font-size: 22.5px;
  }
  span {
    font-size: 25px;
    color: #000000B3; 
    @media(max-width:833px){
    font-size:20px;
    }
     @media(max-width:713px){
    font-size:15px;
    }
     @media(max-width:560px){
    font-size:12px;
    }
  }
  &:hover {
    a {
      color: #A86E3B;
    }
    span {
      color: #A86E3B;
    }
    h2 {
      background-color: #A86E3B;
    }
  }
`;
const MainDiv=styled.div`
display:flex;
padding:30px;
gap:50px;
@media (max-width:928px){
flex-direction:column-reverse;
justify-content:center;
align-items:center;
}
`
const LeftContent=styled.div`
max-width:700px;
width:100%;
display:flex;
flex-direction:column;
gap:20px;
h1{
color:#000000B3;
font-size:16px;
font-family: "Roboto", sans-serif;
font-weight:500;
border-bottom:1px solid lightgray;
width:200px;
padding-bottom:15px;
}
form{
input{
width:100%;
border:1px solid lightgray;
padding:10px;
font-size:16px;
font-weight:300;
border-radius:5px;
outline:none;
color:gray;
}
textarea{
width:100%;
border:1px solid lightgray;
padding:10px;
font-size:16px;
font-weight:300;
border-radius:5px;
outline:none;
color:gray;
height:73px !important;
&:focus{
border:1px dotted black;
}
}
select{
width:100%;
border:1px solid lightgray;
padding:10px;
font-size:16px;
font-weight:300;
border-radius:5px;
color:gray;

}
h2{
color:#000000B3;
font-size:16px;
font-family: "Roboto", sans-serif;
font-weight:500;
border-bottom:1px solid lightgray;
padding-bottom:15px;
margin:25px 0px;
}
}
a{
font-size:15px;
color:gray;
}
h3{
color:#000000B3;
font-size:16px;
font-family: "Roboto", sans-serif;
font-weight:500;
border-bottom:1px solid lightgray;
padding-bottom:15px;
margin:25px 0px;
}
`
const NameDiv=styled.div`
display:flex;
gap:15px;

`
const CompanyDiv=styled.div`
margin:20px 0px;
`
const HouseDiv=styled.div`
display:flex;
gap:15px;
margin:20px 0px;
`
const CityDiv=styled.div`
display:flex;
gap:15px;
margin-bottom:20px;
`
const BankTransfer=styled.div`
display:flex;
flex-direction:column;
border:1px solid lightgray;
border-radius:6px;
`
const FirstContent = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom:1px solid lightgray;
`;
const ThirdContent=styled.div`
 display: flex;
  align-items: center;
  padding: 10px;
  border-bottom:1px solid lightgray;
`
const SecondContent=styled.div`
border-bottom:1px solid lightgray;
padding:18px;
font-size:15px;
color:gray;
  background-color: #faf5f0;
  
`
const ButtonDiv=styled.div`
display:flex;
align-items:center;
justify-content:center;
border:1px solid black;
margin-top:10px;
padding:10px;
cursor:pointer;
gap:10px;
&:hover{
background-color:black;
color:white;
}
button{
letter-spacing:1px;
font-size:14px;
font-family:"Roboto",sans-serif;
}
`
const RadioBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 300px;
  padding: 10px;
  
  input[type="radio"] {
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    margin: 0;
  }
    h4{
    font-size:15px;
   color:#000000B3;
   font-family:"Roboto",sans-serif;
    }
`;
const CashButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 300px;
  padding: 10px;
  
  input[type="radio"] {
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    margin: 0;
  }
    h4{
    font-size:15px;
   color:#000000B3;
   font-family:"Roboto",sans-serif;
    }
`;
const RightDiv=styled.div`
border:1px solid lightgray;
border-radius:5px;
height:auto;
`
const First=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
border-bottom:1px solid lightgray;
padding:10px 15px;
font-size:15px;
font-family:"Roboto",sans-serif;
color:#0000000B3;
`
const RightContent=styled.div`
max-width:500px;
width:100%;
h1{
color:#000000B3;
font-size:18px;
font-family: "Roboto", sans-serif;
font-weight:500;
width:200px;
margin-bottom:10px;
}
`
const CartDetails=styled.div`
display:flex;
flex-direction:column;
gap:20px;
border-bottom:1px solid lightgray;
`
const CartMain=styled.div`
display:flex;
`
const CartContent=styled.div`
display:flex;
align-items:center;
gap:15px;
padding:10px;
font-family:"Roboto",sans-serif;
font-size:14px;
img{
width:50px;
border-radius:10px;
}
p{
margin-left:210px;
@media (max-width:510px){
margin-left:190px;
}
@media (max-width:450px){
margin-left:110px;
}
@media (max-width:380px){
margin-left:40px;
}
}

`
const Checkout=observer(()=>{
 const [userName,setUserName]=useState('');
 const [firstName,setFirstName]=useState('')
 const [lastName,setLastName]=useState('')
 const [companyName,setCompanyName]=useState('')
 const [select,setSelect]=useState('');
 const [houseNumb,setHouseNum]=useState('');
 const [apartment,setApartment]=useState('')
 const[city,setCity]=useState('')
 const[state,setState]=useState('')
 const [postCode,setPostCode]=useState('')
 const [phone,setPhone]=useState('')
 const [notes,setNotes]=useState('')
 const [bank,setBank]=useState('')
 const [cash,setCash]=useState('')
 const handleSubmit=(e)=>{
  e.preventDefault();
  if(!userName || !firstName || !lastName || !companyName || !select || !houseNumb || !apartment || !city || !state || !postCode || !phone || !phone || !notes || !bank || !cash){
    alert('Please fill all fields Properly')
    return;
  }
 }
  return (
    <>
     <HeadingDiv>
        <h1>Cart</h1>
      </HeadingDiv>

      <NavDiv>
  <NavLink to="/cartdetail" className={({ isActive }) => (isActive ? "active" : "")}>
    <NavSecond>
      <h2>1</h2>
      <span>SHOPPING CART</span>
      <span><IoIosArrowForward /></span>
    </NavSecond>
  </NavLink>

  <NavLink to="/checkout" className={({ isActive }) => (isActive ? "active" : "")}>
    <NavSecond>
      <h2>2</h2>
      <span>CHECKOUT DETAILS</span>
      <span><IoIosArrowForward /></span>
    </NavSecond>
  </NavLink>

  <NavLink to="/order-complete" className={({ isActive }) => (isActive ? "active" : "")}>
    <NavSecond>
      <h2>3</h2>
      <span>ORDER COMPLETE</span>
    </NavSecond>
  </NavLink>
</NavDiv>

    <MainDiv>
    <LeftContent>
      <h1>CUSTOMER INFORMATION</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Username or Email Address*' value={userName} onChange={(e)=>setUserName(e.target.value)} />
        <h2>BILLING DETAILS</h2>
        <NameDiv>
          <input type="text" placeholder='First name*' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
          <input type="text" placeholder='Last name*' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
        </NameDiv>
        <CompanyDiv>
        <input type="text"  placeholder='Company name'
        value={companyName} onChange={(e)=>setCompanyName(e.target.value)}/>
        </CompanyDiv>
        
        <select>
          <option value=''>United States (US)</option>
          <option value='pakistan'>Pakistan</option>
          <option value='india'>India</option>
          <option value='bangladesh'>Bangladesh</option>
        </select>
        <HouseDiv>
          <input type="text" placeholder='House number and street name' value={houseNumb} onChange={(e)=>setHouseNum(e.target.value)} />
          <input type="text" placeholder='Apartment,suite,unit,etc. (optional)' value={apartment} onChange={(e)=>setApartment(e.target.value)} />
        </HouseDiv>
        <CityDiv>
          <input type="text" placeholder='Town / City*' value={city} onChange={(e)=>setCity(e.target.value)} />
          <input type="text" placeholder='State*'  value={state} onChange={(e)=>setState(e.target.value)} />
          <input type="text" placeholder='ZIP Code'  value={postCode} onChange={(e)=>setPostCode(e.target.value)} />
        </CityDiv>
        <input type="phone" placeholder='Phone*'  value={phone} onChange={(e)=>setPhone(e.target.value)} />
        <h2>ADDITIONAL INFORMATION</h2>
        <textarea placeholder='Notes about your order, e.g. special notes for delivery' value={notes} onChange={(e)=>setNotes(e.target.value)}></textarea>
        <NavLink>Have a coupon?</NavLink>
        <h3>PAYMENT</h3>
        <BankTransfer>
        <FirstContent>
          <RadioBtn>
          <input type="radio" aria-activedescendant='' value={bank} onChange={(e)=>setBank(e.target.value)} />
          <h4>Direct bank transfer</h4>
          </RadioBtn>
         
        </FirstContent>
        <SecondContent>
          <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
        </SecondContent>
        <ThirdContent>
          <CashButton>
          <input type="radio" value={cash} onChange={(e)=>setCash(e.target.value)} />
          <h4>Cash on delivery</h4>
          </CashButton> 
        </ThirdContent>
        </BankTransfer>
        <ButtonDiv>
        <IoLockClosedSharp />
       <button type='submit'>PLACE ORDER $900.00</button>
        </ButtonDiv>
      
      </form>

































    </LeftContent>
    <RightContent>
     <h1>YOUR CART</h1>
     <RightDiv>
     <First>
      <h2>Product</h2>
      <p>Subtotal</p>
     </First>
     <CartDetails>
{cartStore.todo.length>0?cartStore.todo.map((value,index)=>{
  return <>
  <CartMain>
    <CartContent>
    <img src={value.image} alt="" />
    <div>
      <h2>{value.title}*{value.quantity}</h2>
    </div>
    <div>
<p>${cartStore.todo.reduce((acc,item)=>{
                        const price = Number(value.price.replace(/[^0-9.]/g, ""))
                        const quantity=Number(value.quantity)
                        return acc+price*quantity
                      },0)}</p>
    </div>
    </CartContent>
  </CartMain>
  
  </>
}):<p className='flex items-center justify-center text-xl p-8'>No Data is Present...</p>}
     </CartDetails>
     <First>
      <p>Subtotal</p>
      <span>${cartStore.subTotal}</span>
     </First>
     <First>
      <h2>Total</h2>
      <span>${cartStore.subTotal}</span>
     </First>
     </RightDiv>
    </RightContent>

    </MainDiv>
    
    
    </>
  )
})
export default Checkout