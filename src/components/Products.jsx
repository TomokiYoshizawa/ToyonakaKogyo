const products = [
  {
    id: 1,
    name: '高機能繊維',
    description: '最先端技術を駆使した高機能繊維製品',
    image: '/images/product1.jpg',
  },
  {
    id: 2,
    name: '環境配慮型素材',
    description: '地球環境に配慮したエコフレンドリーな素材',
    image: '/images/product2.jpg',
  },
  {
    id: 3,
    name: 'スマートテキスタイル',
    description: 'IoT技術を組み込んだ次世代繊維',
    image: '/images/product3.jpg',
  },
];

export default function Products() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">事業製品</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="h-48 bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.description}</p>
                <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition duration-300">
                  詳細を見る
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}