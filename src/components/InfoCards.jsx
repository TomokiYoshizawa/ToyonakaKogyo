import { motion } from 'framer-motion'

const InfoCards = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        <InfoCard 
          title="製品情報" 
          description="高性能センサ、画像処理システム、測定システム、レーザーマーカー、顕微鏡などの製品情報をご紹介します。" 
          delay={0}
        />
        <InfoCard 
          title="応用情報" 
          description="製造業の課題を解決するソリューションや、産業分野別の活用事例を紹介します。" 
          delay={0.2}
        />
      </div>
    </div>
  )
}

const InfoCard = ({ title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card-hover bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
        <motion.div 
          whileHover={{ x: 5 }}
          className="text-keyenceRed"
        >
          <ArrowIcon />
        </motion.div>
      </div>
      <p className="text-gray-300 text-sm md:text-base">{description}</p>
    </motion.div>
  )
}

const ArrowIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M14 5L21 12M21 12L14 19M21 12H3" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
)

export default InfoCards