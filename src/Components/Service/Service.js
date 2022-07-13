import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {

      const { id, name, photograph, price, address } = service;
      const navigate = useNavigate();
      const navigateToServiceDetail = id => {
            navigate(`/service/${id}`)
      }
      return (
            <div className='service'>
                  <img className='service-img' src={photograph} />
                  <h1 className='dish-name'>{name}</h1>
                  <h2>${price}</h2>
                  <h4 className='description'>{address}</h4>
                  <button onClick={() => navigateToServiceDetail(id)} className='btn btn-outline-dark mt-2'>Order Now</button>

            </div>
      );
};

export default Service;