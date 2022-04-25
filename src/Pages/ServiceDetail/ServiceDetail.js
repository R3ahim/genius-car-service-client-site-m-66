import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { useParams , useNavigate } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const naviget = useNavigate();
   const [service,setService] = useState({});
   useEffect(()=>{
       const url =`http://localhost:5000/service/${serviceId}`
       fetch(url)
       .then(res=>res.json())
       .then(data=>setService(data))
   },[]);

    const handlenaviget = ()=>{
        naviget('/checkout')
    }
    return (
        <div>   
            <h2>Welcoem to detail : {serviceId}</h2>
            <h3>this is price {service.name}</h3>
            <button className='btn btn-success mx-auto w-50 d-block' onClick={handlenaviget}>danger</button>
            
        </div>
    );
};

export default ServiceDetail;