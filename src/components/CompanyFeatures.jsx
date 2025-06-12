import React from "react";

const features = [
  {
    id: "01",
    title: "創業70年以上の実績と安定の仕事量",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus reprehenderit aliquam incidunt dolores, blanditiis debitis provident. A voluptas repellendus iusto autem vel nam asperiores corporis deserunt ex, consequatur quasi alias.",
    image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg",
    imagePosition: "right",
  },
  {
    id: "02",
    title: "未経験でも安心！\n資格の取得支援制度",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus reprehenderit aliquam incidunt dolores, blanditiis debitis provident. A voluptas repellendus iusto autem vel nam asperiores corporis deserunt ex, consequatur quasi alias.",
    image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg",
    imagePosition: "left",
    extraMargin: true,
    extraSpacing: true,
  },
  {
    id: "03",
    title: "仲が良くアットホームな職場環境",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus reprehenderit aliquam incidunt dolores, blanditiis debitis provident. A voluptas repellendus iusto autem vel nam asperiores corporis deserunt ex, consequatur quasi alias.",
    image: "https://images.pexels.com/photos/3862134/pexels-photo-3862134.jpeg",
    imagePosition: "right",
  },
];

export default function CompanyFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`flex flex-col ${
              feature.imagePosition === "right"
                ? "lg:flex-row"
                : "lg:flex-row-reverse"
            } items-center ${feature.extraMargin ? 'my-32' : 'mb-24'} last:mb-0`}
          >
            <div className={`lg:w-1/2 ${feature.extraSpacing ? 'lg:px-12' : 'lg:pr-12'}`}>
              <div className="flex items-center mb-6">
                <span className="text-8xl font-light text-gray-300 leading-none mr-8 text-[#3374A4]">
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
            <div className={`lg:w-1/2 mt-8 lg:mt-0 ${feature.extraMargin ? 'my-8' : ''} ${feature.extraSpacing ? 'lg:px-12' : ''}`}>
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3]">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}