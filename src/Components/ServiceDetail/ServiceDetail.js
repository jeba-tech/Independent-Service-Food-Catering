import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
      const { serviceId } = useParams();
      return (
            <div className='detail'>
                  <h1 className='mt-5'>welcome to detail:{serviceId}</h1>
                  <div className='text-center'>
                        <Link to="/order">
                              <button className='btn btn-success mt-5'>Order Now</button>

                        </Link>
                  </div>
            </div>
      );
};

export default ServiceDetail;