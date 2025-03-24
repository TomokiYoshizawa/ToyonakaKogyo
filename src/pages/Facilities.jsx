import { useState } from 'react';
import { Link } from 'react-router-dom';

// Factory equipment data
const factoryEquipment = {
  headquarters: [
    { name: 'NC尼尺・環履式裁断機', quantity: 1 },
    { name: '油圧プレス', quantity: 1 },
    { name: '熱転写機', quantity: 2 },
    { name: '刺繍ミシン', quantity: 1 },
    { name: 'オーバーロック・ギャザーミシン', quantity: 3 },
    { name: 'コンピューターミシン', quantity: 4 },
    { name: 'ミシン', quantity: 29 },
    { name: '3Dプリンタ', quantity: 1 },
    { name: '超音波溶着機', quantity: 1 }
  ],
  toyota: [
    { name: '成形機', quantity: 1 },
    { name: 'ロボット・ウォータージェット加工機', quantity: 1 },
    { name: 'NC尼尺・環履式裁断機', quantity: 1 },
    { name: '油圧プレス', quantity: 1 },
    { name: '防爆塗装ロボット', quantity: 2 },
    { name: 'コンピューターミシン', quantity: 4 },
    { name: 'ミシン', quantity: 21 }
  ],
  toyama: [
    { name: 'NC尼尺・環履式裁断機', quantity: 1 },
    { name: '高周波ウェルダー機', quantity: 1 },
    { name: 'エアプレス', quantity: 3 },
    { name: '配管加工用ヒーター', quantity: 1 },
    { name: 'スチームボイラー', quantity: 1 },
    { name: 'ミシン', quantity: 5 }
  ],
  tochigi: [
    { name: '定尺裁断機', quantity: 1 },
    { name: '油圧プレス（トムソン型）', quantity: 1 },
    { name: '油圧プレス（ウエアー油）', quantity: 1 },
    { name: 'オーバーロックミシン', quantity: 4 },
    { name: '2本針ミシン', quantity: 1 },
    { name: 'ミシン', quantity: 4 },
    { name: 'ホットメルトアプリケーター', quantity: 3 }
  ]
};

// Factory map links
const factoryMapLinks = {
  headquarters: 'https://maps.google.com/?q=35.1107728,136.9251774',
  toyota: 'https://maps.google.com/?q=35.0876,137.1526',
  toyama: 'https://maps.google.com/?q=36.6953,137.2090',
  tochigi: 'https://maps.google.com/?q=36.6485,140.1527'
};

export default function Facilities() {
  const [selectedFactory, setSelectedFactory] = useState('headquarters');

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 via-white to-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            工場・施設紹介
            <span className="block text-2xl text-gray-600 mt-2">Factory & Production Facilities</span>
          </h1>
          <div className="mt-8 prose prose-lg text-gray-600">
            <p>
              豊中工業は、生産拠点を全国に展開することで、お客様の多様なニーズに柔軟に対応できる生産体制を構築しています。
              日本のものづくりの中心地である愛知をはじめとして、国内4つの拠点に最新の生産設備を配備し、高品質な製品の安定供給を実現しています。
            </p>
            <p>
              各拠点は、地域の特性を活かしながら、豊中工業の確かな技術と品質管理システムで結ばれ、
              日本全国に広がる豊中工業のネットワークを形成しています。
            </p>
          </div>
        </div>
      </div>

      {/* Factory Details Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Factory Selection Tabs */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setSelectedFactory('headquarters')}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                selectedFactory === 'headquarters'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              本社工場
            </button>
            <button
              onClick={() => setSelectedFactory('toyota')}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                selectedFactory === 'toyota'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              豊田工場
            </button>
            <button
              onClick={() => setSelectedFactory('toyama')}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                selectedFactory === 'toyama'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              富山工場
            </button>
            <button
              onClick={() => setSelectedFactory('tochigi')}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                selectedFactory === 'tochigi'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              トヨナカ栃木
            </button>
          </div>

          {/* Factory Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Factory Image */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">工場写真が表示されます</p>
              </div>
            </div>

            {/* Factory Information */}
            <div className="space-y-6">
              {selectedFactory === 'headquarters' && (
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">本社工場</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">所在地</h4>
                      <p className="text-gray-600">〒457-0862 愛知県名古屋市南区内田橋二丁目18番11号</p>
                      <p className="text-gray-600">TEL: 052-692-1511 / FAX: 052-692-5052</p>
                      <a 
                        href={factoryMapLinks.headquarters}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-secondary mt-2"
                      >
                        <span>周辺地図を見る</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">主要製品</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>自動車内装部品（シートバック、ガーニッシュ、センターコンソール、サイドパッド、ドアポケット、メータークラスター、トノカバー）</li>
                        <li>インテリア用品（椅子全般：事務・会議・劇場・空港等）</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {selectedFactory === 'toyota' && (
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">豊田工場</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">所在地</h4>
                      <p className="text-gray-600">〒470-0364 愛知県豊田市加納町内山1-1</p>
                      <p className="text-gray-600">TEL: 0565-45-0848 / FAX: 0565-45-0859</p>
                      <a 
                        href={factoryMapLinks.toyota}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-secondary mt-2"
                      >
                        <span>周辺地図を見る</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">主要製品</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>自動車内装部品（シートバック、トランクマット、アームレスト、ドアトリム、フロアカーペット全般、サンルーフオープニングトリム、その他）</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {selectedFactory === 'toyama' && (
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">富山工場</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">所在地</h4>
                      <p className="text-gray-600">〒939-2741 富山県富山市婦中町沢977-2</p>
                      <p className="text-gray-600">TEL: 076-465-1543 / FAX: 076-465-1579</p>
                      <a 
                        href={factoryMapLinks.toyama}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-secondary mt-2"
                      >
                        <span>周辺地図を見る</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">主要製品</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>バス内装部品（テレビ・クーラーボックスカバー、特別仕様車内装、温水配管、その他）</li>
                        <li>バス・鉄道車両用シート（三菱・バス、JR・近鉄等）</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {selectedFactory === 'tochigi' && (
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">トヨナカ栃木株式会社</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">所在地</h4>
                      <div className="space-y-2">
                        <div>
                          <p className="font-medium text-gray-700">大金工場</p>
                          <p className="text-gray-600">〒321-0533 栃木県那須烏山市南大和久沢/塚504番地</p>
                          <p className="text-gray-600">TEL: 0287-88-0795 / FAX: 0287-88-0804</p>
                          <a 
                            href={factoryMapLinks.tochigi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary hover:text-secondary mt-2"
                          >
                            <span>周辺地図を見る</span>
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                        <div>
                          <p className="font-medium text-gray-700">パヤチル関東(株)工場内</p>
                          <p className="text-gray-600">〒321-0505 栃木県那須烏山市上川井957</p>
                          <p className="text-gray-600">TEL/FAX: 0287-82-8040</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">主要製品</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>自動車内装部品（フロアカーペット全般、デッキカーペット、フェルトASSY品、福祉車両、その他）</li>
                        <li>トラック内装部品</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Equipment List */}
          <div className="mt-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">稼働設備一覧</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        設備名
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        台数
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {factoryEquipment[selectedFactory].map((equipment, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {equipment.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                          {equipment.quantity}台
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}