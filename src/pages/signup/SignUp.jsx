import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';

const SignupContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #faf5f0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;       
`;

const ContentContainer = styled.div`
  width: 90%;
  max-width: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box; 
  h1 {
    color: #000000B3;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;
  }

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    font-size: 14px; 
    color: gray;
    outline: none;
    box-sizing: border-box;
  }

  button {
    display: block;
    text-align: center;
    margin-top: 20px;
    padding: 14px;
    border: 2px solid black;
    color: black;
    background-color: transparent;
    font-size: 16px;
    text-transform: uppercase;
    cursor:pointer;
    &:hover {
      background-color: black;
      color: white;
    }
  }

  @media (min-width: 768px) {
    width: 50%;
    max-width:400px;
  }

  @media (min-width: 1200px) {
    width: 25%;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  color: gray;
  font-size: 14px;
  margin-top: 15px;
  span {
    color: blue;
  }
`;

function SignUp() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !email || !password) {
      toast.error('Please Fill All Fields Properly');
      return;
    }
    const userData = { userName, email, password };
    localStorage.setItem('SignUp', JSON.stringify(userData));
    toast.success('Signup Successfully');
    setUserName('');
    setEmail('');
    setPassword('');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <>
      <SignupContainer>
        <ContentContainer>
          <h1>SIGN UP</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="USER NAME"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
            <ToastContainer position="top-right" autoClose={2000} />
          </form>
          <LoginContainer>
            <NavLink to="/login">
              Already Sign Up? <span>Login</span>
            </NavLink>
          </LoginContainer>
        </ContentContainer>
      </SignupContainer>
    </>
  );
}

export default SignUp;