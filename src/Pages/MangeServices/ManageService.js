import React from 'react';
import useServices from '../../hooks/useServices';

const ManageService = () => {
    const [services,setService] = useServices();
   
    const handleDelete =(id) =>{
        const proceed = window.confirm('Are You sure? to Delle');
        if(proceed){
            const url =`http://localhost:5000/service/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
               console.log(data)
               const remaining = services.filter(service=>service._id !== id);

               setService(remaining)
            })
        }
    }
    return (
        <div className='mx-auto w-50'>
            <h2>This is ManageService</h2>
            {
                services.map(service=><div key={service._id}>
                    <h5>{service.name} <button onClick={()=>handleDelete(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageService;