import React from 'react';
import google from '../../../../img-log/google.png';
import facebook from '../../../../img-log/facebook.png';
import github from '../../../../img-log/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { Navigate, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate =useNavigate()

    if(user || user1){
        navigate('/home')
    }
    let errorHandle;
    if(error || error1){
        errorHandle = <div>
            <p className='text-danger'>Errro {error?.message}{error1?.message}</p>
        </div>
    }
             
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:"1px"}} className='bg-primary w-50  '></div>
                <p className='mt-2 mx-2 '>or</p>
                <div style={{height:"1px"}} className='bg-primary w-50 '></div>
            </div>
             {errorHandle}
            <div>
            <button onClick={()=>signInWithGoogle()} className='btn btn-primary w-50 mt-3'> <img src={google} alt="" /><span className='mx-2'>Google Sign In</span></button>
                <br />
                <button className='btn btn-primary w-50 mt-3'> <img src={facebook} alt="" /><span className='mx-2'>Facebook Sign In</span></button>
                <br />
                <button className='btn btn-primary w-50 mt-3' onClick={()=>signInWithGithub()}> <img style={{width:'30px'}} src={github} alt="" /><span className='mx-2'>Github Sign In</span></button>
              
            </div>
     

        </div>
    );
};

export default SocialLogin;