import React from 'react'
import { motion } from 'framer-motion'
import './landingStyles.css'
import { useNavigate } from 'react-router-dom'
// BANNER 1
import sun1 from "../../assets/Banner1/sun 1.png"
import cloud1 from "../../assets/Banner1/Cloud 1.png"
import cloud2 from "../../assets/Banner1/Cloud 2.png"
import cloud3 from "../../assets/Banner1/Ellipse 9.png"
import island1 from "../../assets/Banner1/Island 1.png"
// BANNER 2
import sun2 from "../../assets/Banner2/Sun 2.png"
import cloud2_1 from "../../assets/Banner2/Cloud 4.png"
import cloud2_2 from "../../assets/Banner2/Cloud 5.png"
import cloud2_3 from "../../assets/Banner2/Cloud 6.png"
import island2 from "../../assets/Banner2/Island 2.png"
// BANNER 3
import sun3 from "../../assets/Banner3/Sun 3.png"
import cloud3_1 from "../../assets/Banner3/Cloud 3.png"
import cloud3_2 from "../../assets/Banner3/Cloud 7.png"
import island3 from "../../assets/Banner3/Island 3.png"
// BANNER 4
import sun4 from "../../assets/Banner4/Sun 4.png"
import cloud4_1 from "../../assets/Banner4/Cloud 3.png"
import cloud4_2 from "../../assets/Banner4/Cloud 3-1.png"
import cloud4_3 from "../../assets/Banner4/Cloud 7.png"
import island4 from "../../assets/Banner4/Island 4.png"


const parent = {
    animate: {
        opacity: [1, 1],
    transition: {
        duration: 0.1, 
        staggerChildren: 0.15, 
        when: "beforeChildren"
        }
    }
}


