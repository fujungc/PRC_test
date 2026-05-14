// data definition based on docs/pet_parent_quiz_spec.md
const questions = [
  { id: 1, axis: "R/I", text: "毛孩今天吐了一次，你的第一個動作是：", options: [
    { label: "拍下來、查 Google 看顏色形狀代表什麼", value: "R" },
    { label: "摸摸牠、看精神食慾正不正常，再決定", value: "I" }
  ]},
  { id: 2, axis: "R/I", text: "朋友送了一包沒看過的新零食，你會：", options: [
    { label: "翻成分表、查品牌評價、確認有無過敏原", value: "R" },
    { label: "給一點點試試，看牠喜不喜歡再說", value: "I" }
  ]},
  { id: 3, axis: "R/I", text: "滑 IG 看到一篇「毛孩飲食 5 大地雷」，你會：", options: [
    { label: "立刻收藏、傳給家人、檢查家裡有沒有踩到", value: "R" },
    { label: "大致看一下，覺得有道理就記在心裡", value: "I" }
  ]},
  { id: 4, axis: "A/C", text: "健檢報告有一項數值超出正常值 0.1，你會：", options: [
    { label: "反覆看報告、考慮複檢、查飲食能否調整", value: "A" },
    { label: "問獸醫嚴不嚴重，照建議處理", value: "C" }
  ]},
  { id: 5, axis: "A/C", text: "毛孩睡覺時身體抖了一下，你會：", options: [
    { label: "立刻錄影、計算頻率、查抽搐相關文章", value: "A" },
    { label: "覺得牠應該在做夢，繼續做自己的事", value: "C" }
  ]},
  { id: 6, axis: "A/C", text: "半夜聽到毛孩在客廳走來走去，你會：", options: [
    { label: "起來看牠在做什麼、是不是哪裡不舒服", value: "A" },
    { label: "翻個身繼續睡，牠應該只是想喝水", value: "C" }
  ]},
  { id: 7, axis: "E/S", text: "半夜毛孩看起來怪怪的，你最想做的是：", options: [
    { label: "找個獸醫問問看", value: "E" },
    { label: "發文到社團，看有沒有人遇過", value: "S" }
  ]},
  { id: 8, axis: "E/S", text: "換飼料時，你主要會參考：", options: [
    { label: "獸醫推薦、營養學文章、品牌官方資訊", value: "E" },
    { label: "養同品種朋友的經驗、社團熱門推薦", value: "S" }
  ]},
  { id: 9, axis: "E/S", text: "朋友推薦了一款保健品，你會：", options: [
    { label: "先查成分、看臨床數據、確認有無獸醫背書", value: "E" },
    { label: "看身邊有沒有人吃過、評價怎麼樣", value: "S" }
  ]},
  { id: 10, axis: "P/T", text: "對於「年度健檢」這件事，你的想法是：", options: [
    { label: "一年一次是基本，最好還能加做血液檢查", value: "P" },
    { label: "牠看起來沒事就先不用，避免過度醫療", value: "T" }
  ]},
  { id: 11, axis: "P/T", text: "看到「換季容易過敏」的衛教文，你會：", options: [
    { label: "提前調整環境、買除濕機、準備抗敏配方", value: "P" },
    { label: "目前看起來都好，先觀察就好", value: "T" }
  ]},
  { id: 12, axis: "P/T", text: "對於毛孩的牙齒保健，你的習慣是：", options: [
    { label: "固定刷牙、定期洗牙、選潔牙零食", value: "P" },
    { label: "牠不太喜歡刷牙，不會太勉強牠", value: "T" }
  ]}
];

const typeMap = {
  "RAEP": "scholar",    "RAET": "rescuer",
  "RASP": "detective",  "RAST": "detective",
  "RCEP": "composed",   "RCET": "composed",
  "RCSP": "composed",   "RCST": "composed",
  "IAEP": "intuitive",  "IAET": "intuitive",
  "IASP": "intuitive",  "IAST": "intuitive",
  "ICEP": "composed",   "ICET": "buddy",
  "ICSP": "composed",   "ICST": "buddy"
};

const petLabel = {
  "cat": "主子",
  "dog": "狗狗",
  "other": "寶貝"
};

