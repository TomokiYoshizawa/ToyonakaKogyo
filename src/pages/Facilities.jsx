export default function Facilities() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">工場・施設</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="h-64 bg-gray-200">
            <img
              src="/images/facility1.jpg"
              alt="本社工場"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">本社工場</h2>
            <p className="text-gray-600">
              最新の製造設備を備えた本社工場。
              効率的な生産システムと厳格な品質管理体制を整えています。
            </p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="h-64 bg-gray-200">
            <img
              src="/images/facility2.jpg"
              alt="研究開発センター"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">研究開発センター</h2>
            <p className="text-gray-600">
              新製品の開発と技術革新の拠点。
              最先端の研究設備を活用し、次世代の繊維技術を生み出しています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}