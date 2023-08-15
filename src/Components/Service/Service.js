import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

// import { Helmet } from 'react-helmet-async';
const Service = ({ service }) => {

      const { id, name, photograph, price, address } = service;
      const navigate = useNavigate();
      const navigateToServiceDetail = id => {
            navigate(`/service/${id}`)
      }
      return (
            <div>
                  {/* 
                  <Helmet>
                        <title>Service -Home Cooking</title>
                  </Helmet> */}


                  <div className='service rounded-3'>
                        <img className='service-img' src={photograph} />
                        <h2 className='dish-name'>{name}</h2>
                        <h4>${price}</h4>
                        <h4 className='description' style={{ textAlign: "justify" }}>{address.length <= 115 ? address : address.substring(0, 115) + "..."}</h4>
                        {/* <h4 className='description'>{address.substring(0, 300) + "..."}</h4> */}
                        <button onClick={() => navigateToServiceDetail(id)} className='btn btn-outline-dark mt-2'>Order Now</button>

                  </div>
            </div>

      );
};

export default Service;