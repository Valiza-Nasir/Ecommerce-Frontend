import React from 'react'
import styled from 'styled-components'
import itemStore from '../../mobx/itemStore'
import { observer } from 'mobx-react-lite'
import { NavLink } from "react-router-dom"; 

const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 700px;
  background-color: #f4f7fc;
  padding: 50px 30px 70px 30px;
  gap: 40px;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 30px;
  }
`;

const LeftDiv = styled.div`
  max-width: 880px;
  width: 100%;
  background-color: white;
  padding: 40px 30px;
  
  h1 {
    color: black;
    font-size: 32px;
    font-family: "Cinzel", serif;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    h1 {
      font-size: 26px;
    }
  }
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: transparent;
  width: 100%;
  max-width: 300px;

  h1 {
    color: #000;
    font-size: 18px;
    font-family: "Roboto", serif;
    margin-bottom: 15px;
  }

  input {
    border: 1px solid gray;
    padding: 8px;
    width: 100%;
  }

  button {
    border: 1px solid black;
    padding: 8px;
    color: black;
    background-color: white;
    font-family: "Roboto", serif;
    font-size: 13px;
    margin-top: 5px;
    &:hover {
      background-color: black;
      color: white;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    h1 {
      font-size: 16px;
    }
  }
`;

const SearchContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 10px;

  a {
    color: #000000B3;
    font-size: 28px;
    font-family: "Roboto", serif;
    margin-bottom: 12px;
  }

  p {
    color: #000000B3;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    a {
      font-size: 22px;
    }
    p {
      font-size: 13px;
    }
  }
`;

const NoSearch = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  gap: 20px;

  h3 {
    color: #000000B3;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    margin-bottom: 12px;
  }

  input {
    border: 1px solid lightgray;
    padding: 8px;
    color: gray;
    outline: none;
    width: 100%;
  }

  button {
    border: 1px solid black;
    padding: 8px;
    color: black;
    background-color: white;
    font-family: "Roboto", serif;
    font-size: 13px;
    margin-top: 10px;

    &:hover {
      background-color: black;
      color: white;
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 13px;
    }
  }
`;

const SearchFunc = observer(() => {
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/searchfunc');
  }

  return (
    <MainDiv>
      <LeftDiv>
        <h1>Search result for: {itemStore.searchitem}</h1>
        {['rings', 'bracelets', 'earrings', 'necklaces'].includes(itemStore.searchitem.toLowerCase()) ? (
          <SearchContent>
            <NavLink to='/jewlerystore'>JEWELLERY STORE</NavLink>
            <p>Beautiful website template perfect for building an online store to sell jewelry</p>
          </SearchContent>
        ) : (
          <NoSearch>
            <h3>Sorry, but nothing matched your search terms. Please try again with some different keywords.</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder='Search...' value={itemStore.searchitem} onChange={(e) => itemStore.setItem(e.target.value)} />
              <button>SEARCH</button>
            </form>
          </NoSearch>
        )}
      </LeftDiv>
      <RightDiv>
        <h2>Search</h2>
        <form>
          <input type="text" value={itemStore.searchitem} readOnly />
          <button type='submit'>SEARCH</button>
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

export default SearchFunc;
