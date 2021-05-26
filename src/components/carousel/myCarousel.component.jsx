import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Slide1 from '../../assets/img/carousel/carousel.jpg'
import Slide2 from '../../assets/img/carousel/carousel1.jpg'
import Slide3 from '../../assets/img/carousel/carousel2.jpg'
import ScrollDown from '../scrolldown/myScrollDown.component'

import './myCarousel.style.css'

const myCarousel = () => {
  return (
    <div id='home'>
      <Carousel controls={false} indicators interval={4000} pause={false}>
        <Carousel.Item>
          <img
            className='d-block w-100 custom-img'
            src={Slide1}
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 custom-img'
            src={Slide2}
            alt='Second slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 custom-img'
            src={Slide3}
            alt='Third slide'
          />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  )
}

export default myCarousel
