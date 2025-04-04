import React, { useState } from 'react';
import styled from 'styled-components';
import hero from '../../assets/images/about/hero.jpg';
import { NavLink } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

const MainContainer = styled.div`
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.2);
  background-blend-mode: darken;
  height: auto;
  min-height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 1024px) {
    min-height: 350px;
  }

  @media (max-width: 768px) {
    min-height: 300px;
  }

  p {
    font-weight: normal;
    font-family: 'Cinzel', serif;
    font-size: 0.93333333333333rem;
    color: #ffffff;
  }

  h1 {
    font-size: 75px;
    font-weight: normal;
    font-family: 'Cinzel', serif;
    text-transform: uppercase;
    color: #ffffff;
    font-style: inherit;

    @media (max-width: 768px) {
      font-size: 50px;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 5px;
  align-items: flex-start;
  justify-content: center; 
  margin-bottom:150px;
  @media (max-width:786px){
  margin-bottom:50px;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%; 
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }

  h3 {
    color: #000000;
    font-family: "Cinzel", serif;
    font-size: 34px;
    text-transform: uppercase;
  }

  p {
    color: #000000B3;
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    margin: 0px 0px 12px;
    line-height:28px;
  }

  span {
    color: gray;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
     &:hover{
color:#a86e3b;
}
  
  }
`;

const IconCotainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 22px;
  font-family: "Roboto", sans-serif;
  padding: 0px 0px 0px 5px;
  font-weight: thin;
 &:hover{
color:#a86e3b;
}
  svg {
    font-size: 22px;
    cursor: pointer;
    color:#0000000B3;

  }
a{
color:gray;
font-size:18px;
 &:hover{
color:#a86e3b;
}
  
}

`;

const RightContainer = styled.div`
  background-color: #faf5f0;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  margin-top: -40px;
  margin-right: 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    margin-top:0px;
  }

  input {
    border: 1px solid #ede7e1;
    padding: 10px 15px;
    font-size: 16px;
    outline: none;
    color: gray;
    width: 100%;
    box-sizing: border-box;
  }

  button {
    text-transform: uppercase;
    border: 1px solid black;
    background-color: transparent;
    padding: 15px 30px;
    font-size: 16px; /* Adjusted font size */
    font-family: 'Roboto Condensed', sans-serif;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column; /* Changed to column */
  gap: 10px;

  @media (min-width: 769px) {
    flex-direction: row; /* Row on larger screens */
    gap: 20px;
  }
`;

const EmailContainer = styled.div`
  width: 100%;
  box-sizing: border-box; 
`;

const TextContainer = styled.div`
  width: 100%;
  box-sizing: border-box; 

  textarea {
    width: 100%;
    height: 120px;
    outline: none;
    color: gray;
    box-sizing: border-box;
    resize: vertical;
  }
`;

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { firstName, lastName, email, message };
    if (!firstName || !lastName || !email || !message) {
      alert('Please Fill All Fields Properly');
      return;
    }
    let existingData = JSON.parse(localStorage.getItem('userData')) || []
    if (existingData) {
      existingData =[];
    }
    existingData.push(userData);
    localStorage.setItem('userData', JSON.stringify(existingData));
    toast.success('Data Submitted Successfully');
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <MainContainer>
        <div>
          <p>A few words</p>
          <h1>contact us</h1>
        </div>
      </MainContainer>

      <ContentContainer>
        <LeftContainer>
          <h3>Message Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo <br/>
            tempor, congue justo at, lobortis orci.
          </p>
          <IconCotainer>
            <IoLocationSharp />
            <NavLink>123 Fifth Avenue,New York,NY 10160</NavLink>
          </IconCotainer>
          <IconCotainer>
            <MdEmail />
            <NavLink>contact@info.com</NavLink>
          </IconCotainer>
          <IconCotainer>
            <FaPhoneAlt />
            <span>9-334-7565-9787</span>
          </IconCotainer>
        </LeftContainer>
        <RightContainer>
          <ToastContainer position="top-right" autoClose={3000} />
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='mb-4'
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className='mb-4'
              />
            </InputContainer>
            <EmailContainer>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='mb-4'
              />
            </EmailContainer>
            <TextContainer>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='mb-8'
              ></textarea>
            </TextContainer>
            <button type="submit">Send</button>
          </form>
        </RightContainer>
      </ContentContainer>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111256.59449743069!2d71.60760977490186!3d29.377064566279337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c46c611ad5%3A0xfcdf0da8e103f862!2sBahawalpur%2C%20Pakistan!5e0!3m2!1sen!2s!4v1741165500458!5m2!1sen!2s"
          width="100%"
          height="600"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;