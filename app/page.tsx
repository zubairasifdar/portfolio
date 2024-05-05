import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import TopBar from './components/TopBar'

const page = () => {
  return (
    <>
      <TopBar />
      <Hero />
      <About />
      <Contact />
    </>
  )
}

export default page