import React from 'react'
import hero from '../../assets/images/about/hero.jpg'
import styled from 'styled-components';
import avatar from '../../assets/images/about/avatar.jpg'
import painting from '../../assets/images/about/painting.jpg'

const MainContainer = styled.div`
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.2);
  background-blend-mode: darken;
  height: 680px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  line-height: 4em;

  @media (max-width: 1024px) {
    height: 650px;
  }

  @media (max-width: 768px) {
    height: 450px;
    justify-content: center;
    line-height: 2em;
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

const MainDiv = styled.div`
  display: flex;
  margin: 25px;
  align-items: center;
  justify-content: space-between;
  gap: 180px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    margin: 20px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 33%;

  @media (max-width: 768px) {
    width: 100%;
  }

  h6 {
    font-weight: normal;
    font-family: 'Roboto Condensed', sans-serif;
    color: #000000B3;
    font-size: 16px;
  }

  h2 {
    font-weight: normal;
    font-family: 'Cinzel', serif;
    color: #000000;
    font-size: 60px;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 40px;
    }
  }

  h5 {
    color: #000000;
    font-family: 'Cinzel', serif;
    font-size: 28px;
    font-weight: normal;
    line-height: 1.5em;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 22px;
    }
  }

  p {
    color: #000000B3;
    font-family: Roboto, sans-serif;
    font-size: 19px;
  }
`;
const ImageContainer = styled.div`
  width: 50%;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
const PaintingContainer = styled.div`
  padding: 0px 25px;
  width: 100%;
  height: 700px;

  @media (max-width: 768px) {
    height: auto; 
    padding: 0 10px;
  }

  img {
    width: 100%;
  }
`;
const SubContent = styled.div`
  display: flex;
  margin: 100px 30px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 20px;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 30%;

  @media (max-width: 768px) {
    width: 100%; 
  }

  h6 {
    font-weight: normal;
    font-family: 'Roboto Condensed', sans-serif;
    color: #000000B3;
    font-size: 22px;
  }

  h2 {
    font-weight: normal;
    font-family: 'Cinzel', serif;
    color: #000000;
    font-size: 55px;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 35px;
    }
  }
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 50%;
  text-align: justify;

  @media (max-width: 768px) {
    width: 100%;
  }

  p {
    font-family: Roboto, sans-serif;
    font-size: 18px;
    color: #000000B3;
  }

  h4 {
    color: #000000;
    font-size: 30px;
    font-family: Cinzel, serif;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  h6 {
    font-size: 0.93333333333333rem;
    line-height: 1.25em;
    font-weight: normal;
    font-family: 'Roboto Condensed', sans-serif;
  }
`;

function About() {
  return (
   <>
  <MainContainer>
    <div>
      <p>A few words</p>
     <h1>about us</h1>
    </div>
    </MainContainer>

   <MainDiv>
    <ContentContainer>
      <h6>Mattis velit eget</h6>
      <h2>About the founder</h2>
       <h5>Fusce egestas mi urna, id pulvinar ipsum dictum eget. Mauris in dolor velit.</h5>
       <p>Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus. Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget. Mauris in dolor velit. Vestibulum finibus felis non massa commodo molestie at id justo. Quisque sollicitudin elit sit amet facilisis euismod. Fusce at arcu sed.</p>
       <p>Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget.</p>
    </ContentContainer>
    <ImageContainer>
      <img src={avatar} alt="" />
    </ImageContainer>
   </MainDiv>
   <PaintingContainer>
    <img src={painting} alt="" />
   </PaintingContainer>


   <SubContent>
    <LeftContainer>
      <h6>About us</h6>
      <h2>How it all started</h2>
    </LeftContainer>
    <RightContainer>
      <h4>Etiam venenatis mattis mauris, et tempor erat ultricies non.</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eget enim eget tincidunt. In finibus nisi ex, eu interdum urna euismod sit amet. Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit amet bibendum nibh consectetur quis.</p>
      <span>1924 - Established</span>
      <p>Curabitur ac tortor ut est porta efficitur non sed ante. Donec vel gravida dolor. Donec dictum non elit vel congue. Proin at nunc ut velit rutrum ornare. Vivamus elementum congue porta.</p>
      <span>1950 - Vivamus Elementum</span>
      <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc eu erat bibendum mauris accumsan suscipit vitae eu ante. In tristique placerat libero vel maximus. Quisque justo lorem, faucibus a augue ac, condimentum varius mi. Vivamus pulvinar sapien eget vulputate pharetra.</p>
      <span>1975 - Magnis Parturient</span>
      <p>Curabitur scelerisque mi ut lectus mattis viverra. Morbi volutpat suscipit dolor. Donec vel libero in elit luctus pretium sed id risus. Phasellus non interdum mauris. Ut auctor eros mi, at rhoncus dolor rhoncus sed. Donec congue dolor aliquet ante porta consequat. Duis pellentesque fermentum lorem in commodo.</p>
      <span>2010 - Interdum Mauris</span>
      <p>Magnis dis parturient montes, nascetur ridiculus mus. Nunc eu erat bibendum mauris accumsan suscipit vitae eu ante. In tristique placerat libero vel maximus.</p>
    </RightContainer>
   </SubContent>
   
   </>
  )
}

export default About