import React from 'react'
import { motion } from 'framer-motion'
import './landingStyles.css'
import { useNavigate } from 'react-router-dom'



const parent = {
    animate: {
        opacity: [1, 1]
    }
}


const child = {
    // initial: { 
    //     width: 10,
    //     y: ["-100%", 0]
    // },
    animate: {
        width: ['2%', '2%', '2%', '25%'],
        y: ['-100%', '0%', '0%', '0%']
    }
}




const LandingPage = () => {

const navigate = useNavigate()

const navSpring = () => navigate("/spring")
const navSummer = () => navigate("/summer")
const navAutumn = () => navigate("/autumn")
const navWinter = () => navigate("/winter")



  return (
    <motion.div className='tw-flex tw-h-screen tw-w-full tw-bg-slate-500'
        variants={parent}
        animate="animate"
        transition= {{ duration: 1, staggerChildren: 0.15, when: "beforeChildren" }}
    >
        <motion.div 
            className='tw-bg-yellow-400 tw-h-full'
            onClick={navSpring}
            variants={child}
            transition={{ ease: "easeInOut", duration: 1.6 }}
        />

         <motion.div 
            className='tw-bg-green-400 tw-h-full'
            onClick={navSummer}
            variants={child}
            transition={{ ease: "easeInOut", duration: 1.6 }}
        />

         <motion.div
            className='tw-bg-amber-500 tw-h-full'
            onClick={navAutumn}
            variants={child}
            transition={{ ease: "easeInOut", duration: 1.6 }}
        />

         <motion.div
            className='tw-bg-teal-500 tw-h-full'
            onClick={navWinter}
            variants={child}
            transition={{ ease: "easeInOut", duration: 1.6 }}
        />
        
    </motion.div>
  )
}

export default LandingPage