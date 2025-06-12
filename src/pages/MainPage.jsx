import { useState } from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Business from '../components/Business'
import Products from '../components/Products'
import Recruitment from '../components/Recruitment'
import Footer from '../components/Footer'

const MainPage = () => {
  return (
    <div className="relative min-h-screen bg-white text-black flex flex-col">
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto">
          <AboutUs />
          <Business />
          <div className="flex flex-col md:flex-row md:mx-[-2rem]">
            <div className="w-full md:w-1/2 md:px-8">
              <Products />
            </div>
            <div className="w-full md:w-1/2 md:px-8">
              <Recruitment />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MainPage