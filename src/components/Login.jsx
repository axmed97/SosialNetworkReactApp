import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { authLoginActions } from '../redux/actions/AuthAction';
import { LoadingButton } from '@mui/lab';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const {user} = useSelector(x => x.auth);
    const dispatch = useDispatch();

    const loginHandler = () => {
        dispatch(authLoginActions(email, password))
    }

    useEffect(() =>{
        if(user.success){
            localStorage.setItem('token', user.message);
            navigate('/home')

        }
    }, [navigate, user])


  return (
    <div className='bg-cyan-950 w-2/5 mx-auto mt-32 p-7 rounded-md'>
        <div className='mb-5'>
            <TextField onChange={(e) => setEmail(e.target.value)} className='w-full bg-cyan-700 text-white rounded-md border-white' id="outlined-basic" label="Email" type='email' variant="outlined" />
        </div>
        <div className='mb-5'>
            <TextField onChange={(e) => setPassword(e.target.value)} className='w-full bg-cyan-700 rounded-md' id="outlined-basic" label="Password" type='password' variant="outlined" />
        </div> 
        <div className='flex items-center justify-between'>
            {
                !user.isLoading ?(
                    <button onClick={() => loginHandler()}>
                Login
            </button>
                ) : 
                <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
            }
            
            <Link to='/register'>
                    Register
            </Link>
        </div>
        <div className='mt-2'>
            <p className='text-white'>
                Forgot Password
            </p>
        </div>
    </div>
  )
}

export default Login