import { useState } from "react";

// Product categories
const categories = [
  { id: "interior", name: "インパネ周辺" },
  { id: "seats", name: "シート、その他" },
  { id: "console", name: "センターコンソール周り" },
  { id: "door", name: "ドア周り" },
  { id: "pillar", name: "ピラー" },
];

// Products data
const productsByCategory = {
  interior: [
    {
      id: 1,
      name: "メータークラスター",
      description: "高品質な素材を使用した耐久性のあるメータークラスター",
      imageUrl: "assets/images/productImages/insidePanel/insidePanel1.jpg",
    },
    {
      id: 2,
      name: "メータークラスター",
      description: "様々な車種に対応する汎用性の高いデザイン",
      imageUrl: "assets/images/productImages/insidePanel/insidePanel2.jpg",
    },
    {
      id: 3,
      name: "グローブBOXガーニッシュ",
      description: "美しい仕上がりと機能性を兼ね備えたガーニッシュ",
      imageUrl: "assets/images/productImages/insidePanel/insidePanel3.jpg",
    },
  ],
  seats: [
    {
      id: 4,
      name: "シートバック",
      description: "快適性と耐久性を両立した高品質シートバック",
      imageUrl: "assets/images/productImages/seat/seat1.jpg",
    },
    {
      id: 5,
      name: "シートヒンジカバー",
      description: "精密な設計による完璧なフィット感を実現",
      imageUrl: "assets/images/productImages/seat/seat2.jpg",
    },
    {
      id: 6,
      name: "リヤシートリバーシブルマット",
      description: "両面使用可能な実用的なデザイン",
      imageUrl: "assets/images/productImages/seat/seat3.jpg",
    },
    {
      id: 7,
      name: "ポップアップトノカバー",
      description: "使いやすさを追求した革新的な機構設計",
      imageUrl: "assets/images/productImages/seat/seat4.jpg",
    },
    {
      id: 8,
      name: "上級シートキルティング",
      description: "高級感あふれる美しいキルティング加工",
      imageUrl: "assets/images/productImages/seat/product5.jpg",
    },
    {
      id: 9,
      name: "リアシートサイド",
      description: "安全性と快適性を考慮した人間工学に基づく設計",
      imageUrl: "assets/images/productImages/seat/product6.jpg",
    },
    {
      id: 10,
      name: "パーテーション カバー",
      description: "車内空間を効率的に区切るための高機能パーテーション",
      imageUrl: "assets/images/productImages/seat/product7.jpg",
    },
    {
      id: 11,
      name: "パーテーション センター",
      description: "高い耐久性と美しい外観を兼ね備えたセンターパーテーション",
      imageUrl: "assets/images/productImages/seat/product8.jpg",
    },
    {
      id: 12,
      name: "パーテーション メイン",
      description: "車内の快適性を高める高品質パーテーション",
      imageUrl: "assets/images/productImages/seat/product9.jpg",
    },
    {
      id: 13,
      name: "パーテーションASSY",
      description: "複数のパーツを組み合わせた統合型パーテーション",
      imageUrl: "assets/images/productImages/seat/product10.jpg",
    },
  ],
  console: [
    {
      id: 14,
      name: "センターコンソールASSY",
      description: "機能性と美観を両立した高品質センターコンソール",
      imageUrl: "assets/images/productImages/console/console1.jpg",
    },
    {
      id: 15,
      name: "コンソールサイドパット",
      description: "快適な乗車感を実現するサイドパッド",
      imageUrl: "assets/images/productImages/console/console2.jpg",
    },
    {
      id: 16,
      name: "ニーパット",
      description: "長時間のドライブでも快適な姿勢をサポート",
      imageUrl: "assets/images/productImages/console/console3.jpg",
    },
  ],
  door: [
    {
      id: 17,
      name: "アームレスト",
      description: "人間工学に基づいた設計で長時間の運転でも快適",
      imageUrl: "assets/images/productImages/door/door1.jpg",
    },
    {
      id: 18,
      name: "アームレスト",
      description: "高級感のある素材と仕上げによる上質な質感",
      imageUrl: "assets/images/productImages/door/door2.jpg",
    },
    {
      id: 19,
      name: "ドアオーナメント",
      description: "車内の雰囲気を高める洗練されたデザイン",
      imageUrl: "assets/images/productImages/door/door3.jpg",
    },
    {
      id: 20,
      name: "ドアオーナメント",
      description: "高品質な素材を使用した耐久性のあるオーナメント",
      imageUrl: "assets/images/productImages/door/door4.jpg",
    },
  ],
  pillar: [
    {
      id: 21,
      name: "フロントピラー",
      description: "視界を確保しながら車内の静粛性を高める設計",
      imageUrl: "assets/images/productImages/pillar/pillar1.jpg",
    },
    {
      id: 22,
      name: "センターピラー",
      description: "車体強度を保ちながら美しい内装を実現",
      imageUrl: "assets/images/productImages/pillar/pillar2.jpg",
    },
    {
      id: 23,
      name: "ルーフサイドピラー",
      description: "空力性能と美観を両立した革新的なデザイン",
      imageUrl: "assets/images/productImages/pillar/pillar3.jpg",
    },
  ],
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("interior");

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">製品紹介</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          豊中工業では、自動車内装部品を中心に、高品質で革新的な製品を開発・製造しています。
          長年の経験と最新技術を融合させ、お客様のニーズに応える製品をご提供します。
        </p>
      </div>

      {/* Category Tabs - Full Width */}
      <div className="w-full mb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap border-b border-gray-200">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`py-3 px-6 font-medium text-lg transition-colors duration-200 relative
                  ${
                    activeCategory === category.id
                      ? "text-primary"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                {category.name}
                {activeCategory === category.id && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center">
          <div className="w-1 h-8 bg-primary mr-3"></div>
          <h2 className="text-2xl font-bold text-gray-900">
            {categories.find((c) => c.id === activeCategory)?.name}
          </h2>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsByCategory[activeCategory].map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-64 bg-gray-100 flex items-center justify-center">
              {/* 画像が表示されるエリア */}
              <div className="w-full h-full flex items-center justify-center">
                <img src={product.imageUrl} alt={product.name} />
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Product Inquiry Section - Full Width */}
      <div className="w-full mt-16 bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              製品に関するお問い合わせ
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              製品の詳細情報や仕様についてのお問い合わせは、下記のボタンからお問い合わせフォームへお進みください。
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              お問い合わせはこちら
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
