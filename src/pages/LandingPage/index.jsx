import React from 'react'
import { motion } from 'framer-motion'
import './landingStyles.css'
import { useNavigate } from 'react-router-dom'



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

const navigate = useNavigate()

const navSpring = () => navigate("/spring")
const navSummer = () => navigate("/summer")
const navAutumn = () => navigate("/autumn")
const navWinter = () => navigate("/winter")



  return (
    <motion.div className='tw-flex tw-h-screen tw-w-full tw-bg-FFE448'
        variants={parent}
        initial="initial"
        animate="animate"
    >
        <motion.div 
            className='tw-bg-yellow-400 tw-h-full tw-w-[25%]'
            onClick={navSpring}
            variants={child}
        />

         <motion.div 
            className='tw-bg-green-400 tw-h-full tw-w-[25%]'
            onClick={navSummer}
            variants={child}
        />

         <motion.div
            className='tw-bg-amber-500 tw-h-full tw-w-[25%]'
            onClick={navAutumn}
            variants={child}
        />

         <motion.div
            className='tw-bg-teal-500 tw-h-full tw-w-[25%]'
            onClick={navWinter}
            variants={child}
        />
        
    </motion.div>
  )
}

export default LandingPage