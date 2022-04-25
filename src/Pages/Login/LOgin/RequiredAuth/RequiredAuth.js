import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init'
import Loading from '../../../Shared/Loading/Loading';


const RequiredAuth = ({children}) => {
    const [user,loading] =useAuthState(auth)
    const [sendEmailVerification, sending, error] = useSendEmailVerification()

    const location = useLocation()
    if(loading){
        return <Loading></Loading>

    }
    if(!user){ 
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    if(user.providerData[0].providerId==='password' &&!user.emailVerified){
        return <div className=''>
            <div className='mx-auto w-75 mt-5'>
                
            <h2 className='text-danger'>Your email is not Verified!</h2>
              <h5 className='text-success'>Please Verify Your email Address</h5>
              <button className='btn btn-primary mx-4' onClick={async () => {
          await sendEmailVerification();
          alert('Sent email');
        }}>Send Verifaction email</button>
        </div>
        
        </div>
    }
  
    return children; 
};

export default RequiredAuth;