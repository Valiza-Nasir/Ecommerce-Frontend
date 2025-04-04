import React from 'react'
import Banner from '../../components/banner/Banner'
import BestSelling from '../../components/bestselling/BestSelling'
import BusinessCard from '../../components/businesscard/BusinessCard'
import UniqueSection from '../../components/uniquesection/UniqueSection'
import PopularProducts from '../../components/popularproducts/PopularProducts'
import Carousel from '../../components/carousel/Carousel'
function Home() {
  return (
    <>
    <Banner/>
    <Carousel/>
    <PopularProducts/>
    <BestSelling/>
    <UniqueSection/>
    <BusinessCard/>
    </>
  )
}

export default Home