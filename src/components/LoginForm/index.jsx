import { React, useRef, useState } from 'react'
import Lottie from 'lottie-react'
import animationData from '../../assets/szndChef.json'
import form from '../../assets/form.png'
import logo from '../../assets/logo_color_transparent.png'
import './LoginForm.css'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

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
        localStorage.setItem('username', result.username);
        return navigate("/profile")
      } else {
        console.error('Login failed!', await response.json());
        alert('Login failed! Please check your credentials and ensure you have registered');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const cookingRef = useRef()

  return (
    <div id='page' className='tw-flex tw-justify-center tw-items-center tw-h-screen tw-w-full'>
      
      <div id='form-con' className='tw-rounded-xl tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-ml-[250px] tw-shadow-lg tw-shadow-gray-600 tw-border-none'>
      <div className='tw-hidden tw-rounded-l-xl tw-relative md:tw-block tw-w-[600px] tw-h-[760px]  tw-mx-auto leftsideform'>
            <p className='tw-text-4xl tw-w-full tw-text-white tw-mt-10 tw-absolute tw-text-center  tw-text-6xl'>Welcome to </p> <img src={logo} className='logo-login' alt='szndChef logo'/>
            <Lottie onComplete={() => {
            }} lottieRef={cookingRef} animationData={animationData} className='tw-object-cover tw-absolute tw-w-full tw-h-full tw-mt-[7rem]'/>
        </div>
        <form style= {{ backgroundImage: `url(${form})`}} className= 'poppins-font tw-rounded-r-xl tw-bg-cover tw-w-full tw-mx-auto tw-px-[4rem]' onSubmit={handleSubmit} autocomplete="off">
          <h2 className='tw-text-center tw-text-4xl tw-text-white tw-font-bold tw-pt-[12.5rem] tw-pb-[5.5rem]  tw-text-5xl'>Login</h2>
          <div className='tw-flex tw-flex-col tw-py-4 tw-text-xl'>
            <label>Username</label>
            <input className='tw-border-2 tw-rounded-lg focus:tw-outline-none tw-border-gray-200 tw-p-[0.7rem] tw-text-base ' 
            type='text' 
            placeholder='Please enter your username...'
            value={name}
            id='username'
            onChange={handleName}
            />
          </div>
          <div className='tw-flex tw-flex-col tw-py-9 tw-text-xl'>
            <label>Password</label>
            <input  className='tw-border-2 tw-rounded-lg focus:tw-outline-none tw-border-gray-200 tw-p-[0.7rem] tw-text-base'
            type='password' 
            placeholder='Please enter your password...' 
            value={password}
            id='password'
            onChange={handlePassword}
            />
          </div>
          
          <button type='submit' className='tw-border tw-flex tw-mx-auto tw-justify-center tw-transition tw-ease-in-out tw-w-1/3 tw-text-xl tw-my-2 tw-py-2 tw-text-white tw-font-bold formbutton'>Login</button>
          <p className='tw-text-center tw-pt-3 tw-text-lg'>Need an account? <Link to="/register" className='tw-font-bold tw-transition tw-ease-in-out formlink'>Sign-up</Link> here !</p>
        </form>
      </div>
    </div>
  )
}

export default Login
