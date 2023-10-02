import React from 'react'
import BarLoader from "react-spinners/BarLoader";
import "./LoadingStyles.css"

const loading = () => {
  return (
    <div className='loading-con'>
        <div className='child-con'>
            <h1 className='text tw-text-4xl tw-pb-3'>loading...</h1>
            <BarLoader
            color={'#FFFFFF'}
            width={150}
            size={100}
            />
        </div>
    </div>
  )
}

export default loading 
