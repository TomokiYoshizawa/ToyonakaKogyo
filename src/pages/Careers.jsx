import { useState } from 'react';
import Careers from '../components/careers/Careers';
import ImageGallery from '../components/careers/ImageGallery';
import CompanyStats from '../components/careers/CompanyStats';
import CompanyFeatures from '../components/careers/CompanyFeatures';

export default function CareersPage() {
  const [showJobListings, setShowJobListings] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary/10 via-white to-primary/5 py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="relative">
            <span className="block text-4xl md:text-5xl mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              採用情報
            </span>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl">
              伝統と革新が織りなす、繊維の未来へ
            </p>
            <div className="absolute bottom-0 left-0 w-32 h-1 bg-primary mt-6"></div>
          </div>
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
            <div className="bg-gradient-to-br from-primary/5 to-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">確かな技術と伝統で紡ぐ70年の実績</h3>
              <p className="text-gray-600">1950年の創業以来、日本の繊維産業と共に歩んできた豊中工業。長年培った紡織技術と品質管理のノウハウは、国内外の多くのアパレルメーカーや産業資材メーカーから高い評価をいただいております。伝統を大切にしながらも、常に新しい技術への挑戦を続けています。</p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">環境と人にやさしいものづくりへのこだわり</h3>
              <p className="text-gray-600">サステナブルな繊維製品への世界的な需要の高まりに応え、環境負荷の少ない製造プロセスと素材開発に積極的に取り組んでいます。人と地球に優しい製品を生み出す私たちの姿勢は、多くのお客様から共感と信頼をいただいております。</p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">グローバルとローカルを繋ぐ架け橋として</h3>
              <p className="text-gray-600">国内生産の確かな品質を大切にしながら、アジアを中心とした海外パートナーとの連携も強化。グローバルな視点と地域に根差したものづくりの両立で、変化する市場ニーズに柔軟に対応しています。</p>
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
              <div key={index} className="bg-gradient-to-br from-secondary/5 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
              <p className="text-gray-600 mb-4">「入社当初は繊維の知識がほとんどありませんでしたが、先輩方の丁寧な指導のおかげで、今では製品開発チームの中核として働いています。伝統的な技術を学びながら、新しい繊維素材の開発にも携われることにやりがいを感じています。」</p>
              <p className="text-gray-900 font-medium">製品開発部 Y.T.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-600 mb-4">「海外取引先とのやり取りも多く、グローバルな視点で繊維ビジネスを学べる環境です。年齢や経験に関わらず、アイデアを尊重してもらえる風土があり、若手でも積極的に意見を出せます。」</p>
              <p className="text-gray-900 font-medium">営業部 S.K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Path Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">キャリアパスと成長機会</h2>
          <div className="bg-gradient-to-br from-primary/5 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-700 mb-6">豊中工業では、製造現場での技術習得からスタートし、品質管理、製品開発、営業など、様々な部門でのキャリア形成が可能です。一人ひとりの適性と希望を尊重しながら、長期的な成長をサポートします。また、海外研修や展示会参加など、業界の最新動向に触れる機会も豊富にご用意しています。</p>
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

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">繊維の可能性を共に広げていきましょう</h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">繊維は、人々の暮らしに欠かせない存在でありながら、未来の技術革新の最前線でもあります。私たちと一緒に、伝統ある繊維産業に新しい風を吹き込み、持続可能な未来を紡いでいきませんか？</p>
          <p className="text-xl text-gray-900 font-medium">あなたの情熱と創造力で、次世代の繊維産業を共に創造しましょう。</p>
        </div>
      </section>

      {/* Job Listings Button */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={() => setShowJobListings(!showJobListings)}
            className="bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto"
          >
            <span className="mr-2">現在の募集職種を見る</span>
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${showJobListings ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Current Job Openings */}
      <div className={`transition-all duration-500 ease-in-out ${showJobListings ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        <Careers />
      </div>
    </div>
  );
}