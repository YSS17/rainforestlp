import React, { useState } from 'react'
import HeroSection from '../components/heroSection';
import InfoSection from '../components/infoSection';
import { HomeObjOne } from '../components/infoSection/data';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }



  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar  toggle={toggle}/>
      <HeroSection />
      <InfoSection {...HomeObjOne}/>
    </>
  )
}

export default Home;