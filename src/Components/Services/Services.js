import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
import PageTitle from '../PageTitle/PageTitle';
const Services = () => {
      const [services, setServices] = useState([]);
      console.log("hfksjdh", services)
      useEffect(() => {
            fetch('services.json')
                  .then(res => res.json())
                  .then(data => setServices(data));
      }, [])
      return (
            <div id='services'>
                  {/* <PageTitle title="Service"></PageTitle> */}
                  <h1 className='service-title'>Services</h1>

                  <div className='services-container'>
                        {
                              services.map(service => <Service
                                    key={service.id}
                                    service={service}
                              ></Service>)
                        }
                  </div>
            </div>
      );
};

export default Services;