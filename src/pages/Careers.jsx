export default function Careers() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">採用情報</h1>
      <div className="space-y-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">募集職種</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">技術職</h3>
              <p className="text-gray-600">製品開発、製造プロセス管理、品質管理など</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">営業職</h3>
              <p className="text-gray-600">法人営業、海外営業、マーケティングなど</p>
            </div>
            <div className="pb-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">研究開発職</h3>
              <p className="text-gray-600">新素材開発、製品研究など</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">求める人材</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>チャレンジ精神を持ち、新しいことに積極的に取り組める方</li>
            <li>チームワークを重視し、協調性のある方</li>
            <li>技術革新に興味を持ち、継続的な学習意欲のある方</li>
          </ul>
        </div>
      </div>
    </div>
  );
}