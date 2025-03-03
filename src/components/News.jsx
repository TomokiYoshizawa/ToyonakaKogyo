import { useState } from "react";
import { newsItems } from "../data/newsData";

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredNews =
    selectedCategory === "all"
      ? newsItems
      : newsItems.filter((item) => item.category === selectedCategory);

  // Function to format date from YYYY-MM-DD to YYYY/MM/DD
  const formatDate = (dateString) => {
    return dateString.replace(/-/g, "/");
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">新着情報</h2>
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === "all"
                ? "bg-primary text-white"
                : "bg-white text-gray-700"
            }`}
          >
            すべて
          </button>
          {["お知らせ", "プレスリリース", "イベント"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700"
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
                  <span className="text-gray-500 text-sm">
                    {formatDate(item.date)}
                  </span>
                  <span className="px-2 py-0.5 bg-primary text-white text-xs rounded">
                    {item.category}
                  </span>
                </div>
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.isExternal ? "_blank" : ""}
                    rel={item.isExternal ? "noopener noreferrer" : ""}
                    className="text-base font-medium text-gray-900 hover:text-primary"
                  >
                    {item.title}
                  </a>
                ) : (
                  <span className="text-base font-medium text-gray-900">
                    {item.title}
                  </span>
                )}
                <p className="text-sm text-gray-600">{item.description}</p>
                {item.hasImage && (
                  <div className="mt-2 rounded-lg overflow-hidden h-24">
                    {item.images ? (
                      <div className="flex space-x-2 h-full w-full justify-start">
                        {item.images.map((img, index) => (
                          <div
                            key={index}
                            className="h-full"
                            style={{ flex: "0 0 auto", maxWidth: "48%" }}
                          >
                            <img
                              key={index}
                              src={
                                img.startsWith("/")
                                  ? img
                                  : `/toyonakaKogyo/${img}`
                              }
                              alt={`${item.title} - 画像 ${index + 1}`}
                              className="h-full object-contain"
                              onError={(e) => {
                                console.error(`画像読み込みエラー: ${img}`);
                                e.target.style.display = "none";
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    ) : item.image ? (
                      <img
                        src={
                          item.image.startsWith("/")
                            ? item.image
                            : `/toyonakaKogyo/${item.image}`
                        }
                        alt={item.title}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          console.error(`画像読み込みエラー: ${item.image}`);
                          e.target.style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="bg-gray-100 p-3 flex items-center justify-center h-full w-full">
                        <p className="text-gray-400 text-sm">画像スペース</p>
                      </div>
                    )}
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
