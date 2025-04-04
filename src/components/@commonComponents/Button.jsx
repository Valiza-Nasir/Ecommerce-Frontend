import React from 'react'
import styled from 'styled-components'

function Button({title,onClick}) {
  const Buttons=styled.button`
  border:1px solid black;
  font-size:12px;
  letter-spacing:2px;
  padding:9px 20px;
  &:hover{
  background-color:black;
  color:white;
  font-weight:bold;
  }
  `
  return (
   <>
   <Buttons onClick={onClick}>{title}</Buttons>
   
   </>
  )
}

export default Button