export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">会社案内</h1>
        <div className="absolute bottom-0 left-0 w-20 h-1 bg-primary"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-16">
        <div className="bg-gradient-to-br from-primary/10 to-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">ごあいさつ</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
           　私たち豊中工業株式会社は1942年(昭和17年)の創業以来、内装部品メーカーとして日本の自動車産業を支えてまいりました。国内でも数少ない、開発から生産まで行うワンストップの生産体制を組むことにより、お客さまの幅広いニーズに対して柔軟に対応することを可能にしてまいりました。<br />
　近年、弊社を取り巻くビジネス環境は大きな変化にさらされています。そんな非常に舵取りの難しい時代であるからこそ、私たちは”ものづくりの原点”に立ち返り、より高品質で付加価値の高い製品づくりに努めてまいります。<br />
　皆さま方に支えていただき、創業から三四半世紀を迎えようとしています。これまでのご愛顧に御礼申し上げるとともに、今後ともより一層のご指導、ご支援を賜りますようお願い申し上げます。
          </p>
        </div>
        <div className="bg-gradient-to-bl from-secondary/10 to-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">会社概要</h2>
          <div className="space-y-4">
            <div className="flex border-b border-gray-200 pb-4">
              <span className="font-medium w-32">会社名</span>
              <div>
                <div className="text-lg">豊中工業株式会社</div>
                <div className="text-gray-600">TOYONAKA INDUSTRY Co.,Ltd.</div>
              </div>
            </div>
            <div className="flex border-b border-gray-200 pb-4">
              <span className="font-medium w-32">代表者</span>
              <span>代表取締役　前川　功冶</span>
            </div>
            <div className="flex border-b border-gray-200 pb-4">
              <span className="font-medium w-32">創業</span>
              <span>1942年1月(昭和17年)</span>
            </div>
            <div className="flex border-b border-gray-200 pb-4">
              <span className="font-medium w-32">設立</span>
              <span>1965年6月(昭和40年)</span>
            </div>
            <div className="flex border-b border-gray-200 pb-4">
              <span className="font-medium w-32">資本金</span>
              <span>3,000万円</span>
            </div>
            <div className="flex border-b border-gray-200 pb-4">
              <span className="font-medium w-32">従業員数</span>
              <span>212名(令和6年3月末)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-2 h-8 bg-primary mr-4"></span>
            主要製品
          </h2>
          <ul className="space-y-3">
            {['自動車内装部品', 'バス内装部品', '鉄道車両用シート', 'インテリア椅子'].map((item) => (
              <li key={item} className="flex items-center text-gray-700 hover:text-primary transition-colors duration-200">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-2 h-8 bg-secondary mr-4"></span>
            主要取引先
          </h2>
          <ul className="space-y-3">
            {[
              '林テレンプ株式会社',
              '株式会社イノアックコーポレーション',
              '天龍工業株式会社',
              '三菱ふそうトラック・バス株式会社',
              'アウンデ紡織株式会社',
              '他多数'
            ].map((item) => (
              <li key={item} className="flex items-center text-gray-700 hover:text-secondary transition-colors duration-200">
                <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <span className="w-2 h-8 bg-primary mr-4"></span>
          事業所
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: '本社工場',
              address: '〒457-0862　愛知県名古屋市南区内田橋二丁目18番11号',
              tel: '052-692-1511',
              fax: '052-692-5052'
            },
            {
              name: '豊田工場',
              address: '〒470-0364　愛知県豊田市加納町向井山1-1',
              tel: '0565-45-0848',
              fax: '0565-45-0859'
            },
            {
              name: '富山工場',
              address: '〒939-2741　富山県富山市婦中町中名977-2',
              tel: '076-465-1543',
              fax: '076-465-1579'
            }
          ].map((office) => (
            <div key={office.name} className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{office.name}</h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">{office.address}</p>
                <p className="text-sm">TEL：{office.tel}</p>
                <p className="text-sm">FAX：{office.fax}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <span className="w-2 h-8 bg-secondary mr-4"></span>
          関連会社
        </h2>
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900">トヨナカ栃木株式会社</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <h4 className="text-lg font-bold text-gray-900 mb-4">自社工場</h4>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">〒321-0533　栃木県那須烏山市南大和久向ノ後504番地</p>
                <p className="text-sm">TEL：0287-88-0795</p>
                <p className="text-sm">FAX：0287-88-0804</p>
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <h4 className="text-lg font-bold text-gray-900 mb-4">ハヤテレ関東(株)工場内</h4>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">〒321-0505　栃木県那須烏山市上川井957</p>
                <p className="text-sm">TEL/FAX：0287-82-8040</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}