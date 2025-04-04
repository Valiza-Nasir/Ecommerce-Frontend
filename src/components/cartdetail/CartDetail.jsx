import React from 'react';
import { observer } from 'mobx-react-lite';
import cartStore from '../../mobx/cartStore';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { toast, ToastContainer } from 'react-toastify';
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
const BtnDiv=styled.div`
display:flex;
// align-items:center;
// justify-content:center;
margin-top:15px;

`

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 28px;
  margin-right: 28px;
  margin-bottom: 80px;
`;

const CheckoutContainer = styled.div`
  width: 30%;
`;

const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  span {
    border: 1px solid gray;
    padding: 0px 5px;
    border-radius: 50%;
    color: gray;
    cursor: pointer;
  }
`;

const CartContainer = styled.div`
  width: 70%;
  .container {
    margin: 10px auto;
    padding: 6px;
  }
  margin-bottom: 90px;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 95%;
  border-collapse: collapse;
  border: 1px solid #e2e8f0;
`;

const StyledThead = styled.thead`
  background-color: #faf5f0;
  color: rgba(0, 0, 0, 0.7);
  text-align: left;
`;

const StyledTbody = styled.tbody``;

const StyledTr = styled.tr`
  border-bottom: 1px solid #e2e8f0;
  &:hover {
    background-color: #f9fafb;
  }
`;

const StyledTh = styled.th`
  padding: 12px 24px;
  border: 1px solid #e2e8f0;
`;

const StyledTd = styled.td`
  padding: 12px 24px;
  font-size: 14px;
`;

const StyledImage = styled.img`
  width: 48px;
  height: 64px;
  object-fit: cover;
  border-radius: 0.375rem;
  `
  const EmptyCartMessage=styled.div``
const QuantityButton = styled.button`
  padding: 4px 10px;
  font-weight: bold;
  border:1px solid #e2e8f0;
  font-size:18px;
`;

const QuantityDisplay = styled.p`
  border:1px solid #e2e8f0;
   padding:4px 10px;
  font-size:15px;

`;
const CartDetail = observer(() => {
  const handleDelete=(id)=>{
    toast.success('Data Deleted Successfully')
    cartStore.deleteProductData(id)
  }
    function printDiv(divID) {
    //Get the HTML of div
    var divElements = document.getElementById(divID).innerHTML;
    //Get the HTML of whole page
    var oldPage = document.body.innerHTML;
    //Reset the page's HTML with div's HTML only
    document.body.innerHTML = 
      "<html><head><title></title></head><body>" + 
      divElements + "</body>";
    //Print Page
    window.print();
    //Restore orignal HTML
    document.body.innerHTML = oldPage;

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
    
      <form id="form1" runat="server">
      <MainContainer>
        <CartContainer>
          {cartStore.todo.length > 0 ? (
            <TableWrapper>
              <StyledTable>
                <StyledThead>
                  <StyledTr>
                    <StyledTh className='text-center'>Product</StyledTh>
                    <StyledTh>Price</StyledTh>
                    <StyledTh>Quantity</StyledTh>
                    <StyledTh>Subtotal</StyledTh>

                  </StyledTr>
                </StyledThead>
                <StyledTbody>
                  {cartStore.todo.map((item) => (
                    <StyledTr key={item.id} className="hover:bg-gray-100 transition-all border-b">
                      <StyledTd>
                        <ContentDiv>
                          <span onClick={()=>handleDelete(item.id)}>&times;</span>
                          <StyledImage src={item.image} alt={item.title} />
                      <StyledTd className="text-gray-700 font-semibold">{item.title}</StyledTd>

                        </ContentDiv>
                      </StyledTd>
                      <StyledTd className='text-3xl text-gray-700'>{item.price}</StyledTd>
                      <StyledTd className="text-center text-gray-700 flex gap-4 items-center">
                        <BtnDiv>
                          <QuantityButton onClick={() => cartStore.decrement(item.id)}>-</QuantityButton>
                          <QuantityDisplay>{item.quantity}</QuantityDisplay>
                          <QuantityButton onClick={() => cartStore.increment(item.id)}>+</QuantityButton>
                        </BtnDiv>
                      </StyledTd>
                      <StyledTd className='text-3xl text-gray-700'>${cartStore.todo.reduce((acc,value)=>{
                        const price = Number(item.price.replace(/[^0-9.]/g, ""))
                        const quantity=Number(item.quantity)
                        return acc+price*quantity
                      },0)}</StyledTd>
                    </StyledTr>
                  ))}
                </StyledTbody>
              </StyledTable>
            </TableWrapper>
          ) : (
            <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
          )}
         <ToastContainer position='top-right' autoClose={2000}/>
        </CartContainer>
        <CheckoutContainer>
          <TableWrapper>
            <StyledTable>
              <StyledThead>
                <StyledTr >
                  <StyledTh className='text-[20px]'>CART TOTALS</StyledTh>
                </StyledTr>
              </StyledThead>
              <StyledTbody>
                <StyledTr>
                  <StyledTd className="text-gray-700 font-semibold text-2xl">Subtotal</StyledTd>
                  <StyledTd  className="text-gray-700 font-semibold text-2xl">${cartStore.subTotal}</StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd  className="text-gray-700 font-semibold text-2xl">Total</StyledTd>
                  <StyledTd  className="text-gray-700 font-semibold text-2xl">${cartStore.subTotal}</StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd className="text-gray-700 font-semibold" colSpan="2">
                    <div>
                      <p className='font-thin text-[15px]'>Have a coupon?</p>
                      <NavLink  className='block text-center mt-[26px] p-[20px] border-2 border-black text-black text-[15px] tracking-wide decoration-none hover:bg-black hover:text-white' to="/checkout">
                        PROCEED TO CHECKOUT
                      </NavLink>
                    </div>
                  </StyledTd>
                </StyledTr>
              </StyledTbody>
            </StyledTable>
          </TableWrapper>
        </CheckoutContainer>
      </MainContainer>
 <input type="button" value="Print PDF" onClick={()=>printDiv('form1')} style={{border:'1px solid black', backgroundColor:'black',color:'white',padding:'10px'}} />

      </form>
    </>
  );
});

export default CartDetail;



