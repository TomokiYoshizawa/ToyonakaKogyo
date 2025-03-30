import React from "react";

const features = [
  {
    id: "01",
    title: "創業70年以上の実績と安定の仕事量",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus reprehenderit aliquam incidunt dolores, blanditiis debitis provident. A voluptas repellendus iusto autem vel nam asperiores corporis deserunt ex, consequatur quasi alias.",
    image: "/assets/images/careers/feature1.jpg",
    imagePosition: "right",
  },
  {
    id: "02",
    title: "未経験でも安心！\n資格の取得支援制度",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus reprehenderit aliquam incidunt dolores, blanditiis debitis provident. A voluptas repellendus iusto autem vel nam asperiores corporis deserunt ex, consequatur quasi alias.",
    image: "/assets/images/careers/feature2.jpg",
    imagePosition: "left",
  },
  {
    id: "03",
    title: "仲が良くアットホームな職場環境",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus reprehenderit aliquam incidunt dolores, blanditiis debitis provident. A voluptas repellendus iusto autem vel nam asperiores corporis deserunt ex, consequatur quasi alias.",
    image: "/assets/images/careers/feature3.jpg",
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
            } items-center mb-24 last:mb-0`}
          >
            <div className="lg:w-1/2 lg:pr-12">
              <div className="flex items-center mb-6">
                <span className="text-8xl font-light text-gray-300 leading-none mr-8 text-primary">
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
