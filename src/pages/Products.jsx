export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">製品紹介</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="h-64 bg-gray-200">
            <img
              src="/images/product1.jpg"
              alt="高機能繊維"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">高機能繊維</h2>
            <p className="text-gray-600 mb-4">
              最先端技術を駆使した高機能繊維製品。耐久性、快適性、機能性を追求し、
              さまざまな用途に対応します。
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>高強度繊維</li>
              <li>防水・撥水加工</li>
              <li>抗菌・防臭処理</li>
            </ul>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="h-64 bg-gray-200">
            <img
              src="/images/product2.jpg"
              alt="環境配慮型素材"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">環境配慮型素材</h2>
            <p className="text-gray-600 mb-4">
              地球環境に配慮したエコフレンドリーな素材。リサイクル材料の活用や
              生分解性素材の開発に取り組んでいます。
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>リサイクルポリエステル</li>
              <li>オーガニックコットン</li>
              <li>生分解性素材</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}