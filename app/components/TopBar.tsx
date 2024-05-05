'use client'
import React from 'react'
import { motion, useScroll } from "framer-motion"

const TopBar = () => {
    const { scrollYProgress } = useScroll();
  
    return (
      <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />  
    )
}

export default TopBar