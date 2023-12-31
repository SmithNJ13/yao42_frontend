/* eslint-disable react/no-unknown-property */
import { React, useRef, useState } from 'react'
import Lottie from 'lottie-react'
import animationData from '../../assets/szndChef.json'
import form from '../../assets/form.png'
import chefHat from '../../assets/chefhat.png'
import './RegisterForm.css'
import { useNavigate, Link } from "react-router-dom"

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passConfirm, setPassConfirm] = useState('')
  const navigate = useNavigate()

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handlePassConfirm = (e) => {
    setPassConfirm(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!(password === passConfirm)) return;
    const data = {
      username: name,
      email: email,
      password: password,
    };
    try {
      const response = await fetch('https://lap-4-server.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
       
        console.log('Registration successful!', await response.json());
        return navigate("/login")
      } else {
        
        console.error('Registration failed!', await response.text());
        alert('Register Failed. This account already exists!');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };
  

  const cookingRef = useRef()

  return (
    <div id='page' className='tw-flex tw-h-screen tw-justify-center tw-items-center tw-w-full'>
      
      <div id='form-con' className='tw-rounded-xl tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-ml-[250px] tw-shadow-lg tw-shadow-gray-600 tw-border-none'>
      <div className='tw-hidden tw-rounded-l-xl tw-relative md:tw-block tw-w-[600px] tw-h-[760px] tw-mx-auto leftsideform'>
      <p className='tw-text-4xl tw-w-full tw-text-white tw-mt-10 tw-absolute tw-text-center tw-font-bold tw-text-7xl welcome1'>Welcome to </p> 
    
            <img src={chefHat} className='chef-hat-logo1' alt='Chef hat'/>
            <p className='tw-text-4xl tw-w-full tw-mt-10 tw-absolute tw-text-center tw-font-bold tw-text-7xl szndChef1'> szndChef </p>
            <Lottie onComplete={() => {
            }} lottieRef={cookingRef} animationData={animationData} className='lottie1'/>
        </div>
        <form style= {{ backgroundImage: `url(${form})`}} className= 'poppins-font tw-rounded-r-xl tw-bg-cover tw-w-full tw-mx-auto tw-px-[4rem]' onSubmit={handleSubmit} autocomplete="off">
        <h2 className='tw-text-center tw-text-4xl tw-text-white tw-font-bold tw-pt-[12.5rem] tw-pb-[3.5rem]  tw-text-5xl'>Register</h2>
          <div className='tw-flex tw-flex-col tw-py-2 tw-text-xl'>
            <label htmlFor='username'>Username</label>
            <input className='tw-border-2 tw-rounded-lg focus:tw-outline-none tw-border-gray-200 tw-p-[0.4rem] tw-text-base' 
              type='text' 
              placeholder='user123'
              value={name}
              onChange={handleName}
              id='username'
            />
          </div>
          <div className='tw-flex tw-flex-col tw-py-2 tw-text-xl'>
            <label htmlFor='email'>Email</label>
            <input className='tw-border-2 tw-rounded-lg focus:tw-outline-none tw-border-gray-200 tw-p-[0.4rem] tw-text-base' 
              type='email' 
              placeholder='e.g. JohnDoe@email.com'
              value={email}
              onChange={handleEmail} 
              id='email'
              />
          </div>
          <div className='tw-flex tw-flex-col tw-py-2 tw-text-xl'>
            <label htmlFor='password'>Password</label>
            <input className='tw-border-2 tw-rounded-lg focus:tw-outline-none tw-border-gray-200 tw-p-[0.4rem] tw-text-base' 
              type='password' 
              placeholder='Please enter your password...'
              value={password}
              onChange={handlePassword}
              id='password'
              />
          </div>
          <div className='tw-flex tw-flex-col tw-py-2 tw-text-xl'>
            <label htmlFor='confirm'>Confirm Password</label>
            <input className='tw-border-2 tw-rounded-lg focus:tw-outline-none tw-border-gray-200 tw-p-[0.4rem] tw-text-base'
              type='password'  
              placeholder='Please re-enter your password...' 
              value={passConfirm}
              onChange={handlePassConfirm}
              id='confirm'
              />
          </div>
          <button type='submit' className='tw-border tw-rounded-2xl tw-flex tw-mx-auto tw-justify-center tw-transition tw-ease-in-out tw-text-xl tw-w-1/3 tw-my-2 tw-py-2 tw-text-white tw-font-bold formbutton'>Sign-Up</button>
          <p className='tw-text-center tw-pt-2 tw-text-base'>Already have an account? <Link to="/login" className='tw-font-bold tw-transition tw-ease-in-out formlink'>Login</Link> here !</p>
        </form>
      </div>
    </div>
  )
}

export default Register
