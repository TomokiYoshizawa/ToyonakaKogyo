// import image20241220 from "../assets/images/newsImages/20241220.png";

export const newsItems = [
  {
    id: 1,
    date: "2024-12-20",
    category: "お知らせ",
    title: "社長名鑑の経営者インタビューを受けました。",
    description: "弊社代表が社長名鑑の経営者インタビューに掲載されました。",
    hasImage: true,
    image: "assets/images/newsImages/20241220.png",
    link: "https://shachomeikan.jp/industry_article/3479",
  },
  {
    id: 2,
    date: "2024-12-07",
    category: "お知らせ",
    title: "会社案内のページを更新しました。",
    description: "会社案内ページの内容を最新情報に更新いたしました。",
    hasImage: true,
    // 画像なしのアイテムでも一貫性のため空の文字列またはnullを設定可能
    images: [
      "assets/images/newsImages/20241207.png",
      "assets/images/newsImages/20241207-1.png",
    ],
  },
  {
    id: 3,
    date: "2024-12-07",
    category: "イベント",
    title: "第6回 改善活動発表会を開催しました。",
    description: "社内の改善活動の成果を発表する第6回発表会を開催しました。",
    hasImage: false,
    image: "/images/news/event6.jpg",
  },
  {
    id: 4,
    date: "2024-05-11",
    category: "イベント",
    title: "第5回 改善活動発表会を開催しました。",
    description: "社内の改善活動の成果を発表する第5回発表会を開催しました。",
    hasImage: false,
    image: "/images/news/event5.jpg",
  },
  {
    id: 5,
    date: "2023-12-02",
    category: "イベント",
    title: "第4回 改善活動発表会を開催しました。",
    description: "社内の改善活動の成果を発表する第4回発表会を開催しました。",
    hasImage: false,
    image: "/images/news/event4.jpg",
  },
];
