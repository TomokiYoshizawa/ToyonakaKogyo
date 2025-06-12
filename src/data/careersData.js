export const locations = [
  { id: 'headquarters', name: '本社' },
  { id: 'toyota', name: '豊田工場' },
  { id: 'toyama', name: '富山工場' }
];

export const locationContent = {
  headquarters: {
    address: '愛知県名古屋市南区内田橋二丁目18番11号',
    positions: [
      {
        title: '生産技術エンジニア',
        type: '正社員',
        recruitmentType: '新卒・中途',
        description: '自動車内装部品の生産技術開発および工程設計業務',
        responsibilities: [
          '生産ラインの設計・構築',
          '生産効率の改善・最適化',
          '新製品の量産化検討'
        ],
        qualifications: '機械工学系の学部卒業以上、生産技術関連の実務経験3年以上',
        workingHours: '8:30～17:30（実働8時間）',
        holidays: {
          regular: '完全週休2日制（土日）、祝日',
          total: '年間休日119日'
        },
        benefits: [
          '各種社会保険完備',
          '退職金制度',
          '財形貯蓄制度',
          '社員持株会'
        ],
        salary: '月給25万円～45万円（経験・能力による）',
        raise: '年1回（4月）',
        bonus: '年2回（7月・12月）',
        selectionProcess: '書類選考 → 一次面接 → 二次面接 → 内定'
      }
    ]
  },
  toyota: {
    address: '愛知県豊田市加納町向井山1-1',
    positions: [
      {
        title: '品質管理スペシャリスト',
        type: '正社員',
        recruitmentType: '中途',
        description: '自動車内装部品の品質管理および品質保証業務',
        responsibilities: [
          '製品の品質検査',
          '品質管理システムの運用・改善',
          '取引先との品質関連折衝'
        ],
        qualifications: '品質管理の実務経験2年以上、ISO9001の知識必須',
        workingHours: '8:30～17:30（実働8時間）',
        holidays: {
          regular: '完全週休2日制（土日）、祝日',
          total: '年間休日119日'
        },
        benefits: [
          '各種社会保険完備',
          '退職金制度',
          '財形貯蓄制度',
          '社員持株会'
        ],
        salary: '月給23万円～40万円（経験・能力による）',
        raise: '年1回（4月）',
        bonus: '年2回（7月・12月）',
        selectionProcess: '書類選考 → 面接 → 適性検査 → 内定'
      }
    ]
  },
  toyama: {
    address: '富山県富山市婦中町中名977-2',
    positions: []
  }
};

export const commonJobDetails = {
  workingHours: '8:30～17:30（実働8時間）',
  holidays: {
    regular: '完全週休2日制（土日）、祝日',
    total: '年間休日119日'
  },
  benefits: [
    '各種社会保険完備',
    '退職金制度',
    '財形貯蓄制度',
    '社員持株会'
  ]
};