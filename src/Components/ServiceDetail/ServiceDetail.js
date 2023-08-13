import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import services from '../../../public/services.json';
const ServiceDetail = () => {

      const { serviceId } = useParams();
      const [singleData, setSingleData] = useState(null);


      useEffect(() => {
            fetch('/services.json') // Fetch the JSON file from the public directory
                  .then(response => response.json())
                  .then(data => {
                        const service = data.find(service => service.id === parseInt(serviceId));
                        if (service) {
                              setSingleData(service);
                        } else {
                              console.error('Service not found');
                        }
                  })
                  .catch(error => {
                        console.error('Error fetching data:', error);
                  });
      }, [serviceId]);

      if (!singleData) {
            return <p>Loading...</p>;
      }



      if (!singleData) {
            return <p>Loading...</p>;
      }
      return (
            <div style={{ alignItems: 'center' }}>
                  <div className='service rounded-3' style={{ width: '50%', padding: '74px', marginTop: '100px', marginLeft: '400px' }} >
                        <img className='service-img' src={singleData.photograph} />
                        <h2 className='dish-name'>{singleData.name}</h2>
                        <h4>${singleData.price}</h4>
                        <h4 className='description' style={{ textAlign: "justify" }}>{singleData.address}</h4>
                        <div className='text-center'>
                              <Link to="/order">
                                    <button className='btn btn-success mt-5'>Order Now</button>

                              </Link>
                        </div>
                  </div>
            </div>


      );
};

export default ServiceDetail;