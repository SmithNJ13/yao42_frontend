import { React, useRef } from 'react'
import Lottie from 'lottie-react'
import animationData from '../../assets/cooking-ani.json'
import form from '../../assets/formBg.png'

const Login = () => {

  const cookingRef = useRef()

  return (
    <div id='page' className='flex  h-screen w-full'>
      
      <div id='form-con' className='grid grid-cols-1 md:grid-cols-2 m-auto shadow-lg shadow-gray-600 border-none'>
        <div className='hidden relative md:block w-[400px] h-[550px] bg-green-300 mx-auto'>
            <p className='w-full left-[130px] text-white mt-10 absolute'>Welcome to szndChef</p>
            {/* <img className='w-full h-full object-cover' src={food} alt='/' /> */}
            <Lottie onComplete={() => {
            }} lottieRef={cookingRef} animationData={animationData} className='w-full h-full object-cover relative pt-11'
             />
        </div>
        <form style= {{ backgroundImage: `url(${form})`}} className= 'bg-cover w-full mx-auto px-[4rem]'>
          <h2 className='text-left text-4xl text-white font-bold pt-[7.5rem] pb-7' >Login</h2>
          <div className='flex flex-col py-1'>
            <label>Username</label>
            <input type='text' className='border p-1'/>
          </div>
          <div className='flex flex-col py-1'>
            <label>Email</label>
            <input type='text' className='border p-1' />
          </div>
          <div className='flex flex-col py-1'>
            <label>Password</label>
            <input type='text' className='border p-1' placeholder='Please enter your password...' />
          </div>
          <div className='flex flex-col py-1'>
            <label>Confirm Password</label>
            <input type='text' className='border p-1' placeholder='Please re-enter your password...' />
          </div>
          <button type='submit' className='border rounded-2xl flex mx-auto justify-center transition ease-in-out bg-green-500 hover:bg-green-700 w-1/3 my-2 py-2 text-white font-bold'>Sign-Up</button>
          <p className='text-center'>Already have an account? Login here !</p>
        </form>
      </div>
    </div>
  )
}

export default Login