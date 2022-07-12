import React from 'react';
import './Service.css';
const Service = ({ service }) => {

      const { name, photograph, price, address } = service;

      return (
            <div className='service'>
                  <img src={photograph} />
                  <h1>{name}</h1>
                  <h2>{price}</h2>
                  <h4>{address}</h4>
                  <button className='btn btn-outline-dark'>Order Now</button>

            </div>
      );
};

export default Service;