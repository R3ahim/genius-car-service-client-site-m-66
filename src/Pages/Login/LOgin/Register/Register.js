import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import './Register.css'
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
const Register = () => {
  const [agree,setAgree] = useState(false)
        const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
        ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true}) ;
        const [updateProfile, updating, updateEroor] = useUpdateProfile(auth);
        const navigate = useNavigate();

        if(user){
            console.log(user);
           }
        const handleRegister = async(event) =>{
            event.preventDefault();
            const name = event.target.name.value;
            const email = event.target.email.value;
            const password =event.target.password.value;
        //    const agree = event.target.terms.checked;

               await createUserWithEmailAndPassword(email,password)
              await updateProfile({displayName:name})
              console.log('upadated Profile')
              navigate('/home') 
              
          
        }

        return (

            <div className='register-form'>
                <h2 style={{ textAlign: 'center' }}>Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" name="name" id="" placeholder='Your Name' />

                    <input type="email" name="email" id="" placeholder='Email Address' required />
                    <input type="password" name="password" id="" placeholder='Password' required />
                    <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />   
                    <label className={agree ? 'text-primary ps-2':'text-danger ps-2'} htmlFor="terms">Accept terms and condition</label>
                    <input 
                       disabled={!agree}
                    className='btn-primary w-50 d-block mx-auto'
                     type="submit" value="Register" />
                    {/* <input className={agree ?' w-50 mx-auto btn btn-primary': 'disabledRange w-50 mx-auto  btn btn-secondary'} type="submit" value="Register" /> */}
                    {/* <input className={`w-50 mx-auto btn ${agree ?'btn-primary' : 'disabledRange btn-secondery'}`} type="submit" value="Register" /> */}
                </form>
                <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none'>Please Login</Link> </p>
                <SocialLogin></SocialLogin>



         </div>


        );
    };

    export default Register;

