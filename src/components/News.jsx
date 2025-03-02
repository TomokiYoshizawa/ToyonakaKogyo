import { useState } from 'react';

const newsItems = [
  {
    id: 1,
    date: '2024-12-20',
    category: 'お知らせ',
    title: '社長名鑑の経営者インタビューを受けました。',
    description: '弊社代表が社長名鑑の経営者インタビューに掲載されました。',
    hasImage: true,
  },
  {
    id: 2,
    date: '2024-12-07',
    category: 'お知らせ',
    title: '会社案内のページを更新しました。',
    description: '会社案内ページの内容を最新情報に更新いたしました。',
    hasImage: false,
  },
  {
    id: 3,
    date: '2024-12-07',
    category: 'イベント',
    title: '第6回 改善活動発表会を開催しました。',
    description: '社内の改善活動の成果を発表する第6回発表会を開催しました。',
    hasImage: true,
  },
  {
    id: 4,
    date: '2024-05-11',
    category: 'イベント',
    title: '第5回 改善活動発表会を開催しました。',
    description: '社内の改善活動の成果を発表する第5回発表会を開催しました。',
    hasImage: true,
  },
  {
    id: 5,
    date: '2023-12-02',
    category: 'イベント',
    title: '第4回 改善活動発表会を開催しました。',
    description: '社内の改善活動の成果を発表する第4回発表会を開催しました。',
    hasImage: true,
  },
];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredNews = selectedCategory === 'all'
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory);

  // Function to format date from YYYY-MM-DD to YYYY/MM/DD
  const formatDate = (dateString) => {
    return dateString.replace(/-/g, '/');
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">新着情報</h2>
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === 'all'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            すべて
          </button>
          {['お知らせ', 'プレスリリース', 'イベント'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-500 text-sm">{formatDate(item.date)}</span>
                  <span className="px-2 py-0.5 bg-primary text-white text-xs rounded">
                    {item.category}
                  </span>
                </div>
                <a href="#" className="text-base font-medium text-gray-900 hover:text-primary">
                  {item.title}
                </a>
                <p className="text-sm text-gray-600">{item.description}</p>
                {item.hasImage && (
                  <div className="mt-2 bg-gray-100 p-3 rounded-lg flex items-center justify-center h-24">
                    <p className="text-gray-400 text-sm">画像スペース</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}