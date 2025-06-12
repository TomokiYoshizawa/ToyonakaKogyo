import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import ToyonakaKogyoLogo from '../components/ToyonakaKogyoLogo'
import Footer from '../components/Footer';
import Careers from '../components/Careers';
import ImageGallery from '../components/ImageGallery';
import CompanyStats from '../components/CompanyStats';
import CompanyFeatures from '../components/CompanyFeatures';

export default function RecruitmentPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showJobListings, setShowJobListings] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
            <NavLink to="/business">ビジネス</NavLink>
            <NavLink to="/product">プロダクト</NavLink>
            <NavLink to="/recruitment" active>採用</NavLink>
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
              <NavLink to="/business">ビジネス</NavLink>
              <NavLink to="/product">プロダクト</NavLink>
              <NavLink to="/recruitment" active>採用</NavLink>
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
            <h1 className="text-6xl text-black font-bold mb-4">採用情報</h1>
            
          </motion.div>
        </div>
      </div>

      {/* Company Features Section */}
      <CompanyFeatures />

      {/* Company Stats Section */}
      <CompanyStats />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">豊中工業が選ばれる理由</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#3374A4]/5 to-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">確かな技術と伝統で紡ぐ70年の実績</h3>
              <p className="text-gray-600">1950年の創業以来、日本の自動車産業と共に歩んできた豊中工業。長年培った技術と品質管理のノウハウは、国内外の多くの自動車メーカーから高い評価をいただいております。</p>
            </div>
            <div className="bg-gradient-to-br from-[#3374A4]/5 to-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">環境と人にやさしいものづくりへのこだわり</h3>
              <p className="text-gray-600">サステナブルな製品開発への世界的な需要の高まりに応え、環境負荷の少ない製造プロセスと素材開発に積極的に取り組んでいます。</p>
            </div>
            <div className="bg-gradient-to-br from-[#3374A4]/5 to-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">グローバルとローカルを繋ぐ架け橋として</h3>
              <p className="text-gray-600">国内生産の確かな品質を大切にしながら、アジアを中心とした海外パートナーとの連携も強化。グローバルな視点と地域に根差したものづくりの両立を実現しています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">働く環境と福利厚生</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "一人ひとりの技術習得をサポートする教育研修制度",
              "資格取得支援と技能検定取得奨励金制度",
              "安定した雇用と充実した福利厚生（社会保険完備、退職金制度など）",
              "定期的な社内イベントでチームの結束力を強化",
              "長期勤続者表彰制度と功労賞制度"
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-[#3374A4]/5 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">先輩社員の声</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-600 mb-4">「入社当初は自動車部品の知識がほとんどありませんでしたが、先輩方の丁寧な指導のおかげで、今では製品開発チームの中核として働いています。伝統的な技術を学びながら、新しい製品開発にも携われることにやりがいを感じています。」</p>
              <p className="text-gray-900 font-medium">製品開発部 Y.T.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-600 mb-4">「海外取引先とのやり取りも多く、グローバルな視点で自動車産業を学べる環境です。年齢や経験に関わらず、アイデアを尊重してもらえる風土があり、若手でも積極的に意見を出せます。」</p>
              <p className="text-gray-900 font-medium">営業部 S.K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">社内の雰囲気</h2>
          <ImageGallery />
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showJobListings ? (
            <Careers />
          ) : (
            <div className="text-center">
              <button
                onClick={() => setShowJobListings(true)}
                className="bg-[#3374A4] text-white px-8 py-4 rounded-full hover:bg-[#2b6288] transition-colors duration-300 text-lg font-medium"
              >
                募集職種を見る
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
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