import { motion } from 'framer-motion'

const Recruitment = () => {
  return (
    <div id="recruitment" className="bg-white text-black py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <div className="h-1 w-12 bg-[#3374A4] mb-8"></div>
        <h2 className="text-5xl font-bold mb-12">Recruitment</h2>
        
        <div>
          <p className="text-gray-600 mb-12">私たちと一緒に、未来を創造しませんか？</p>
          
          <div className="space-y-4">
            <LinkButton text="採用ページへ" />
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

export default Recruitment