const child = {
    animate: {
        width: ['1%', '1%', '1%', '25%'],
        y: ['-100%', '0%', '0%', '0%'],
        transition: {
            ease: "easeInOut", 
            duration: 1.6,
            when: "beforeChildren" 
        }
    },
}
const text = {
    animate: {
        display: "block",
        y: ["5vh", "0vh"],
    transition: { duration: 0.4, ease: [0, 0.55, 0.45, 1] }
    } 
}
const bannerImgs = {
    animate: {
        display: "block",
        y: ["30vh", "0vh"],
    transition: { duration: 0.4, delay: 0.1, ease: [0, 0.55, 0.45, 1] }
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
        style={{ backgroundColor: "#D296EE" }}
        className='tw-flex tw-h-screen tw-w-full'
        variants={parent}
        animate="animate"
        
    >
        <motion.div
        data-testid='spring'
            style={{ backgroundColor: '#BADC83' }}
            className='season-banner tw-h-full tw-w-min-[15%] tw-flex tw-justify-center tw-items-center tw-overflow-hidden'
            onClick={navSpring}
            variants={child}
            >
                <motion.h1 
                    className='tw-hidden tw-text-4xl tw-text-white'
                    variants={text}
                    style={{ textShadow: '2px 3px 4px rgba(0, 0, 0, 0.5)' }}
                    // 
                    >SPRING</motion.h1>
                <motion.img className='tw-hidden tw-absolute tw-left-[2rem] tw-top-[2rem]'
                    variants={bannerImgs}
                    src={sun1} 
                    alt='sun one' />
                <motion.img className='tw-hidden tw-absolute tw-right-[2rem] tw-top-[2rem]'
                    variants={bannerImgs}
                    src={cloud1} 
                    alt='cloud one' />
                <motion.img className='tw-hidden tw-absolute tw-left-[2rem] tw-top-[8rem]' 
                    variants={bannerImgs}
                    src={cloud2} 
                    alt='cloud two' />
                <motion.img className='tw-hidden tw-absolute tw-left-[12rem] tw-top-[9.1rem]'
                    variants={bannerImgs}
                    src={cloud3} 
                    alt='cloud three' />
                <motion.img className='tw-hidden tw-absolute tw-bottom-[3rem]'
                    variants={bannerImgs}
                    src={island1} 
                    alt='island one' />
        </motion.div> 

         <motion.div
            data-testid='summer'
            style={{ backgroundColor: '#FFE448' }}
            className='season-banner tw-h-full tw-w-min-[15%] tw-flex tw-justify-center tw-items-center tw-overflow-hidden'
            onClick={navSummer}
            variants={child}
            // transition={{ ease: "easeInOut", duration: 1.6, when: "beforeChildren"  }}
            >
                <motion.h1 
                    className='tw-hidden tw-text-4xl tw-text-white' 
                    variants={text}
                    style={{ textShadow: '2px 3px 4px rgba(0, 0, 0, 0.5)' }}
                    
                    >SUMMER</motion.h1>
                <motion.img className='tw-hidden tw-absolute tw-left-[2rem] tw-top-[2rem]'
                    variants={bannerImgs}
                    src={sun2} 
                    alt='sun one' />
                <motion.img className='tw-hidden tw-absolute tw-right-[2rem] tw-top-[2rem]'
                    variants={bannerImgs}
                    src={cloud2_1} 
                    alt='cloud one' />
                <motion.img className='tw-hidden tw-absolute tw-left-[2rem] tw-top-[8rem]'
                    variants={bannerImgs} 
                    src={cloud2_2}
                     alt='cloud two' />
                <motion.img className='tw-hidden tw-absolute tw-left-[16rem] tw-top-[9rem]'
                    variants={bannerImgs}
                    src={cloud2_3} 
                    alt='cloud three' />
                <motion.img className='tw-hidden tw-absolute tw-bottom-[3rem]'
                    variants={bannerImgs}
                    src={island2} 
                    alt='island one' />
                    
        </motion.div> 

         <motion.div
         data-testid='autumn'
            style={{ backgroundColor: '#FFA500' }}
            className='season-banner tw-h-full tw-w-min-[15%] tw-flex tw-justify-center tw-items-center tw-overflow-hidden'
            onClick={navAutumn}
            variants={child}
            >
                <motion.h1 
                    className='tw-hidden tw-text-4xl tw-text-white' 
                    variants={text}
                    style={{ textShadow: '2px 3px 4px rgba(0, 0, 0, 0.5)' }}
                    
                    >AUTUMN</motion.h1>
                <motion.img className='tw-hidden tw-absolute tw-left-[2rem] tw-top-[2rem]'
                    variants={bannerImgs}
                    
                    src={sun3} 
                    alt='sun one' />
                <motion.img className='tw-hidden tw-absolute tw-right-[2rem] tw-top-[2rem]'
                    variants={bannerImgs}
                    
                    src={cloud3_1} 
                    alt='cloud one' />
                <motion.img className='tw-hidden tw-absolute tw-left-[2rem] tw-top-[8rem]'
                    variants={bannerImgs}
                    src={cloud3_2} 
                    alt='cloud two' />
                <motion.img className='tw-hidden tw-absolute tw-bottom-[3rem]'
                    variants={bannerImgs}
                   
                    src={island3}
                    alt='island one' />
        </motion.div>

         <motion.div
            data-testid='winter'
         style={{ backgroundColor: '#87CEEB' }}
            className= 'season-banner tw-h-full tw-w-min-[15%] tw-flex tw-justify-center tw-items-center tw-overflow-hidden'
            onClick={navWinter}
            variants={child}
            >
                <motion.h1 
                    className='tw-hidden tw-text-4xl tw-text-white' 
                    variants={text}
                    style={{ textShadow: '2px 3px 4px rgba(0, 0, 0, 0.5)' }}
                    
                    >WINTER</motion.h1>
                <motion.img className='tw-hidden tw-absolute tw-left-[2rem] tw-top-[2rem]'
                    variants={bannerImgs}
                    
                    src={sun4} 
                    alt='sun one' />
                <motion.img className='tw-hidden tw-absolute tw-right-[2rem] tw-top-[2rem]'
                    variants={bannerImgs}
                    
                    src={cloud4_1} 
                    alt='cloud one' />
                <motion.img className='tw-hidden tw-absolute tw-left-[2rem] tw-top-[8rem]'
                    variants={bannerImgs}
                    src={cloud4_2} 
                    alt='cloud two' />
                <motion.img className='tw-hidden tw-absolute tw-left-[20rem] tw-top-[11.25rem]'
                    variants={bannerImgs}
                    
                    src={cloud4_3} 
                    alt='cloud three' />
                <motion.img className='tw-hidden tw-absolute tw-bottom-[3rem]'
                    variants={bannerImgs}
                
                    src={island4} 
                    alt='island one' />
        </motion.div>
        
    </motion.div>
  )
}

export default LandingPage
