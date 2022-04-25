    import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
    import './Service.css'
    const Service = ({service}) => {
        
        const { _id,img,name,description,price} = service
        const navigate = useNavigate();
        const navigateToServiceDetail  = id =>{
         navigate(`/service/${id}`)
        }
        return (
            <div className='service m-4' >
                <img className='' src={img} alt="" />
                <h2>{name}</h2>
                <p>price: {price}</p>
                <p><small>{description}</small></p>
                <button onClick={()=>navigateToServiceDetail(_id)} className=' btn btn-primary  '>Book {name}</button>

            </div>
        );
    };
    
    export default Service;