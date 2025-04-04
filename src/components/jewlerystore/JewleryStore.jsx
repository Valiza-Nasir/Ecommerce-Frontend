import { observer } from 'mobx-react-lite';
import React from 'react'
import styled from 'styled-components'
import itemStore from '../../mobx/itemStore';

const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  background-color: #f4f7fc;
  padding: 50px 30px 70px 30px;
  gap: 80px;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
    padding: 30px;
  }
`;

const LeftDiv = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: white;
  padding: 50px;
  font-family: "Times New Roman", serif;

  h1 {
    font-size: 38px;
    color: #000;
    margin-bottom: 10px;
    text-transform: uppercase;
    line-height: 60px;
    font-weight: 300;
  }

  h2 {
    font-size: 25px;
  }

  p {
    line-height: 1.5;
    color: #333;
    margin-bottom: 20px;
    font-family: "Roboto", serif;
    font-size: 14px;
    color: gray;
  }

  ul {
    margin-top: 20px;
    padding-left: 20px;
    list-style-type: disc;
  }

  li {
    font-family: "Roboto", serif;
    font-size: 14px;
    color: gray;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 30px;
    
    h1 {
      font-size: 26px;
      line-height: 40px;
    }

    h2 {
      font-size: 20px;
    }

    p, li {
      font-size: 14px;
      line-height: 1.4;
    }
  }
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: transparent;

  h1 {
    color: #000000;
    font-size: 20px;
    font-family: "Roboto", serif;
    margin: 0px 0px 17.8px;
  }

  form {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  input {
    border: 1px solid gray;
    padding: 10px;
    outline: none;
    width: 70%;
  }

  button {
    border: 1px solid black;
    padding: 10px 15px;
    color: black;
    background-color: white;
    font-family: "Roboto", serif;
    font-size: 14px;
    cursor: pointer;
    width: auto;
    white-space: nowrap;

    &:hover {
      background-color: black;
      color: white;
    }
  }

  @media (max-width: 768px) {
    form {
      flex-direction: column;
      align-items: stretch;
    }

    input {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }
`;


const JewleryStore = observer(() => {
  return (
    <MainDiv>
      <LeftDiv>
        <div>
          <h2>JEWELLERY STORE</h2>
          <p>By / June 12, 2023</p>
        </div>
        <div>
          <p>
            Want to sell jewelry to a broader audience? Consider building an online store! Import our easy-to-use Jewellery Store template and launch your store quickly. Accept orders and payments round the clock through your website.
          </p>
          <p>
            The clean and minimalistic design has all the correct elements to help you build a high-converting store. From impressive background effects to displaying products based on categories and latest arrivals, Jewellery Store is the perfect web template for your store.
          </p>
        </div>
        <div>
          <h1>Key features of the Jewellery Store template</h1>
          <ul>
            <li>Clean and simple design that has everything you need to build a fantastic online store</li>
            <li>Display products based on categories, such as earrings, necklaces, rings, and more</li>
            <li>Product page displays various payment options as well as related products</li>
            <li>Straightforward checkout process</li>
            <li>Well integrated with the WordPress eCommerce plugin, WooCommerce</li>
          </ul>
        </div>
      </LeftDiv>
      
      <RightDiv>
        <h2>Search</h2>
        <form>
          <input type="text" value={itemStore.searchitem} readOnly />
          <button type="submit">SEARCH</button>
        </form>
        <h1>RECENT POSTS</h1>
        <p>Hello world!</p>
        <h1>RECENT COMMENTS</h1>
        <p>No comments to show</p>
        <h1>ARCHIVES</h1>
        <p>August 2022</p>
        <h1>CATEGORIES</h1>
        <p>Uncategorized</p>
      </RightDiv>
    </MainDiv>
  );
});

export default JewleryStore;
