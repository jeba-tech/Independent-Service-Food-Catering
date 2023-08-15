import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import Banner1 from '../../images/banner/Banner1.jpg'
import Banner2 from '../../images/banner/Banner2.jpg'
import Banner3 from '../../images/banner/Banner3.jpg'
// import PageTitle from '../PageTitle/PageTitle';

const Banner = () => {


      return (
            <Carousel>
                  {/* <PageTitle title="Home"></PageTitle> */}
                  <Carousel.Item interval={1000}>
                        <img
                              className="d-block w-100"
                              src={Banner1}
                              alt="First slide"
                        />
                        <Carousel.Caption>
                              <h3>Remote home made food delivery</h3>
                              <p>Providing food service at a remote site or a site such as a hotel, hospital, pub, aircraft, cruise ship, park, filming site or studio, entertainment site, or event venue. Home Cooked Food network of 8k+ homes, well-documented kitchens.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                        <img
                              className="d-block w-100"
                              src={Banner2}
                              alt="Second slide"
                        />
                        <Carousel.Caption>
                              <h3>Fresh Home Made Food</h3>
                              <p> The food is prepared in my own house, put in all the effort to make the food fresh, hot, healthy & hygienic, in a neatly packed meal box.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={Banner3}
                              alt="Third slide"
                        />
                        <Carousel.Caption>
                              <h3>Customers satisfaction</h3>
                              <p>
                                    Customers can use the platform to find home made food around them, connect with them to place an order, and have the food either picked up or opt-in for the delivery service.
                              </p>
                        </Carousel.Caption>
                  </Carousel.Item>
            </Carousel>
      );
};

export default Banner;