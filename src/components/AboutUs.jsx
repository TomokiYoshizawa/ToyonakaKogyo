import { motion } from 'framer-motion'

const AboutUs = () => {
  return (
    <div id="about-us" className="bg-white text-black py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <div className="h-1 w-12 bg-[#3374A4] mb-8"></div>
        <h2 className="text-5xl font-bold mb-12">About Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">
              付加価値の創造により、<br />
              社会に貢献する。
            </h3>
            <p className="text-gray-600 mb-8">
              今まで世の中になかった、新しい価値を創造することに挑み、商品を通じてお客様の課題を解決する。
            </p>
            
            <div className="space-y-4">
              <LinkButton text="メッセージ" />
              <LinkButton text="会社概要" />
              <LinkButton text="沿革" />
            </div>
          </div>
          
          <div className="relative h-[400px] order-1 md:order-2">
            <img
              src="https://images.pexels.com/photos/1756665/pexels-photo-1756665.jpeg"
              alt="Modern office building"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const LinkButton = ({ text }) => (
  <div className="group flex items-center justify-between border-b border-gray-300 py-4 cursor-pointer">
    <span className="text-lg">{text}</span>
    <motion.span
      className="text-[#3374A4]"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      →
    </motion.span>
  </div>
)

export default AboutUs