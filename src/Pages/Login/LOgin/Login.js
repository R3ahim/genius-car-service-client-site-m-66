import { Button } from 'react-bootstrap';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const location = useLocation();
    const navigate = useNavigate()


    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(user){
          navigate(from,{replace:true});
      }
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail();

    const handleSubmit =event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password)
        
    }
    const resetPassword = async()=>{
        const email = emailRef.current.value;
         await sendPasswordResetEmail(email);
         alert('sent email')
    }
 
    const navigateRegister =event=>{
        navigate('/register')
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center text-primary'>Please Login</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block" type="submit">
                 Login
                </Button>
            </Form>
            <p>New to Genius <Link to={'/register'} onClick={navigateRegister} className='text-primary text-decoration-none '>Please Register</Link></p>
            <p>Forget Password<Link to={'/register'} onClick={resetPassword} className='text-primary text-decoration-none '>Reset Password</Link></p>
      <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;