import { Link } from "react-router-dom";
import carImage from "/assets/images/productImages/carImage.png";
import instrumentPanelImage from "/assets/images/productImages/instrumentPanel.png";
import seatsImage from "/assets/images/productImages/seat.png";
import centerConsoleImage from "/assets/images/productImages/centerConsole.png";
import doorPanelImage from "/assets/images/productImages/doorPanel.png";
import pillarImage from "/assets/images/productImages/pillar.png";

// Product categories with their subcategories
const productCategories = [
  {
    id: "instrument panel",
    name: "インパネ周辺",
    image: instrumentPanelImage,
    subcategories: ["自動車用シート", "航空機シート"],
  },
  {
    id: "seats",
    name: "シート、その他",
    image: seatsImage,
    subcategories: ["ドアトリム", "天井まわり"],
  },
  {
    id: "centerConsole",
    name: "センターコンソール周り",
    image: centerConsoleImage,
    subcategories: ["フィルター製品", "エンジン周り樹脂製品"],
  },
  {
    id: "doors",
    name: "ドア周り",
    image: doorPanelImage,
    subcategories: ["自動車内装用繊維製品", "産業用繊維製品"],
  },
  {
    id: "pillar",
    name: "ピラー",
    image: pillarImage,
    subcategories: ["インテリア椅子", "その他製品"],
  },
];

export default function Products() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">製品</h2>
        </div>

        {/* Left side car illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 flex items-center">
            <div className="bg-gray-100 rounded-lg p-3 w-full">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
                <img
                  src={carImage}
                  className="w-full h-full object-cover"
                  alt="Car illustration"
                />
              </div>
            </div>
          </div>

          {/* Right side product categories - 5 square items */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {productCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-square bg-gray-100 relative">
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-fill"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 to-transparent p-4">
                      <h3 className="text-white font-bold text-lg">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <ul className="text-base text-gray-600">
                      {category.subcategories.map((subcat, index) => (
                        <li key={index} className="flex items-start mb-1">
                          <span className="text-primary mr-1.5 text-lg">›</span>
                          <span className="truncate">{subcat}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 text-right">
                      <Link
                        to={`/products?category=${category.id}`}
                        className="inline-flex items-center text-primary hover:text-secondary text-base font-medium"
                      >
                        <span>詳細</span>
                        <svg
                          className="w-5 h-5 ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
