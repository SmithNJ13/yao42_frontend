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
    animate: {
        width: ['2%', '2%', '2%', '25%'],
        y: ['-100%', '0%', '0%', '0%']
    }
}
const text = {
    animate: {
        display: "block",
        y: ["5vh", "0vh"]
    }
}




const LandingPage = () => {

const navigate = useNavigate()

const navSpring = () => navigate("/spring")
const navSummer = () => navigate("/summer")
const navAutumn = () => navigate("/autumn")
const navWinter = () => navigate("/winter")



  return (
    <motion.div 
        className='tw-flex tw-h-screen tw-w-full tw-bg-slate-500'
        variants={parent}
        animate="animate"
        transition= {{ duration: 1, staggerChildren: 0.15, when: "beforeChildren" }}
    >
        <motion.div
            style={{ backgroundColor: '#BADC83' }}
            className='tw-h-full tw-flex tw-justify-center tw-items-center tw-overflow-hidden'
            onClick={navSpring}
            variants={child}
            transition={{ ease: "easeInOut", duration: 1.6, when: "beforeChildren" }}
            >
                <motion.h1 
                    className='tw-hidden tw-text-4xl tw-text-white'
                    variants={text}
                    transition={{ duration: 0.4, ease: [0, 0.55, 0.45, 1] }}
                    >SPRING</motion.h1>
        </motion.div> 

         <motion.div
            style={{ backgroundColor: '#FFE448' }}
            className='tw-h-full tw-flex tw-justify-center tw-items-center tw-overflow-hidden'
            onClick={navSummer}
            variants={child}
            transition={{ ease: "easeInOut", duration: 1.6, when: "beforeChildren"  }}
            >
                <motion.h1 
                    className='tw-hidden tw-text-4xl tw-text-white' 
                    variants={text}
                    transition={{ duration: 0.4, ease: [0, 0.55, 0.45, 1] }}
                    >SUMMER</motion.h1>
        </motion.div> 

         <motion.div
            style={{ backgroundColor: '#FFA500' }}
            className='tw-h-full tw-flex tw-justify-center tw-items-center tw-overflow-hidden'
            onClick={navAutumn}
            variants={child}
            transition={{ ease: "easeInOut", duration: 1.6, when: "beforeChildren"  }}
            >
                <motion.h1 
                    className='tw-hidden tw-text-4xl tw-text-white' 
                    variants={text}
                    transition={{ duration: 0.4, ease: [0, 0.55, 0.45, 1] }}
                    >AUTUMN</motion.h1>
        </motion.div>

         <motion.div
         style={{ backgroundColor: '#87CEEB' }}
            className= 'tw-h-full tw-flex tw-justify-center tw-items-center tw-overflow-hidden'
            onClick={navWinter}
            variants={child}
            transition={{ ease: "easeInOut", duration: 1.6, when: "beforeChildren"  }}
            >
                <motion.h1 
                    className='tw-hidden tw-text-4xl tw-text-white' 
                    variants={text}
                    transition={{ duration: 0.4, ease: [0, 0.55, 0.45, 1] }}
                    >WINTER</motion.h1>
        </motion.div>
        
    </motion.div>
  )
}

export default LandingPage