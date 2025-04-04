import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import styled from "styled-components";
import SearchModal from "../../mobx/SearchModal";
import { IoSearch } from "react-icons/io5";
import itemStore from "../../mobx/itemStore";
import { useNavigate } from "react-router-dom";
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 10px; /* Ensure spacing on small screens */
`;

const ModalContent = styled.div`
  background: transparent;
  color: white;
  width: 70%;
  max-width: 980px;
  text-align: center;

  h3 {
    color: #E2E2E2;
    font-family: "Cinzel", serif;
    font-size: 22.5px;
  }

  @media (max-width: 768px) {
    width: 90%;
    h3 {
      font-size: 18px;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 40px;
  font-size: 30px;
  cursor: pointer;
  border: none;
  background: transparent;
  color: white;

  @media (max-width: 768px) {
    top: 15px;
    right: 20px;
    font-size: 25px;
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  position: relative;
  width: 75%;
  max-width: 700px;
  background: transparent;
  margin-left:130px;

  input {
    flex: 1;
    padding: 12px;
    font-size: 25px;
    border: none;
    background: transparent;
    color: white;
    outline: none;
    width: 100%;
    min-width: 0;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  button {
    background: transparent;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
    @media (max-width:1220){
    margin-left:0px;
    }

  @media (max-width: 768px) {
    width: 90%;
    margin-left:0px;
    input {
      font-size: 18px;
      padding: 10px;
    }

    button {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    width: 95%;
    margin-left:0px;

    input {
      font-size: 16px;
      padding: 8px;
    }

    button {
      font-size: 16px;
    }
  }
`;
const SearchModalComponent = observer(() => {
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!itemStore.searchitem){
      alert('Please search items');
      return;
    }
    SearchModal.closeSearchModal()
    navigate('/searchfunc')
    itemStore.searchitem('')
  }
  return (
    <>
      {SearchModal.modalSearchState && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={SearchModal.closeSearchModal}>
              &times;
            </CloseButton>
            <h3>START TYPING AND PRESS ENTER TO SEARCH</h3>
            <SearchForm onSubmit={handleSubmit}>
              <input type="text" placeholder="Search..." value={itemStore.searchitem} onChange={(e)=>itemStore.setItem(e.target.value)} />
              <button type="submit">
                <IoSearch />
              </button>
            </SearchForm>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
});

export default SearchModalComponent;
