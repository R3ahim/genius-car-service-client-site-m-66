import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import img1 from '../../../img/car1.jpg'
import img2 from '../../../img/car2.png'

const img = 'https://cimg2.ibsrv.net/ibimg/hgm/1920x1080-1/100/721/jaguar-vision-gran-turismo-coupe-concept_100721446.jpg';
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-danger'>First slide label</h3>
          <p className='text-success'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> 
        <img
          className="d-block w-100 h-75"
          src={img1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-primary'>Second slide label</h3>
          <p className='text-danger'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;