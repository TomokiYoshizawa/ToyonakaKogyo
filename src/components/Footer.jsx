export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">豊中工業株式会社</h3>
            <div className="text-gray-400 space-y-2">
              <p>〒457-0862</p>
              <p>愛知県名古屋市南区内田橋二丁目18番11号</p>
              <div className="mt-4">
                <p>TEL: 052-692-1511</p>
                <p>FAX: 052-692-5052</p>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="space-y-3">
                  <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">会社案内</a></li>
                  <li><a href="/products" className="text-gray-400 hover:text-white transition-colors duration-200">製品紹介</a></li>
                  <li><a href="/process" className="text-gray-400 hover:text-white transition-colors duration-200">工程紹介</a></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li><a href="/facilities" className="text-gray-400 hover:text-white transition-colors duration-200">工場・施設</a></li>
                  <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors duration-200">採用情報</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">お問い合わせ</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">&copy; 2024 豊中工業株式会社. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}