import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ToyonakaKogyoLogo from '../components/ToyonakaKogyoLogo'
import Footer from '../components/Footer'

// Product categories
const categories = [
  { id: "interior", name: "インパネ周辺" },
  { id: "seats", name: "シート、その他" },
  { id: "console", name: "センターコンソール周り" },
  { id: "door", name: "ドア周り" },
  { id: "pillar", name: "ピラー" },
];

// Products data
const productsByCategory = {
  interior: [
    {
      id: 1,
      name: "メータークラスター",
      description: "高品質な素材を使用した耐久性のあるメータークラスター",
      imageUrl: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
    },
    {
      id: 2,
      name: "メータークラスター",
      description: "様々な車種に対応する汎用性の高いデザイン",
      imageUrl: "https://images.pexels.com/photos/3802512/pexels-photo-3802512.jpeg",
    },
    {
      id: 3,
      name: "グローブBOXガーニッシュ",
      description: "美しい仕上がりと機能性を兼ね備えたガーニッシュ",
      imageUrl: "https://images.pexels.com/photos/3802514/pexels-photo-3802514.jpeg",
    },
  ],
  seats: [
    {
      id: 4,
      name: "シートバック",
      description: "快適性と耐久性を両立した高品質シートバック",
      imageUrl: "https://images.pexels.com/photos/2536579/pexels-photo-2536579.jpeg",
    },
    {
      id: 5,
      name: "シートヒンジカバー",
      description: "精密な設計による完璧なフィット感を実現",
      imageUrl: "https://images.pexels.com/photos/2536581/pexels-photo-2536581.jpeg",
    },
    {
      id: 6,
      name: "リヤシートリバーシブルマット",
      description: "両面使用可能な実用的なデザイン",
      imageUrl: "https://images.pexels.com/photos/2536583/pexels-photo-2536583.jpeg",
    },
    {
      id: 7,
      name: "ポップアップトノカバー",
      description: "使いやすさを追求した革新的な機構設計",
      imageUrl: "https://images.pexels.com/photos/2536585/pexels-photo-2536585.jpeg",
    },
    {
      id: 8,
      name: "上級シートキルティング",
      description: "高級感あふれる美しいキルティング加工",
      imageUrl: "https://images.pexels.com/photos/2536587/pexels-photo-2536587.jpeg",
    },
    {
      id: 9,
      name: "リアシートサイド",
      description: "安全性と快適性を考慮した人間工学に基づく設計",
      imageUrl: "https://images.pexels.com/photos/2536589/pexels-photo-2536589.jpeg",
    },
    {
      id: 10,
      name: "パーテーション カバー",
      description: "車内空間を効率的に区切るための高機能パーテーション",
      imageUrl: "https://images.pexels.com/photos/2536591/pexels-photo-2536591.jpeg",
    },
    {
      id: 11,
      name: "パーテーション センター",
      description: "高い耐久性と美しい外観を兼ね備えたセンターパーテーション",
      imageUrl: "https://images.pexels.com/photos/2536593/pexels-photo-2536593.jpeg",
    },
    {
      id: 12,
      name: "パーテーション メイン",
      description: "車内の快適性を高める高品質パーテーション",
      imageUrl: "https://images.pexels.com/photos/2536595/pexels-photo-2536595.jpeg",
    },
    {
      id: 13,
      name: "パーテーションASSY",
      description: "複数のパーツを組み合わせた統合型パーテーション",
      imageUrl: "https://images.pexels.com/photos/2536597/pexels-photo-2536597.jpeg",
    },
  ],
  console: [
    {
      id: 14,
      name: "センターコンソールASSY",
      description: "機能性と美観を両立した高品質センターコンソール",
      imageUrl: "https://images.pexels.com/photos/3802516/pexels-photo-3802516.jpeg",
    },
    {
      id: 15,
      name: "コンソールサイドパット",
      description: "快適な乗車感を実現するサイドパッド",
      imageUrl: "https://images.pexels.com/photos/3802518/pexels-photo-3802518.jpeg",
    },
    {
      id: 16,
      name: "ニーパット",
      description: "長時間のドライブでも快適な姿勢をサポート",
      imageUrl: "https://images.pexels.com/photos/3802520/pexels-photo-3802520.jpeg",
    },
  ],
  door: [
    {
      id: 17,
      name: "アームレスト",
      description: "人間工学に基づいた設計で長時間の運転でも快適",
      imageUrl: "https://images.pexels.com/photos/3802522/pexels-photo-3802522.jpeg",
    },
    {
      id: 18,
      name: "アームレスト",
      description: "高級感のある素材と仕上げによる上質な質感",
      imageUrl: "https://images.pexels.com/photos/3802524/pexels-photo-3802524.jpeg",
    },
    {
      id: 19,
      name: "ドアオーナメント",
      description: "車内の雰囲気を高める洗練されたデザイン",
      imageUrl: "https://images.pexels.com/photos/3802526/pexels-photo-3802526.jpeg",
    },
    {
      id: 20,
      name: "ドアオーナメント",
      description: "高品質な素材を使用した耐久性のあるオーナメント",
      imageUrl: "https://images.pexels.com/photos/3802528/pexels-photo-3802528.jpeg",
    },
  ],
  pillar: [
    {
      id: 21,
      name: "フロントピラー",
      description: "視界を確保しながら車内の静粛性を高める設計",
      imageUrl: "https://images.pexels.com/photos/3802530/pexels-photo-3802530.jpeg",
    },
    {
      id: 22,
      name: "センターピラー",
      description: "車体強度を保ちながら美しい内装を実現",
      imageUrl: "https://images.pexels.com/photos/3802532/pexels-photo-3802532.jpeg",
    },
    {
      id: 23,
      name: "ルーフサイドピラー",
      description: "空力性能と美観を両立した革新的なデザイン",
      imageUrl: "https://images.pexels.com/photos/3802534/pexels-photo-3802534.jpeg",
    },
  ],
};

const ProductPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("interior")

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
            <NavLink to="/business">ビジネス</NavLink>
            <NavLink to="/product" active>プロダクト</NavLink>
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
              <NavLink to="/business">ビジネス</NavLink>
              <NavLink to="/product" active>プロダクト</NavLink>
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
            <h1 className="text-6xl text-black font-bold mb-4">製品情報</h1>
            
          </motion.div>
        </div>
      </div>

      <main className="flex-grow">
        {/* Category Tabs */}
        <div className="w-full mb-10 bg-gray-50 sticky top-[92px] z-40">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap border-b border-gray-200">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`py-3 px-6 font-medium text-lg transition-colors duration-200 relative
                    ${
                      activeCategory === category.id
                        ? "text-[#3374A4]"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                  {category.name}
                  {activeCategory === category.id && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#3374A4]"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Category Header */}
          <div className="max-w-7xl mx-auto mb-8">
            <div className="flex items-center">
              <div className="w-1 h-8 bg-[#3374A4] mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-900">
                {categories.find((c) => c.id === activeCategory)?.name}
              </h2>
            </div>
          </div>

          {/* Products Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {productsByCategory[activeCategory].map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 bg-gray-100">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Product Inquiry Section */}
          <div className="w-full py-16 bg-gray-50 -mx-4">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  製品に関するお問い合わせ
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  製品の詳細情報や仕様についてのお問い合わせは、下記のボタンからお問い合わせフォームへお進みください。
                </p>
              </div>
              <div className="flex justify-center">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#3374A4] hover:bg-[#2b6288] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
                >
                  お問い合わせはこちら
                </motion.a>
              </div>
            </div>
          </div>
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

export default ProductPage