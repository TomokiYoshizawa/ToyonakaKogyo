import { useState } from 'react';

const newsItems = [
  {
    id: 1,
    date: '2024-03-15',
    category: 'お知らせ',
    title: '新製品発表のお知らせ',
  },
  {
    id: 2,
    date: '2024-03-10',
    category: 'プレスリリース',
    title: '環境配慮型製品の開発について',
  },
  {
    id: 3,
    date: '2024-03-05',
    category: 'イベント',
    title: '展示会出展のお知らせ',
  },
];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredNews = selectedCategory === 'all'
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">新着情報</h2>
        <div className="mb-6 flex space-x-4">
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
        <div className="bg-white shadow rounded-lg">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="border-b border-gray-200 last:border-b-0 p-4 hover:bg-gray-50"
            >
              <div className="flex items-center space-x-4">
                <span className="text-gray-500">{item.date}</span>
                <span className="px-2 py-1 bg-primary text-white text-sm rounded">
                  {item.category}
                </span>
                <a href="#" className="text-gray-900 hover:text-primary">
                  {item.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}