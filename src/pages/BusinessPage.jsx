import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ToyonakaKogyoLogo from '../components/ToyonakaKogyoLogo'
import Footer from '../components/Footer'

const BusinessPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="relative min-h-screen bg-white text-black flex flex-col">
      {/* Header Navigation */}
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
            <NavLink to="/about">私たちについて</NavLink>
            <NavLink to="/business" active>ビジネス</NavLink>
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
              <NavLink to="/about">私たちについて</NavLink>
              <NavLink to="/business" active>ビジネス</NavLink>
              <NavLink to="/product">プロダクト</NavLink>
              <NavLink to="/recruitment">採用</NavLink>
            </div>
          </motion.div>
        )}
      </header>
      
      {/* Hero Section */}
      <div className="relative h-[400px] bg-[#4481ac] overflow-hidden mt-20">
        <div className="absolute bg-white/50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-6xl text-white font-bold mb-4">事業内容</h1>
          </motion.div>
        </div>
      </div>

      <main className="flex-grow">
        <div className="container mx-auto px-4">
          {/* Our Value Section */}
          <section className="py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-16">
                <h4 className="text-[#3374A4] font-bold">01 - Our Value</h4>
                <h2 className="text-4xl font-bold mt-8 mb-12">
                  付加価値の創造により、<br />
                  社会に貢献する。
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      キーエンスは、ファクトリー・オートメーション（FA）の総合メーカーです。
                    </p>
                    <p className="text-gray-700">
                      1974年の会社設立以来、付加価値の創造こそが企業の存在意義であり、付加価値の創造によって社会に貢献するという考えのもと、今まで世の中になかった商品の提供を通じて、お客様の課題を解決すること、新しい価値を生み出し続けることにこだわり続けてきました。
                    </p>
                    <p className="text-gray-700">
                      現在ではFA用センサをはじめとする付加価値の高い商品が、自動車・半導体・電子・電気機器・通信・機械・化学・薬品・食品など幅広い業界で採用され、世界46ヵ国250拠点から535万社ものづくりに貢献しています。
                    </p>
                  </div>
                  
                  <div className="relative h-[400px]">
                    <img
                      src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                      alt="Industrial automation equipment"
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Our Products Section */}
          <section className="py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-16">
                <h4 className="text-[#3374A4] font-bold">02 - Our Strength</h4>
                <h2 className="text-4xl font-bold mt-8 mb-12">
                  世界中のものづくりを支える<br />
                  「世界初」「業界初」の商品。
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      新たに生み出す商品の約7割が「世界初」「業界初」。これは私たちが変化する潜在的ニーズを捉え、革新的な商品を生み出している結果です。
                    </p>
                    <p className="text-gray-700">
                      ものづくりの現場では技術革新によりさまざまなイノベーションが起こっています。自動車産業における電動化をはじめ、スマートファンの高機能化、デジタル技術を駆使した生産現場のデジタルトランスフォーメーション（DX）など、ものづくりは常に進化しています。
                    </p>
                    <p className="text-gray-700">
                      ものづくりの変化を支え、進化を加速させる商品を私たちは生み出していきます。
                    </p>
                  </div>
                  
                  <div className="relative h-[400px]">
                    <img
                      src="https://images.pexels.com/photos/1553961/pexels-photo-1553961.jpeg"
                      alt="Modern city with illuminated skyscrapers"
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* Our Products Section - Modernized */}
                <div className="mt-32">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <div className="absolute -top-16 left-0 w-32 h-32 bg-[#3374A4]/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#3374A4]/5 rounded-full blur-3xl"></div>
                    
                    <div className="relative">
                      <h4 className="text-[#3374A4] font-bold">03 - Our Products</h4>
                      <h2 className="text-4xl font-bold mt-8 mb-12">
                        革新的な製品で、<br />
                        未来のものづくりをリードする。
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProductCard
                          title="インパネ周辺"
                          description="description"
                          image="https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg"
                        />
                        <ProductCard
                          title="センターコンソール周り"
                          description="description"
                          image="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
                        />
                        <ProductCard
                          title="ドア周り"
                          description="description"
                          image="https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg"
                        />
                      </div>

                      <div className="mt-16 text-center">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <a 
                            href="#product"
                            className="inline-flex items-center px-8 py-4 bg-[#3374A4] text-white font-medium rounded-full hover:bg-[#2b6288] transition-all duration-300 shadow-lg hover:shadow-xl space-x-2"
                            onClick={(e) => {
                              e.preventDefault();
                              window.location.hash = 'product';
                            }}
                          >
                            <span>製品を見る</span>
                            <span className="text-xl">→</span>
                          </a>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
      <Footer />
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

const ProductCard = ({ title, description, image }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
)

export default BusinessPage