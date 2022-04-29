




/* 

        name:'Akbar the Great',
        email:'akbar@gmail.com',
        address:'Tajmahal',
        phone:'017455455645856' */

/* 
    // const handleAddressChange = event=>{
    //     const {address, ...rest} = user;
    //     const newAdress = event.target.value;
    //     const newUser = {address:newAdress, ...rest}
    //     setUser(newUser)
    // }
*/
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';


const Checkout = () => {
    const {serviceId}= useParams();
    const [service] = useServiceDetail(serviceId);

    const [user] = useAuthState(auth);

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            email:user.email,
            service : service.name,
            serviceId:serviceId,
            address:event.target.address.value,
            phone:event.target.phone.value
        }
        axios.post('http://localhost:5000/order',order)
        .then(response=>{
            const {data} = response;
            if(data.insertedId){
                toast('your order is booked')
                event.target.reset();
            }
        })


    }
    return (
        <div className='w-50 mx-auto'> 
            <h2>Please Order {service.name}</h2>
            <form onSubmit={handlePlaceOrder} >
                <input className='w-100 mb-3' value={user?.displayName} readOnly type="text" name='name' placeholder='Name' required/>
                <br />
                <input className='w-100 mb-3' type="email" value={user?.email} disabled readOnly name='email' placeholder='email' required/>
                <br />
                <input className=' w-100 mb-3' type="text" readOnly value={service.name} name='service' placeholder='service' required/>
                <br />
                <input className='w-100 mb-3'   type="text"  name='address' autoComplete='off' placeholder='address' required/>
                <br />
                <input className='w-100 mb-3' type="number" name='phone' placeholder='phone' required/>
                <br />
                <input className='btn btn-primary' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Checkout;