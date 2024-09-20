import React from 'react'
import Testimonial from '../Testimonial/Testimonial'
import Team from '../Team/Team'
import Carousel from '../Crousal/Crousal'
// import Carousel from '../../Crousal/Crousal'

const Home = () => {
  return (
    <>
    <Carousel/>
      <Team />
      <Testimonial />
    </>
  )
}

export default Home