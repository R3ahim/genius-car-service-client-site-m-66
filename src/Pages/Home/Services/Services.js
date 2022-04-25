import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Sarvices.css'




const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services' className='container'>
            <div className="row">
                <h1 className='services-title' >Our kerervices</h1>

                <div className='services-contianer'>
                    {
                        services.map(service => <Service
                            service={service}
                            key={service._id}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;