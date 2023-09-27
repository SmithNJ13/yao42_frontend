import { React, useRef, useState } from 'react'
import Lottie from 'lottie-react'
import animationData from '../../assets/cooking-ani.json'
import form from '../../assets/formBg.png'
import { Link } from 'react-router-dom'

const Login = () => {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = {
      username: name,
      password: password,
    };
  
    try {
      const response = await fetch('https://lap-4-server.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Login successful!', result);
  
        localStorage.setItem('token', result.token);
        localStorage.setItem('user_id', result.id);
        localStorage.setItem('email', result.email);
        window.location.href = '/';
      } else {
        console.error('Login failed!', await response.json());
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const cookingRef = useRef()

  return (
    <div id='page' className='tw-flex  tw-h-screen tw-w-full'>
      
      <div id='form-con' className='tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-m-auto tw-shadow-lg tw-shadow-gray-600 tw-border-none'>
        <div className='tw-hidden tw-relative md:tw-block tw-w-[400px] tw-h-[560px] tw-bg-green-300 tw-mx-auto'>
            <p className='dancing-script-font tw-text-4xl tw-w-full tw-text-white tw-mt-10 tw-absolute tw-text-center'>Welcome to szndChef</p>
            <Lottie onComplete={() => {
            }} lottieRef={cookingRef} animationData={animationData} className='tw-w-full tw-h-full tw-object-cover tw-relative tw-pt-11'
             />
        </div>
        <form style= {{ backgroundImage: `url(${form})`}} className= 'poppins-font tw-bg-cover tw-w-full tw-mx-auto tw-px-[4rem]' onSubmit={handleSubmit}>
          <h2 className='tw-text-left tw-text-4xl tw-text-white tw-font-bold tw-pt-[7.5rem] tw-pb-7 ' >Login</h2>
          <div className='tw-flex tw-flex-col tw-py-1'>
            <label>Username</label>
            <input className='tw-border-2 tw-rounded-lg focus:tw-border-green-700 focus:tw-outline-none tw-border-gray-200 tw-p-[0.4rem] tw-text-sm' 
            type='text' 
            placeholder='user'
            value={name}
            onChange={handleName}
            />
          </div>
          <div className='tw-flex tw-flex-col tw-py-1'>
            <label>Password</label>
            <input  className='tw-border-2 tw-rounded-lg focus:tw-border-green-700 focus:tw-outline-none tw-border-gray-200 tw-p-[0.4rem] tw-text-sm'
            type='password' 
            placeholder='Please enter your password...' 
            value={password}
            onChange={handlePassword}
            />
          </div>
          
          <button type='submit' className='tw-border tw-rounded-2xl tw-flex tw-mx-auto tw-justify-center tw-transition tw-ease-in-out tw-bg-green-500 hover:tw-bg-green-700 tw-w-1/3 tw-my-2 tw-py-2 tw-text-white tw-font-bold'>Login</button>
          <p className='tw-text-center tw-text-sm'>Need an account? <Link to="/register" className='tw-font-bold tw-transition tw-ease-in-out tw-text-green-500 hover:tw-text-green-700'>Sign-up</Link> here !</p>
        </form>
      </div>
    </div>
  )
}

export default Login
