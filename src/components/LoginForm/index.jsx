import { React, useRef } from 'react'
import Lottie from 'lottie-react'
import animationData from '../../assets/cooking-ani.json'
import form from '../../assets/formBg.png'

const Login = () => {

  const cookingRef = useRef()

  return (
    <div id='page' className='tw-flex  tw-h-screen tw-w-full'>
      
      <div id='form-con' className='tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-m-auto tw-shadow-lg tw-shadow-gray-600 tw-border-none'>
        <div className='tw-hidden tw-relative md:tw-block tw-w-[400px] tw-h-[550px] tw-bg-green-300 tw-mx-auto'>
            <p className='dancing-script-font tw-text-4xl tw-w-full tw-text-white tw-mt-10 tw-absolute tw-text-center'>Welcome to szndChef</p>
            <Lottie onComplete={() => {
            }} lottieRef={cookingRef} animationData={animationData} className='tw-w-full tw-h-full tw-object-cover tw-relative tw-pt-11'
             />
        </div>
        <form style= {{ backgroundImage: `url(${form})`}} className= 'poppins-font tw-bg-cover tw-w-full tw-mx-auto tw-px-[4rem]'>
          <h2 className='tw-text-left tw-text-4xl tw-text-white tw-font-bold tw-pt-[7.5rem] tw-pb-7 ' >Login</h2>
          <div className='tw-flex tw-flex-col tw-py-1'>
            <label>Username</label>
            <input type='text' placeholder='user' className='tw-border-2 tw-rounded-lg focus:tw-border-green-700 focus:tw-outline-none tw-border-gray-200 tw-p-[0.4rem] tw-text-sm'/>
          </div>
          <div className='tw-flex tw-flex-col tw-py-1'>
            <label>Email</label>
            <input type='email' placeholder='e.g. JohnDoe@email.com' className='tw-border-2 tw-rounded-lg focus:tw-border-green-700 focus:tw-outline-none tw-border-gray-200 tw-p-[0.4rem] tw-text-sm' />
          </div>
          <div className='tw-flex tw-flex-col tw-py-1'>
            <label>Password</label>
            <input type='text' className='tw-border-2 tw-rounded-lg focus:tw-border-green-700 focus:tw-outline-none tw-border-gray-200 tw-p-[0.4rem] tw-text-sm' placeholder='Please enter your password...' />
          </div>
          
          <button type='submit' className='tw-border tw-rounded-2xl tw-flex tw-mx-auto tw-justify-center tw-transition tw-ease-in-out tw-bg-green-500 hover:tw-bg-green-700 tw-w-1/3 tw-my-2 tw-py-2 tw-text-white tw-font-bold'>Login</button>
          <p className='tw-text-center tw-text-sm'>Need an account? Sign-up here !</p>
        </form>
      </div>
    </div>
  )
}

export default Login