import { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Business from './Business'
import Products from './Products'
import Recruitment from './Recruitment'
import Footer from './Footer'

const MainPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="relative min-h-screen bg-white text-black flex flex-col">
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
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