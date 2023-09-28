import React from 'react'
import { motion } from 'framer-motion'
import './landingStyles.css'

const parent = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.15,
            when: "beforeChildren"
        },
    },
};

const child = {
    initial: { 
        y: "-100%",
    },
    animate: {
        y: 0,
        transition: {
            // type: "inertia",
            // velocity: 125,
            duration: 0.8
        }
    },
};

const LandingPage = () => {


  return (
    <motion.div className='tw-flex tw-h-screen tw-w-full tw-bg-slate-500'
        variants={parent}
        initial="initial"
        animate="animate"
    >
        <motion.div 
            className='tw-bg-red-400 tw-h-full tw-w-[20px]'
            variants={child}
        />

         <motion.div 
            className='tw-bg-red-300 tw-h-full tw-w-[20px]'
            variants={child}
        />

         <motion.div
            className='tw-bg-red-200 tw-h-full tw-w-[20px]'
            variants={child}
        />

         <motion.div
            className='tw-bg-red-100 tw-h-full tw-w-[20px]'
            variants={child}
        />
        
    </motion.div>
  )
}

export default LandingPage