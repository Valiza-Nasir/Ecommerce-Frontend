import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import carousel1 from '../../assets/carousel/carosul1.png'
import carousel2 from '../../assets/carousel/carosul2.png'
import carousel3 from '../../assets/carousel/carosul3.png'
import carousel4 from '../../assets/carousel/carosul4.png'
import carousel5 from '../../assets/carousel/carosul5.png'
import carousel6 from '../../assets/carousel/carosul6.png'
import carousel7 from '../../assets/carousel/carosul7.png'
import carousel8 from '../../assets/carousel/carosul8.png'
const CarouselContainer = styled.div`
  width: 95%;
  height:200px;
  margin: auto;
  overflow: hidden;
  margin-top:25px;
  margin-bottom:100px;
`;
const Image = styled.img`
  width: 90%;
  height: 160px;
  object-fit: cover;
  border:1px solid #efefef;
  @media (max-width:798px){
  width:80%;
  height:140px;
  }
`;
const CustomDots = styled.ul`
  bottom: -30px !important;
  li button:before {
    font-size: 7px;
    color: gray;
  }
  .slick-active button:before {
    color: #a86e3b !important;
  }
`;

const images = [
  {src:carousel1},
  {src:carousel2},
  {src:carousel3},
  {src:carousel4},
  {src:carousel5},
  {src:carousel6},
  {src:carousel7},
  {src:carousel8}, 
];
                   
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => <CustomDots>{dots}</CustomDots>,
    responsive:[
      {
        breakpoint:1024,
        settings:{
          slidesToShow:3,
        }
      },
      {
        breakpoint:600,
        settings:{
          slidesToShow:2,
        }
      }
    ]
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((value, index) => (
          <div key={index}>
            <Image src={value.src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
