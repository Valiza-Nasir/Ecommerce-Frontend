import React from 'react'
import styled from 'styled-components'

const MainContainer=styled.div`
`
function HeroImage({image,title,description}) {
  return (
    <>
    <MainContainer>
      <div>
        <p>{title}</p>
        <h1>{description}</h1>
      </div>
    </MainContainer> 
    </>
  )
}

export default HeroImage