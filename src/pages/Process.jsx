import { useState } from 'react';

const processSteps = [
  {
    id: 1,
    title: "裁断工程",
    subtitle: "CADを使って物・図面・イメージなどから形にします",
    description: "最新のCADシステムと裁断機を使用し、高精度な裁断を実現。素材のロスを最小限に抑えながら、品質の高い製品作りの第一歩を担っています。",
    images: [
      {
        url: "/assets/images/process/cutting1.jpg",
        alt: "CAD裁断機の様子",
        caption: "最新のCAD裁断システム",
        type: "image"
      },
      {
        url: "/assets/images/process/cutting2.jpg",
        alt: "裁断作業の様子",
        caption: "熟練の技術者による裁断作業",
        type: "image"
      },
      {
        url: "https://www.youtube.com/embed/VIDEO_ID_1",
        caption: "裁断工程の詳細映像",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/embed/VIDEO_ID_2",
        caption: "CADシステムの操作方法",
        type: "youtube"
      }
    ]
  },
  {
    id: 2,
    title: "縫製工程",
    subtitle: "高度な技術と最新設備で正確な縫製を実現",
    description: "熟練の技術者と最新の縫製設備により、高品質な縫製を実現。一つ一つの工程で厳密な品質管理を行いながら、製品の耐久性と美しさを追求しています。",
    images: [
      {
        url: "/assets/images/process/sewing1.jpg",
        alt: "縫製作業の様子1",
        caption: "精密な縫製作業",
        type: "image"
      },
      {
        url: "/assets/images/process/sewing2.jpg",
        alt: "縫製作業の様子2",
        caption: "品質チェックの様子",
        type: "image"
      },
      {
        url: "https://www.youtube.com/embed/VIDEO_ID_3",
        caption: "縫製工程の詳細映像",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/embed/VIDEO_ID_4",
        caption: "品質管理プロセス",
        type: "youtube"
      }
    ]
  },
  {
    id: 3,
    title: "張り込み工程",
    subtitle: "精密な技術で美しい仕上がりを実現",
    description: "熟練の技術者による丁寧な張り込み作業により、美しい仕上がりと高い耐久性を実現しています。",
    images: [
      {
        url: "/assets/images/process/assembly1.jpg",
        alt: "張り込み作業の様子1",
        caption: "張り込み作業",
        type: "image"
      },
      {
        url: "/assets/images/process/assembly2.jpg",
        alt: "張り込み作業の様子2",
        caption: "仕上げ確認",
        type: "image"
      },
      {
        url: "https://www.youtube.com/embed/VIDEO_ID_5",
        caption: "張り込み工程の全容",
        type: "youtube"
      }
    ]
  },
  {
    id: 4,
    title: "検査・出荷工程",
    subtitle: "厳密な品質管理で安全性と信頼性を確保",
    description: "製品の品質を保証するため、複数の検査工程を設けています。熟練の検査員による目視確認と最新の検査機器を組み合わせることで、高い品質基準を維持しています。",
    images: [
      {
        url: "/assets/images/process/inspection1.jpg",
        alt: "検査作業の様子1",
        caption: "詳細な品質検査",
        type: "image"
      },
      {
        url: "/assets/images/process/inspection2.jpg",
        alt: "出荷準備の様子",
        caption: "出荷前の最終確認",
        type: "image"
      }
    ]
  }
];

export default function Process() {
  const [selectedImage, setSelectedImage] = useState(null);

  const ProcessStep = ({ step }) => (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold">
          {step.id}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{step.title}</h2>
          <h3 className="text-xl text-primary font-medium mt-1">{step.subtitle}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-8">{step.description}</p>

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {step.images.map((media, mediaIndex) => (
          <div key={mediaIndex} className="relative">
            {media.type === 'youtube' ? (
              // YouTube Embed
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={media.url}
                  title={media.caption}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              // Image with Preview
              <div
                className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100 aspect-video"
                onClick={() => setSelectedImage(media)}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-500 text-sm">画像がここに表示されます</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-center px-2">
                    {media.caption}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary/10 via-white to-primary/5 py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="relative">
            <span className="block text-4xl md:text-5xl mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              工程紹介
            </span>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl">
              開発・設計から生産まで、自動車用内装部品などの受託生産を
              ワンストップで任せられる「技術力」があります。
            </p>
            <div className="absolute bottom-0 left-0 w-32 h-1 bg-primary mt-6"></div>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {/* STEP 1 - Blue Background Section */}
          <div className="bg-blue-50 rounded-2xl shadow-lg overflow-hidden">
            <ProcessStep step={processSteps[0]} />
          </div>

          {/* STEP 2 - White Background */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <ProcessStep step={processSteps[1]} />
          </div>

          {/* STEP 3 - Blue Background Section */}
          <div className="bg-blue-50 rounded-2xl shadow-lg overflow-hidden">
            <ProcessStep step={processSteps[2]} />
          </div>

          {/* STEP 4 - White Background */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <ProcessStep step={processSteps[3]} />
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">画像がここに表示されます</p>
              </div>
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <p className="text-lg font-medium text-gray-900">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}