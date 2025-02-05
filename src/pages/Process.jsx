export default function Process() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">工程紹介</h1>
      <div className="space-y-12">
        <div className="bg-white shadow rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">原料調達</h2>
          <p className="text-gray-600 mb-4">
            高品質な原料を世界中から調達し、厳格な品質管理のもと、
            安全で信頼性の高い製品づくりを行っています。
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">製造工程</h2>
          <p className="text-gray-600 mb-4">
            最新の設備と熟練の技術を組み合わせ、高品質な製品を
            効率的に生産しています。
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">品質管理</h2>
          <p className="text-gray-600 mb-4">
            製品の品質を確保するため、各工程で厳密な検査を実施しています。
          </p>
        </div>
      </div>
    </div>
  );
}