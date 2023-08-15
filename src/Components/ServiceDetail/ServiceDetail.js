import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
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
            return <Loading></Loading>
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
                                    <button className='btn btn-success mt-5'>Place Order</button>

                              </Link>
                        </div>
                  </div>
            </div>


      );
};

export default ServiceDetail;