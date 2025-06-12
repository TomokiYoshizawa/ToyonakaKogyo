import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ToyonakaKogyoLogo from '../components/ToyonakaKogyoLogo'
import Footer from '../components/Footer'
import { history } from '../data/historyData'

const AboutPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('message')
  const overviewRef = useRef(null)
  const historyRef = useRef(null)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const scrollToSection = (section) => {
    setActiveTab(section)
    if (section === 'company' && overviewRef.current) {
      overviewRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (section === 'history' && historyRef.current) {
      historyRef.current.scrollIntoView({ behavior: 'smooth' })
    }
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
      
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r overflow-hidden mt-20">
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-6xl text-black font-bold mb-4">私たちについて</h1>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b sticky top-20 z-40 overflow-x-auto">
        <div className="container mx-auto px-4">
          <div className="flex whitespace-nowrap min-w-full">
            <TabButton 
              active={activeTab === 'message'} 
              onClick={() => scrollToSection('message')}
            >
              メッセージ
            </TabButton>
            <TabButton 
              active={activeTab === 'company'} 
              onClick={() => scrollToSection('company')}
            >
              会社概要
            </TabButton>
            <TabButton 
              active={activeTab === 'history'} 
              onClick={() => scrollToSection('history')}
            >
              沿革
            </TabButton>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        <div className="container mx-auto px-4">
          {/* Message Section */}
          <section className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="h-1 w-12 bg-[#3374A4] mb-8"></div>
            
              <h3 className="text-4xl font-bold mb-2">メッセージ</h3>
              <h2 className="text-2xl font-bold mb-12 text-[#3374A4]">Message</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h4 className="text-3xl font-bold mb-8">
                    全ては付加価値の<br />
                    創造のために
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    1974年の会社設立以来、付加価値の創造こそが企業の存在意義であり、また、そのことによって社会へ貢献するという考えのもと、会社一丸となって事業活動に取り組んでまいりました。
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    世の中にない価値を生み出すことに取り組み続け、新商品の約70%が世界初、業界初の商品となっており、世界のさまざまな業界のお客様に当社商品をご採用いただいております。おかげさまで世界のグローバル企業の中でも有数の優良企業として高くご評価いただけるようになりました。
                  </p>
                </div>
                
                <div className="relative h-[600px]">
                  <img
                    src="https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg"
                    alt="Company CEO"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </section>

          {/* Purpose Section */}
          <section className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="h-1 w-12 bg-[#3374A4] mb-8"></div>
              <h2 className="text-5xl font-bold mb-12">本来の目的を見失うことなく行動し続ける</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    当社の経営において大切にしていることは、「経営にとって当たり前のことを当たり前に実践する」ということです。これを実践するうえで「目的意識」を持つことを常に意識しています。
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    たくさんの人数で仕事を進めると、その手段が目的となり、結果として当たり前のことが徹底できなくなってしまいます。
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    「何のためにその仕事を行っているのか、何に役立つのか」を考え、本来の目的を見失わないように心掛けることで、当たり前のことを当たり前に実践することが可能となります。
                  </p>
                </div>
                
                <div className="relative h-[400px]">
                  <img
                    src="https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg"
                    alt="Modern office hallway"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </section>

          {/* Company Overview Section */}
          <section ref={overviewRef} className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="h-1 w-12 bg-[#3374A4] mb-8"></div>
              <h3 className="text-4xl font-bold mb-2">会社概要</h3>
              <h5 className="text-2xl font-bold mb-12 text-[#3374A4]">Overview</h5>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                <div className="flex flex-col border-b border-gray-200 py-4">
                  <span className="text-gray-700 font-medium mb-2">会社名</span>
                  <div>
                    <div className="text-gray-900">豊中工業株式会社</div>
                    <div className="text-gray-600 text-sm">TOYONAKA INDUSTRY Co.,Ltd.</div>
                  </div>
                </div>
                <div className="flex flex-col border-b border-gray-200 py-4">
                  <span className="text-gray-700 font-medium mb-2">代表者</span>
                  <span className="text-gray-900">代表取締役　前川　功冶</span>
                </div>
                <div className="flex flex-col border-b border-gray-200 py-4">
                  <span className="text-gray-700 font-medium mb-2">創業</span>
                  <span className="text-gray-900">1942年1月(昭和17年)</span>
                </div>
                <div className="flex flex-col border-b border-gray-200 py-4">
                  <span className="text-gray-700 font-medium mb-2">設立</span>
                  <span className="text-gray-900">1965年6月(昭和40年)</span>
                </div>
                <div className="flex flex-col border-b border-gray-200 py-4">
                  <span className="text-gray-700 font-medium mb-2">資本金</span>
                  <span className="text-gray-900">3,000万円</span>
                </div>
                <div className="flex flex-col border-b border-gray-200 py-4">
                  <span className="text-gray-700 font-medium mb-2">従業員数</span>
                  <span className="text-gray-900">209名(令和7年3月末)</span>
                </div>
                <div className="flex flex-col border-b border-gray-200 py-4 md:col-span-2">
                  <span className="text-gray-700 font-medium mb-2">主要製品</span>
                  <div className="text-gray-900">
                    <ul className="list-none space-y-1">
                      <li>自動車内装部品</li>
                      <li>バス内装部品</li>
                      <li>鉄道車両用シート</li>
                      <li>インテリア椅子</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col border-b border-gray-200 py-4 md:col-span-2">
                  <span className="text-gray-700 font-medium mb-2">主要取引先</span>
                  <div className="text-gray-900">
                    <ul className="list-none space-y-1">
                      <li>林テレンプ株式会社</li>
                      <li>株式会社イノアックコーポレーション</li>
                      <li>天龍工業株式会社</li>
                      <li>三菱ふそうトラック・バス株式会社</li>
                      <li>アウンデ紡織株式会社</li>
                      <li>他多数</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Office Locations Section */}
          <section className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="h-1 w-12 bg-[#3374A4] mb-8"></div>

              <h3 className="text-4xl font-bold mb-2">拠点一覧</h3>
              <h5 className="text-2xl font-bold mb-12 text-[#3374A4]">Locations</h5>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <LocationCard
                  title="本社工場"
                  image="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                  postalCode="〒457-0862"
                  address="愛知県名古屋市南区内田橋二丁目18番11号"
                  tel="TEL: 052-692-1511"
                  fax="FAX: 052-692-5052"
                />
                <LocationCard
                  title="豊田工場"
                  image="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg"
                  postalCode="〒470-0364"
                  address="愛知県豊田市加納町向井山1-1"
                  tel="TEL: 0565-45-0848"
                  fax="FAX: 0565-45-0859"
                />
                <LocationCard
                  title="富山工場"
                  image="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg"
                  postalCode="〒939-2741"
                  address="富山県富山市婦中町中名977-2"
                  tel="TEL: 076-465-1543"
                  fax="FAX: 076-465-1579"
                />
              </div>

              <div ref={historyRef} className="mb-16 mt-16">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">沿革</h2>
                  <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#3374A4]/20"></div>
                    <div className="h-[600px] overflow-y-auto pr-4 space-y-8 scrollbar-thin scrollbar-thumb-[#3374A4]/20 scrollbar-track-gray-100">
                      {history.map((item, index) => (
                        <div key={index} className="relative pl-16">
                          <div className="absolute left-7 top-5 w-3 h-3 bg-[#3374A4] rounded-full transform -translate-x-1/2"></div>
                          <div className="bg-gradient-to-br from-[#3374A4]/5 to-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-baseline mb-2">
                              <span className="text-xl font-bold text-[#3374A4] mr-3">{item.year}</span>
                              <span className="text-gray-600">{item.month}</span>
                            </div>
                            <p className="text-gray-800 text-sm">{item.event}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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

const TabButton = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors duration-200 flex-1 ${
      active 
        ? 'border-[#3374A4] text-[#3374A4]' 
        : 'border-transparent text-gray-500 hover:text-gray-700'
    }`}
  >
    {children}
  </button>
)

const LocationCard = ({ title, image, postalCode, address, tel, fax }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <div className="h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h4 className="text-xl font-bold mb-4">{title}</h4>
      <div className="space-y-2 text-sm text-gray-600">
        <p>{postalCode}</p>
        <p>{address}</p>
        <p>{tel}</p>
        <p>{fax}</p>
      </div>
    </div>
  </div>
)

export default AboutPage