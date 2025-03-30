import React from 'react';

const features = [
  {
    id: '01',
    title: '創業55年以上の実績と安定の仕事量',
    description: `当社は創業して55年以上、名古屋市をはじめ、東海地方のある
    ゆる場所へ輸送を担っております。
    永年にわたり蓄えた輸送のノウハウと技術力を生かし、安全で
    安定的な輸送を提供しています。
    自動車部品から食品まで、様々な輸送ニーズにお答えできるよ
    うに各種トラック輸送を配備しております。
    長年培ってきた実績により、仕事量も豊富で長期的に安定して
    は働ける環境をご用意しております。`,
    image: '/assets/images/careers/feature1.jpg',
    imagePosition: 'right'
  },
  {
    id: '02',
    title: '未経験でも安心！\n資格の取得支援制度',
    description: `業務に関する資格の取得費用は全額サポートなど、支援を惜し
    みません。資格を取得するということはあなたの一生の財産に
    なり、仕事の幅も広がります。
    それが成果にも繋がりますので、積極的に資格を取得していき
    ましょう。`,
    image: '/assets/images/careers/feature2.jpg',
    imagePosition: 'left'
  },
  {
    id: '03',
    title: '仲が良くアットホームな職場環境',
    description: `幅広い年代の従業員が在籍しており、年齢に関係なく和気あい
    あいと働いています。毎年恒例の社員行事としてボーリング大
    会などのレクリエーションを実施するなど、従業員同士の仲が
    良いアットホームな職場となっております。
    また、安全運転にはドライバーの健康管理や疲労回復は家庭で
    の適切な協力が必要不可欠です。日頃の感謝の気持ちを込めて
    誕生日にお花を贈らせていただいております。`,
    image: '/assets/images/careers/feature3.jpg',
    imagePosition: 'right'
  }
];

export default function CompanyFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature) => (
          <div 
            key={feature.id}
            className={`flex flex-col ${feature.imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center mb-24 last:mb-0`}
          >
            <div className="lg:w-1/2 lg:pr-12">
              <div className="flex items-start mb-6">
                <span className="text-8xl font-light text-gray-300 leading-none mr-8">
                  {feature.id}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 whitespace-pre-line">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {feature.description}
              </p>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3]">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-500">画像がここに表示されます</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}