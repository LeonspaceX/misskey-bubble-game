import { reactive } from 'vue';

export type Locale = 'en-US' | 'ja-JP' | 'zh-CN' | 'zh-TW' | 'zh-MIAO';

const messages = {
  'en-US': {
    bubbleGame: 'Bubble Game',
    start: 'Begin',
    soundWillBePlayed: 'Sound will be played',
    mute: 'Mute',
    loading: 'Loading',
    sfx: 'Sound Effects',
    volume: 'Volume',
    showReplay: 'View Replay',
    replay: 'Replay',
    replaying: 'Showing replay',
    endReplay: 'Exit Replay',
    copyReplayData: 'Copy replay data',
    backToTitle: 'Go back to title',
    surrender: 'Cancel',
    gameRetry: 'Retry',
    share: 'Share',
    _bubbleGame: {
      howToPlay: 'How to play',
      hold: 'Hold',
      confirmSurrender: 'Are you sure?',
      confirmOk: 'OK',
      confirmCancel: 'Cancel',
      _score: {
        score: 'Score',
        scoreYen: 'Amount of money earned',
        highScore: 'High score',
        maxChain: 'Maximum number of chains',
        yen: '{yen} Yen',
        estimatedQty: '{qty} Pieces',
        scoreSweets: '{onigiriQtyWithUnit} Onigiri',
      },
      _howToPlay: {
        section1: 'Adjust the position and drop the object into the box.',
        section2: 'When two objects of the same type touch each other, they will change into a different object and you score points.',
        section3: 'The game is over when objects overflow from the box. Aim for a high score by fusing objects together while you avoid overflowing the box!'
      },
    },
  },
  'ja-JP': {
    bubbleGame: 'バブルゲーム',
    start: '始める',
    soundWillBePlayed: 'サウンドが再生されます',
    mute: 'ミュート',
    loading: '読み込み中',
    sfx: '効果音',
    volume: '音量',
    showReplay: 'リプレイを見る',
    replay: 'リプレイ',
    replaying: 'リプレイ中',
    endReplay: 'リプレイを終了',
    copyReplayData: 'リプレイデータをコピー',
    backToTitle: 'タイトルへ',
    surrender: 'やめる',
    gameRetry: 'リトライ',
    share: '共有',
    _bubbleGame: {
      howToPlay: '遊び方',
      hold: 'ホールド',
      confirmSurrender: '本当に実行しますか？',
      confirmOk: 'OK',
      confirmCancel: 'キャンセル',
      _score: {
        score: 'スコア',
        scoreYen: '稼いだ金額',
        highScore: 'ハイスコア',
        maxChain: '最大チェーン数',
        yen: '{yen}円',
        estimatedQty: '{qty}個分',
        scoreSweets: 'おにぎり {onigiriQtyWithUnit}',
      },
      _howToPlay: {
        section1: '位置を調整してハコにモノを落とします。',
        section2: '同じ種類のモノがくっつくと別のモノに変化して、スコアが得られます。',
        section3: 'モノがハコからあふれるとゲームオーバーです。ハコからあふれないようにしつつモノを融合させてハイスコアを目指そう！'
      },
    },
  },
  'zh-CN': {
    bubbleGame: '泡泡游戏',
    start: '开始',
    soundWillBePlayed: '声音将会播放',
    mute: '屏蔽',
    loading: '读取中',
    sfx: '音效',
    volume: '音量',
    showReplay: '观看回放',
    replay: '重播',
    replaying: '重播中',
    endReplay: '结束回放',
    copyReplayData: '复制回放数据',
    backToTitle: '返回标题',
    surrender: '取消',
    gameRetry: '重试',
    share: '分享',
    _bubbleGame: {
      howToPlay: '游戏说明',
      hold: '抓住',
      confirmSurrender: '你确定吗？',
      confirmOk: '确定',
      confirmCancel: '取消',
      _score: {
        score: '得分',
        scoreYen: '赚到的钱',
        highScore: '最高分',
        maxChain: '最高连击数',
        yen: '{yen} 日元',
        estimatedQty: '约 {qty} 个',
        scoreSweets: '相当于 {onigiriQtyWithUnit} 饭团',
      },
      _howToPlay: {
        section1: '对准位置将Emoji投入盒子。',
        section2: '相同的Emoji相互接触合成后会得到新的Emoji，以此获得分数。',
        section3: '如果Emoji从箱子中溢出游戏将会结束。在防止Emoji溢出的同时，不断合成新的Emoji，来获取更高的分数吧！'
      },
    },
  },
  'zh-TW': {
    bubbleGame: '氣泡遊戲',
    start: '開始',
    soundWillBePlayed: '將播放音效',
    mute: '靜音',
    loading: '載入中',
    sfx: '音效',
    volume: '音量',
    showReplay: '觀看重播',
    replay: '重播',
    replaying: '重播中',
    endReplay: '退出重播',
    copyReplayData: '複製重播資料',
    backToTitle: '回到遊戲標題頁',
    surrender: '退出',
    gameRetry: '再試一次',
    share: '分享',
    _bubbleGame: {
      howToPlay: '玩法說明',
      hold: '保留',
      confirmSurrender: '確定要這樣做嗎？',
      confirmOk: '確定',
      confirmCancel: '取消',
      _score: {
        score: '分數',
        scoreYen: '賺取的金額',
        highScore: '最高分',
        maxChain: '最大結合數',
        yen: '{yen}円',
        estimatedQty: '{qty}個',
        scoreSweets: '飯糰 {onigiriQtyWithUnit}',
      },
      _howToPlay: {
        section1: '調整位置並將物體放入盒子中。',
        section2: '當相同類型的物體黏在一起時，它們會變成不同的物體，您就會得到分數。',
        section3: '如果物體從盒子裡溢出，遊戲就結束了。透過融合物體而不溢出盒子來獲得高分！'
      },
    },
  },
  'zh-MIAO': {
    bubbleGame: '泡泡游戏',
    start: '开始喵',
    soundWillBePlayed: '声音将会播放喵！',
    mute: '屏蔽喵',
    loading: '少女祈祷中...',
    sfx: '音效',
    volume: '音量',
    showReplay: '观看回放喵',
    replay: '重播喵',
    replaying: '重播中喵',
    endReplay: '结束回放喵',
    copyReplayData: '复制回放数据喵',
    backToTitle: '返回标题喵',
    surrender: '取消',
    gameRetry: '重试',
    share: '分享喵',
    _bubbleGame: {
      howToPlay: '游戏说明喵！',
      hold: '抓住QwQ',
      confirmSurrender: '呜哇T^T你确定嘛喵！？',
      confirmOk: '是的喵！',
      confirmCancel: '不要呜呜呜',
      _score: {
        score: '得分',
        scoreYen: '赚到的钱',
        highScore: '最高分',
        maxChain: '最高连击数',
        yen: '{yen} 日元喵',
        estimatedQty: '约 {qty} 个喵',
        scoreSweets: '相当于 {onigiriQtyWithUnit} 饭团喵！杂鱼！',
      },
      _howToPlay: {
        section1: '对准位置将Emoji投入盒子喵！',
        section2: '相同的Emoji相互接触合成后会得到新的Emoji，以此获得分数喵！',
        section3: '如果Emoji从箱子中溢出游戏将会结束喵...在防止Emoji溢出的同时，不断合成新的Emoji，来获取更高的分数吧喵！'
      },
    },
  },
} as const;

const state = reactive({
  locale: (localStorage.getItem('bubbleGame.locale') as Locale) || 'en-US',
});

function setLocale(locale: Locale) {
  state.locale = locale;
  localStorage.setItem('bubbleGame.locale', locale);
}

function tsx<T extends Record<string, string>>(template: string, vars: T): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? '');
}

const i18n = {
  state,
  setLocale,
  get ts() {
    return messages[state.locale];
  },
  tsx: (template: string, vars: Record<string, string | number>) => tsx(template, Object.fromEntries(Object.entries(vars).map(([k, v]) => [k, String(v)]))),
  locales: [
    { value: 'en-US', label: 'English' },
    { value: 'ja-JP', label: '日本語' },
    { value: 'zh-CN', label: '简体中文' },
    { value: 'zh-TW', label: '繁體中文' },
    { value: 'zh-MIAO', label: '喵喵喵！？' },
  ] as const,
};

export { i18n };