const types = {
  "scholar": {
    "name": "學者型", "subtitle": "研究生媽 / 爸",
    "accent": "#1F4E3D", "surface": "#EAEFE0",
    "hook": "你不是焦慮，你只是太認真。",
    "description": "你對你家{pet}的健康有著近乎研究員的執著。手機裡存著一個叫「毛孩健康」的資料夾，裡面分門別類有飲食、體重、糞便顏色、就醫紀錄。你會主動找文獻、追蹤獸醫 IG、半夜看完一篇論文還會傳到家庭群組提醒大家。對你來說，知識是愛的一種證明。",
    "advice": "你已經做得很好了。其實毛孩需要的，不是一個無所不知的家長，而是一個願意找對的人問的家長。把資料蒐集的時間，分一點給「找專業人協助判讀」。",
    "cta": "學者型家長最常在凌晨 1 點查資料。我們正在打造一個「凌晨 1 點也能問獸醫」的服務。"
  },
  "detective": {
    "name": "偵探型", "subtitle": "蒐證家長",
    "accent": "#8B4513", "surface": "#F0E2CC",
    "hook": "你貼出三張照片＋一段影片，只為了一個準確的答案。",
    "description": "你在社團發文一定附「精神／食慾／排便」三張照片，標題寫得像新聞稿——「2 歲米克斯{pet}，昨晚開始間歇性甩頭，第三次嘔吐附影片」。你不是亂問的人，你是在認真蒐證，希望能得到最精準的判斷。同時你會仔細讀完留言區，比對 5 個版本的建議。",
    "advice": "你蒐證的能力是無價的——但 50 個熱心鄉民的意見加起來，仍然不等於一個專業判斷。把你蒐集到的影像直接給專業的人看，會比 50 則留言更省時間，也更安心。",
    "cta": "偵探型家長已經拍好了照片和影片。你需要的不是更多留言，是一個能直接幫你看的人。"
  },
  "rescuer": {
    "name": "急救型", "subtitle": "隨時待命家長",
    "accent": "#C73E3A", "surface": "#F5D5D3",
    "hook": "先別點開那篇文章。",
    "description": "平常你是個冷靜的人，你家{pet}平時也健康活潑，但只要看到任何「不對勁」的訊號——你會立刻 Google、立刻打電話、立刻準備衝醫院。你的待機反應極快，常常還沒搞清楚狀況，外套就穿好了。同時你會在路上一直查最壞的可能性，把自己嚇得半死。",
    "advice": "急救反應是好事，但「先確認、再決定要不要急」會讓你的能量花在刀口上。下次點開搜尋之前，先讓專業的人快速判斷一下嚴重程度，可能會省下你三天份的擔心。",
    "cta": "急救型家長每次衝醫院前都很焦慮。15 分鐘的線上獸醫諮詢，能幫你判斷這次到底要不要衝。"
  },
  "intuitive": {
    "name": "直覺型", "subtitle": "貼身感應者",
    "accent": "#534166", "surface": "#E2DBEA",
    "hook": "你的直覺常常是對的，只是還需要專業幫你翻譯。",
    "description": "你不太會查資料、也不太發社團文，但你對你家{pet}的狀態極度敏感。「牠今天眼神不太一樣」「牠走路節奏怪怪的」「牠最近比較黏我」——這些別人感覺不到的細節，你都察覺得到。你跟{pet}之間有一種說不出口的連結。",
    "advice": "你的觀察非常珍貴——別讓「我講不清楚」打消你想諮詢的念頭。一個好的獸醫不會嫌你的描述太抽象，他會幫你把直覺翻譯成可以判斷的線索。",
    "cta": "直覺型家長常常說「我不知道怎麼形容，但就是怪怪的」。我們的線上獸醫，願意陪你慢慢說。"
  },
  "composed": {
    "name": "從容型", "subtitle": "穩定靠山型",
    "accent": "#B8860B", "surface": "#F5E8C8",
    "hook": "不誇張、也不忽略。你只是知道什麼時候該找誰。",
    "description": "你看過幾本基礎書、健檢從不缺席、疫苗準時打。你不焦慮，也不怠慢——你是社團裡那種會理性回文、提醒大家「先冷靜再判斷」的家長。對你來說，照顧{pet}不是一場戰役，而是一段每天慢慢累積的關係。",
    "advice": "你的穩定本身就是毛孩最大的福氣。給自己一個「灰色地帶的諮詢入口」，讓你不必為了確認一件小事而花半天時間排隊。",
    "cta": "從容型家長不會什麼事都衝醫院。但有些灰色地帶，值得花 15 分鐘問清楚。"
  },
  "buddy": {
    "name": "夥伴型", "subtitle": "自在好友型",
    "accent": "#2E6E8E", "surface": "#D5E4ED",
    "hook": "你把牠當朋友，所以你也信任牠的生命力。",
    "description": "你跟你家{pet}的關係更像「室友」或「夥伴」——你尊重牠的個性、相信牠的本能，不會把每件事都過度醫療化。你看過家裡的長輩怎麼養動物，也覺得太緊張反而對毛孩不好。你的生活很自在，{pet}跟著你一起隨遇而安。",
    "advice": "你的自在是毛孩很喜歡的能量。但「自在」跟「漏掉訊號」之間有條細線——讓專業的人幫你抓出真正需要注意的訊號，這樣你才能繼續放心地自在。",
    "cta": "夥伴型家長不會過度焦慮。但偶爾你會想確認一下：「這個要不要看醫生？」"
  }
};

