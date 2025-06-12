import { useEffect, useState } from 'react';

const stats = [
  {
    id: 1,
    title: '創業年数',
    value: '55',
    unit: '年以上',
    subtitle: '昭和43年\n(1968年)',
  },
  {
    id: 2,
    title: '拠点数',
    value: '3',
    unit: '',
    subtitle: '本社営業所\n豊明営業所\n名北営業所',
  },
  {
    id: 4,
    title: '売上高',
    value: '5',
    unit: '億',
    subtitle: '5000万円（2024年7月期）',
  },
  {
    id: 6,
    title: '平均年齢',
    value: '49',
    unit: '歳',
    subtitle: '',
    centered: true,
  },
  {
    id: 7,
    title: '年間休日',
    value: '119',
    unit: '日',
    subtitle: '',
    centered: true,
  },
];

export default function CompanyStats() {
  const [animatedStats, setAnimatedStats] = useState(stats.map(stat => ({ ...stat, currentValue: 0 })));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumbers();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(document.querySelector('.stats-container'));

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    stats.forEach((stat, index) => {
      const targetValue = parseInt(stat.value);
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = targetValue / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        if (currentStep < steps) {
          setAnimatedStats(prev => 
            prev.map((s, i) => 
              i === index 
                ? { ...s, currentValue: Math.min(Math.round(increment * currentStep), targetValue) }
                : s
            )
          );
          currentStep++;
        } else {
          clearInterval(interval);
        }
      }, duration / steps);
    });
  };

  return (
    <section className="bg-[#3374A4] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-4">INFOGRAPHICS</h2>
        <p className="text-xl text-white text-center mb-12">数字で見る豊中工業</p>
        
        <div className="stats-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animatedStats.map((stat) => (
            <div
              key={stat.id}
              className={`bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300 ${
                stat.centered ? 'flex flex-col items-center' : ''
              }`}
            >
              <h3 className={`text-[#3374A4] font-bold text-lg mb-4 ${
                stat.centered ? 'text-center' : ''
              }`}>
                {stat.title}
              </h3>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold text-gray-900">
                  {stat.currentValue}
                </span>
                <span className="text-2xl font-medium text-gray-600 ml-1">
                  {stat.unit}
                </span>
              </div>
              {stat.subtitle && (
                <p className="text-center text-gray-600 mt-2 whitespace-pre-line">
                  {stat.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}