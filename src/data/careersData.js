export const locations = [
  { id: 'headquarters', name: '本社工場' },
  { id: 'toyota', name: '豊田工場' },
  { id: 'toyama', name: '富山工場' },
  { id: 'tochigi', name: 'トヨナカ栃木株式会社' }
];

export const commonJobDetails = {
  workingHours: '8:00 ～ 17:00',
  holidays: {
    regular: '土日他・GW・夏期・年末年始',
    total: '年間休日120日（2024年度）'
  },
  benefits: [
    '通勤、家族、時間外、休日 他',
    '雇用、労災、健康、厚生年金'
  ],
  salary: '年齢、経験を考慮し、当社規定に基づき支給',
  bonus: '年2回（7月・12月）',
  raise: '年1回（4月）',
  selectionProcess: '応募→書類審査→面接',
};

export const locationContent = {
  headquarters: {
    address: '愛知県名古屋市南区内田橋二丁目18番11号',
    positions: [
      {
        title: '品質管理スタッフ',
        type: '正社員',
        recruitmentType: '中途',
        numberOfPositions: 1,
        qualifications: '高卒以上35歳以下（将来を見据えた人材募集の為）',
        description: '品質に関わる業務全般',
        responsibilities: [
          '不具合の未然防止活動',
          '現場パトロールにてルール順守状況の確認など',
          '不具合発生時の処置、対策など',
          '新商品の品質レベル確認、設定など'
        ],
        workingHours: commonJobDetails.workingHours,
        holidays: commonJobDetails.holidays,
        benefits: commonJobDetails.benefits,
        salary: commonJobDetails.salary,
        bonus: commonJobDetails.bonus,
        raise: commonJobDetails.raise,
        selectionProcess: commonJobDetails.selectionProcess
      },
      {
        title: '品質管理（管理者）',
        type: '正社員',
        recruitmentType: '中途',
        numberOfPositions: 1,
        qualifications: '品質管理業務の経験者',
        description: '品質に関わる業務全般',
        responsibilities: [
          '不具合の未然防止活動',
          '現場パトロールにてルール順守状況の確認など',
          '不具合発生時の処置、対策など',
          '新商品の品質レベル確認、設定など'
        ],
        workingHours: commonJobDetails.workingHours,
        holidays: commonJobDetails.holidays,
        benefits: commonJobDetails.benefits,
        salary: commonJobDetails.salary,
        bonus: commonJobDetails.bonus,
        raise: commonJobDetails.raise,
        selectionProcess: commonJobDetails.selectionProcess
      },
      {
        title: '製造工程の監督者',
        type: '正社員',
        recruitmentType: '中途',
        numberOfPositions: 1,
        qualifications: '高卒以上、40歳以下（将来を見据えた人材募集の為）',
        description: '製造工程の監督及び段取り業務',
        responsibilities: [
          '材料準備・生産指示・出荷準備を行いながら工程の指揮をとる仕事です。',
          '未経験の方には熟練者が指導します。'
        ],
        workingHours: commonJobDetails.workingHours,
        holidays: commonJobDetails.holidays,
        benefits: commonJobDetails.benefits,
        salary: commonJobDetails.salary,
        bonus: commonJobDetails.bonus,
        raise: commonJobDetails.raise,
        selectionProcess: commonJobDetails.selectionProcess
      },
      {
        title: '製造要員',
        type: '正社員',
        recruitmentType: '中途',
        numberOfPositions: 2,
        qualifications: '高卒以上、40歳以下（将来を見据えた人材募集の為）',
        description: '自動車内装品の製造作業です。',
        responsibilities: [
          '加工、部品組付け、検査、出荷準備作業など。',
          '未経験の方には熟練者が指導します。'
        ],
        workingHours: commonJobDetails.workingHours,
        holidays: commonJobDetails.holidays,
        benefits: commonJobDetails.benefits,
        salary: commonJobDetails.salary,
        bonus: commonJobDetails.bonus,
        raise: commonJobDetails.raise,
        selectionProcess: commonJobDetails.selectionProcess
      },
      {
        title: '検査員',
        type: '正社員',
        recruitmentType: '中途',
        numberOfPositions: 2,
        qualifications: '高卒以上、44歳以下（将来を見据えた人材募集の為）',
        description: '自動車内装部品の外観検査',
        responsibilities: [
          'トノカバー、パーテーションなどの軽量品の外観検査（シワ、キズ、汚れ等）',
          '未経験の方には熟練者が指導します。'
        ],
        workingHours: commonJobDetails.workingHours,
        holidays: commonJobDetails.holidays,
        benefits: commonJobDetails.benefits,
        salary: commonJobDetails.salary,
        bonus: commonJobDetails.bonus,
        raise: commonJobDetails.raise,
        selectionProcess: commonJobDetails.selectionProcess
      }
    ]
  },
  toyota: {
    address: '愛知県豊田市加納町向井山1-1',
    positions: [
      {
        title: '製造管理スタッフ（将来の幹部候補）',
        type: '正社員',
        recruitmentType: '中途',
        numberOfPositions: 1,
        qualifications: '35歳以下（キャリア形成を図る為）、普通自動車免許（AT限定可）',
        description: '自動車の内装部品を製造するにあたり各工程から提出された日報やチェックシートを確認し、出来高や工程管理等、製造現場を統轄し管理する仕事です。',
        workingHours: commonJobDetails.workingHours,
        holidays: commonJobDetails.holidays,
        benefits: commonJobDetails.benefits,
        salary: commonJobDetails.salary,
        bonus: commonJobDetails.bonus,
        raise: commonJobDetails.raise,
        selectionProcess: commonJobDetails.selectionProcess
      },
      {
        title: '製造管理者',
        type: '正社員',
        recruitmentType: '中途',
        numberOfPositions: 1,
        qualifications: '35歳以下（キャリア形成を図る為）、普通自動車免許（AT限定可）',
        description: '自動車の内装部品を製造するにあたり各工程から提出された日報やチェックシートを確認し、出来高や工程管理等、製造現場を統轄し管理する仕事です。',
        workingHours: commonJobDetails.workingHours,
        holidays: commonJobDetails.holidays,
        benefits: commonJobDetails.benefits,
        salary: commonJobDetails.salary,
        bonus: commonJobDetails.bonus,
        raise: commonJobDetails.raise,
        selectionProcess: commonJobDetails.selectionProcess
      },
      {
        title: '生産技術管理スタッフ（将来の幹部候補）',
        type: '正社員',
        recruitmentType: '中途',
        numberOfPositions: 1,
        qualifications: '35歳以下（キャリア形成を図る為）、普通自動車免許（AT限定可）',
        description: '自動車の内装部品の製造を展開する当社において、新製品の生産準備段階での工法開発、設備起案、工程造り等の担当としてご活躍いただきます。生産技術一連の業務をご担当いただきますが、量産体制の構築をメインミッションとしてお任せします。',
        workingHours: commonJobDetails.workingHours,
        holidays: commonJobDetails.holidays,
        benefits: commonJobDetails.benefits,
        salary: commonJobDetails.salary,
        bonus: commonJobDetails.bonus,
        raise: commonJobDetails.raise,
        selectionProcess: commonJobDetails.selectionProcess
      },
      {
        title: '生産技術管理者',
        type: '正社員',
        recruitmentType: '中途',
        numberOfPositions: 1,
        qualifications: '35歳以下（キャリア形成を図る為）、普通自動車免許（AT限定可）',
        description: '自動車の内装部品の製造を展開する当社において、新製品の生産準備段階での工法開発、設備起案、工程造り等の担当としてご活躍いただきます。生産技術一連の業務をご担当いただきますが、量産体制の構築をメインミッションとしてお任せします。',
        workingHours: commonJobDetails.workingHours,
        holidays: commonJobDetails.holidays,
        benefits: commonJobDetails.benefits,
        salary: commonJobDetails.salary,
        bonus: commonJobDetails.bonus,
        raise: commonJobDetails.raise,
        selectionProcess: commonJobDetails.selectionProcess
      },
      {
        title: '品質保証管理者',
        type: '正社員',
        recruitmentType: '中途',
        numberOfPositions: 1,
        qualifications: '35歳以下（キャリア形成を図る為）、普通自動車免許（AT限定可）',
        description: '自動車の内装部品の品質に関わる業務全般を担当していただきます。',
        responsibilities: [
          '不具合の未然防止活動',
          '現場パトロールにてルール遵守状況の確認',
          '新商品の品質レベル確認、取り決め'
        ],
        workingHours: commonJobDetails.workingHours,
        holidays: commonJobDetails.holidays,
        benefits: commonJobDetails.benefits,
        salary: commonJobDetails.salary,
        bonus: commonJobDetails.bonus,
        raise: commonJobDetails.raise,
        selectionProcess: commonJobDetails.selectionProcess
      },
      {
        title: '製造管理(段取り者)スタッフ',
        type: '正社員',
        recruitmentType: '中途',
        numberOfPositions: 1,
        qualifications: '35歳以下（キャリア形成を図る為）、高卒以上、普通自動車免許、フォークリフト運転技能者（あれば尚可）',
        description: '自動車の内装部品の製造管理、段取り、工程の監督者として出来高、品質、資材投入を含め製造現場を管理していただきます。主要製品はレクサスなどの高級車の内装部品となります。',
        responsibilities: [
          'インパネやドア周りとシートカバー部品の製造管理',
          '表皮裁断、縫製、貼り込み、組付け、検査工程の管理'
        ],
        workingHours: commonJobDetails.workingHours,
        holidays: commonJobDetails.holidays,
        benefits: commonJobDetails.benefits,
        salary: commonJobDetails.salary,
        bonus: commonJobDetails.bonus,
        raise: commonJobDetails.raise,
        selectionProcess: commonJobDetails.selectionProcess
      },
      {
        title: '4tトラックドライバー',
        type: '正社員',
        recruitmentType: '中途',
        numberOfPositions: 1,
        qualifications: '64歳以下（定年を上限）、高卒以上、8トン限定中型自動車免許、フォークリフト運転技能者',
        description: '生産した製品をお客様へ納品していただきます。',
        responsibilities: [
          '4tトラックによる輸送（距離は2km程度）',
          '納品回数は5回/日程度',
          '工場内フォークリフト搬送業務',
          'レクサスなどの高級車の内装部品の配送'
        ],
        workingHours: commonJobDetails.workingHours,
        holidays: commonJobDetails.holidays,
        benefits: commonJobDetails.benefits,
        salary: commonJobDetails.salary,
        bonus: commonJobDetails.bonus,
        raise: commonJobDetails.raise,
        selectionProcess: '応募→面接'
      }
    ]
  },
  toyama: {
    address: '富山県富山市婦中町中名977-2',
    positions: []
  },
  tochigi: {
    address: '栃木県那須烏山市南大和久向ノ後504番地',
    positions: [
      {
        title: '製造要員/材料準備',
        type: '正社員',
        recruitmentType: '中途',
        numberOfPositions: 2,
        qualifications: '40歳以下（キャリア形成を図る為）、普通自動車免許、フォークリフト運転技能（あれば尚可）',
        description: '自動車内装品の製造業務をしていただきます。',
        responsibilities: [
          '機械操作オペレーター',
          '材料運搬及び供給',
          'その他生産工程に付帯する業務',
          '未経験の方には熟練者が指導します。'
        ],
        workingHours: '交替制\n①8:00 ～ 16:55\n②20:25 ～ 5:20',
        holidays: commonJobDetails.holidays,
        benefits: commonJobDetails.benefits,
        salary: commonJobDetails.salary,
        bonus: commonJobDetails.bonus,
        raise: commonJobDetails.raise,
        selectionProcess: '応募→面接'
      }
    ]
  }
};