// Application State
let currentPet = null;
let currentQuestionIndex = 0;
let answers = [];

// DOM Elements
const views = {
  welcome: document.getElementById('view-welcome'),
  petSelection: document.getElementById('view-pet-selection'),
  quiz: document.getElementById('view-quiz'),
  result: document.getElementById('view-result')
};

const btnStart = document.getElementById('btn-start');
const petOptions = document.querySelectorAll('.pet-option');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const currentQNum = document.getElementById('current-q-num');

// Waitlist form
const waitlistForm = document.getElementById('waitlist-form');
const emailInput = document.getElementById('email-input');
const submitBtn = document.getElementById('submit-btn');
const successMsg = document.getElementById('success-msg');

// Navigation
function switchView(viewName) {
  Object.values(views).forEach(view => view.classList.remove('active'));
  views[viewName].classList.add('active');
}

// Event Listeners
btnStart.addEventListener('click', () => {
  switchView('petSelection');
});

petOptions.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const btnEl = e.target.closest('.pet-option');
    currentPet = btnEl.dataset.pet;
    startQuiz();
  });
});

function startQuiz() {
  currentQuestionIndex = 0;
  answers = [];
  renderQuestion();
  switchView('quiz');
}

function renderQuestion() {
  const q = questions[currentQuestionIndex];
  questionText.textContent = q.text;
  currentQNum.textContent = currentQuestionIndex + 1;
  progressBar.style.width = `${((currentQuestionIndex) / questions.length) * 100}%`;
  
  optionsContainer.innerHTML = '';
  q.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'btn option-btn';
    btn.innerHTML = `
      <span class="label">${opt.label}</span>
    `;
    btn.onclick = () => handleAnswer(opt.value);
    optionsContainer.appendChild(btn);
  });
}

function handleAnswer(value) {
  answers.push(value);
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    // Add small delay for visual feedback
    const opts = document.querySelectorAll('.option-btn');
    opts.forEach(o => o.style.pointerEvents = 'none');
    setTimeout(() => {
      renderQuestion();
    }, 200);
  } else {
    progressBar.style.width = '100%';
    setTimeout(() => {
      showResult();
    }, 400);
  }
}

function computeResultCode() {
  const count = { R: 0, I: 0, A: 0, C: 0, E: 0, S: 0, P: 0, T: 0 };
  answers.forEach(a => {
    if (count[a] !== undefined) count[a]++;
  });

  const code = 
    (count.R >= count.I ? 'R' : 'I') +
    (count.A >= count.C ? 'A' : 'C') +
    (count.E >= count.S ? 'E' : 'S') +
    (count.P >= count.T ? 'P' : 'T');
    
  return code;
}

function showResult() {
  const code = computeResultCode();
  const typeKey = typeMap[code];
  const typeData = types[typeKey];
  const petName = petLabel[currentPet] || '寶貝';
  
  // Update DOM
  document.getElementById('result-subtitle').textContent = typeData.subtitle;
  document.getElementById('result-subtitle').style.color = typeData.accent;
  document.getElementById('result-name').textContent = typeData.name;
  document.getElementById('result-hook').textContent = typeData.hook;
  
  const formattedDesc = typeData.description.replace(/{pet}/g, petName);
  document.getElementById('result-description').textContent = formattedDesc;
  document.getElementById('result-advice').textContent = typeData.advice;
  document.getElementById('cta-text').textContent = typeData.cta;
  
  const resultImage = document.getElementById('result-image');
  if (resultImage) {
    resultImage.src = `images/${typeKey}.png`;
  }
  
  // Set theme colors
  document.documentElement.style.setProperty('--accent-color', typeData.accent);
  document.body.style.background = `linear-gradient(135deg, #ffffff 0%, ${typeData.surface} 100%)`;
  
  switchView('result');
}

waitlistForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const code = computeResultCode();
  const typeKey = typeMap[code];
  
  // Simulate API call to GAS
  submitBtn.textContent = '送出中...';
  submitBtn.disabled = true;
  
  // In a real scenario, this would be a fetch POST to Google Apps Script Web App URL
  /*
  fetch('YOUR_GAS_WEB_APP_URL', {
    method: 'POST',
    mode: 'no-cors', // Important for GAS
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email, resultType: typeKey, rawCode: code })
  }).then(() => {
    // success
  })
  */
  
  setTimeout(() => {
    waitlistForm.classList.add('hidden');
    successMsg.classList.remove('hidden');
  }, 1000);
});
