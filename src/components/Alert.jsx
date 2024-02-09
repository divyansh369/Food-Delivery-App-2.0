import React from 'react'
import {motion} from 'framer-motion'
import { fadeInOut } from '../animation'
import {FaCheck} from '../assets/icons'
import { BsExclamationTriangle, BsExclamationTriangleFill } from 'react-icons/bs'

const Alert = ({type,message}) => {
    if(type==="success"){
        return (
            <motion.div 
            {...fadeInOut} 
            className='fixed z-50 top-32 right-12 px-4 py-2 rounded-md backdrop-blur-sm bg-eme-300 shadow-md flex items-center gap-4'
            >
                <FaCheck className='texl-xl text-eme-700'/>
                <p className='text-xl text-eme-700 '>{message}</p>
            </motion.div>
        )
    }
    if(type==="warning"){
        return (
            <motion.div 
            {...fadeInOut} 
            className='fixed z-50 top-32 right-12 px-4 py-2 rounded-md backdrop-blur-sm bg-orange-300 shadow-md flex items-center gap-4'
            >
                <BsExclamationTriangleFill className='texl-xl text-orange-700'/>
                <p className='text-xl text-orange-700 '>{message}</p>
            </motion.div>
        )
    }
    if(type==="danger"){
        return (
            <motion.div 
            {...fadeInOut} 
            className='fixed z-50 top-32 right-12 px-4 py-2 rounded-md backdrop-blur-sm bg-red-300 shadow-md flex items-center gap-4'
            >
                <BsExclamationTriangleFill className='texl-xl text-red-700'/>
                <p className='text-xl text-red-700 '>{message}</p>
            </motion.div>
        )
    }
    if(type==="info"){
        return (
            <motion.div 
            {...fadeInOut} 
            className='fixed z-50 top-32 right-12 px-4 py-2 rounded-md backdrop-blur-sm bg-blue-300 shadow-md flex items-center gap-4'
            >
                <BsExclamationTriangleFill className='texl-xl text-blue-700'/>
                <p className='text-xl text-blue-700 '>{message}</p>
            </motion.div>
        )
    }

}

export default Alert