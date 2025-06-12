import { motion } from 'framer-motion'

const Business = () => {
  return (
    <div id="business" className="bg-white text-black py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <div className="h-1 w-12 bg-[#3374A4] mb-8"></div>
        <h2 className="text-5xl font-bold mb-12">Business</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              世界のものづくりを、<br />
              進化させていく。
            </h3>
            <p className="text-gray-600 mb-8">
              新たに生み出す商品の約7割が「世界初」「業界初」。<br />
              重要なのは単なる化したニーズではなく、お客様の潜在的なニーズや本当に解決したい課題を把握すること。
            </p>
            <div className="relative h-[400px] gap-4">
              <img
                src="https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg"
                alt="Industrial machinery"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <LinkButton text="事業内容" />
              <LinkButton text="国内拠点" />
            </div>
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

export default Business