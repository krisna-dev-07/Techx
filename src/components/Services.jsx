import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assests/3.jpg"
import img2 from "../assests/4.jpg"
const Services = () => {
  return (
    <div className='services'>
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false}
        interval={1000}>
            <div>
                <img src={img1} alt="Item1" />
                <p>Full Stack</p>
            </div>
            <div>
                <img src={img2} alt="Item2" />
                <p>End-to-end Support</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services
