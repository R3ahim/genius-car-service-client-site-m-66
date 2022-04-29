import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/asiosPrivate';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth)
    const [orders,setOrders]= useState([]);
    const navigate = useNavigate()
    useEffect(()=>{
      const getOrders = async()=>{
          const email = user.email;
          const url =`http://localhost:5000/order?email=${email}`;
         try{
            const {data}  = await axiosPrivate.get(url)
                setOrders(data);
         }
         catch(error){
             console.log(error);
             if(error.response.status === 401 || error.response.status === 403)
              signOut(auth)
             navigate('/login')
         }
      }
      getOrders(user)

    },[])

    return (
        <div>
            <h1>thisis is is order {orders.length}</h1>
            {
orders.map(order=><li>{order.email}</li>)
            }
        </div>
    );
};

export default Order;