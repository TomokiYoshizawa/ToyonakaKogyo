import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ToyonakaKogyoLogo from './ToyonakaKogyoLogo'

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
 <header className="fixed top-0 left-0 right-0 z-50 bg-[#4480ac]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="cursor-pointer">
              <ToyonakaKogyoLogo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/">ホーム</NavLink>
            <NavLink to="/about" active>私たちについて</NavLink>
            <NavLink to="/business">ビジネス</NavLink>
            <NavLink to="/product">プロダクト</NavLink>
            <NavLink to="/recruitment">採用</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="space-y-2">
              <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div 
            className="md:hidden bg-[#4480ac]/90 backdrop-blur-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
              <NavLink to="/">ホーム</NavLink>
              <NavLink to="/about" active>私たちについて</NavLink>
              <NavLink to="/business">ビジネス</NavLink>
              <NavLink to="/product">プロダクト</NavLink>
              <NavLink to="/recruitment">採用</NavLink>
            </div>
          </motion.div>
        )}
      </header>

      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/449623669.sd.mp4?s=c891dfce29e8f6c2437b162172e82578c5b86b51&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-[#4480ac]">豊中</span>工業株式会社
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-lg md:text-xl lg:text-2xl mb-2">変化を支え、</p>
            <p className="text-lg md:text-xl lg:text-2xl">進化を加速させる</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Links */}
      <motion.div 
        className="absolute bottom-24 left-8 z-10 flex flex-col space-y-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <SectionNavLink onClick={() => scrollToSection('about-us')} className="w-40">私たちについて</SectionNavLink>
        <SectionNavLink onClick={() => scrollToSection('business')} className="w-40">ビジネス</SectionNavLink>
        <SectionNavLink onClick={() => scrollToSection('product')} className="w-40">製品</SectionNavLink>
        <SectionNavLink onClick={() => scrollToSection('recruitment')} className="w-40">採用</SectionNavLink>
      </motion.div>

      {/* Scrolling Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-white rounded-full"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut" 
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}

const NavLink = ({ to, children, active }) => (
  <Link 
    to={to} 
    className={`text-sm font-medium transition-colors duration-300 hover:text-keyenceRed ${
      active ? 'text-keyenceRed' : 'text-white'
    }`}
  >
    {children}
  </Link>
)

const SectionNavLink = ({ onClick, children, className }) => (
  <button 
    onClick={onClick}
    className={`text-white hover:text-[#4480ac] transition-colors duration-300 text-lg font-light cursor-pointer text-left ${className}`}
  >
    {children}
  </button>
)

export default Hero