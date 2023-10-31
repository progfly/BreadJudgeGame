//タイトル入力場所
const titleArea = document.getElementById('titleArea');
//ボタンふたつ
const gameStart = document.getElementById("gameStart");
const gameStop = document.getElementById("gameStop");
//給料明細表示場所
const resrutArea = document.getElementById("resrutArea");
//画像表示場所
const answerArea = document.getElementById('answerArea');
const quizArea = document.getElementById('quizArea');
//見本画像
const answerImages = ['https://github.com/progfly/BreadJudgeGame/blob/main/img/melonpan_board.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/syokupan_board.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/mushi_board.png?raw=true'];
//No0～4正しい画像　5~9間違え画像
const ZeroquizImages = ['https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_melonpan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_melonpan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_melonpan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_melonpan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_melonpan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/food_melonpan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bread_syokupan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad1_pan_melonpan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad2_pan_melonpan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad3_pan_melonpan.png?raw=true'];
const OnequizImages = ['https://github.com/progfly/BreadJudgeGame/blob/main/img/bread_syokupan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bread_syokupan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bread_syokupan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bread_syokupan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bread_syokupan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bread_syokupan_usui.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_toast_kongari.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_mushipan_yellow.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad1_bread_syokupan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad2_bread_syokupan.png?raw=true'];
const TwoquizImages = ['https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_mushipan_yellow.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_mushipan_yellow.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_mushipan_yellow.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_mushipan_yellow.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_mushipan_yellow.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_mushipan_white.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_melonpan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad1_pan_mushipan_yellow.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad2_pan_mushipan_yellow.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad3_pan_mushipan_yellow.png?raw=true'];
//他の画像
const images = ['https://github.com/progfly/BreadJudgeGame/blob/main/img/log.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/board.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/siro.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/han_siro.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/konbea.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/maru.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/batu.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/up.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/down.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/buy.png?raw=true'];
//判断表示場所
const judgeArea = document.getElementById('judgeArea');
const updownArea = document.getElementById('updownArea');
//時給表示場所
const displayArea = document.getElementById('displayArea');


//昇給減給結果
let resrut = 0;
//昇給減給などに関するカウント
let niceCount = 0;
let upCount = 0;
let buyCount = 0;
let badCount = 0;
let downCount = 0;
let judgeCount = 0;
//時給
let jikyuu = 0;

//画像正誤判定
let imageJudge = 0;

//二回目以降の終了ボタン無効用
let allStop = 0;

//開始ボタンクリックされた時間
var startGameTime;
//問題表示された時間
var startTime;



// 画像プリロード
window.onload = function () {
  getImages();
}
// 画像プリロード用関数
function getImages() {
  for (i = 0; i < answerImages.length; i++) {
    var img = document.createElement('img');
    img.src = answerImages[i];
  }
  for (i = 0; i < ZeroquizImages.length; i++) {
    var img = document.createElement('img');
    img.src = ZeroquizImages[i];
  }
  for (i = 0; i < OnequizImages.length; i++) {
    var img = document.createElement('img');
    img.src = OnequizImages[i];
  }
  for (i = 0; i < TwoquizImages.length; i++) {
    var img = document.createElement('img');
    img.src = TwoquizImages[i];
  }
  for (i = 0; i < images.length; i++) {
    var img = document.createElement('img');
    img.src = images[i];
  }
}



//タイトル入力
var Name = prompt("働きたいパン屋の名前を入力してください");
if (Name === '') {
  alert('再度読み込み、何か入力してください');
} else if (Name === null) {
  alert('再度読みこんでください');
} else {
  titleArea.innerText = Name + 'パン';
}



//開始ボタンクリック
gameStart.addEventListener("click", () => {

  //開始ボタンクリック時間の記録
  startGameTime = Date.now();

  //給料明細表示場所の初期化
  resrutArea.innerText = '　　　　　'

  //判断表示場所の初期化
  judgeArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/siro.png?raw=true';

  //初期化
  allStop = 0;
  niceCount = 0;
  upCount = 0;
  buyCount = 0;
  badCount = 0;
  downCount = 0;
  judgeCount = 0;

  //時給表示場所の初期化
  displayArea.innerText = '現在の時給1200円';

  start()
})



//終了ボタンクリック
gameStop.addEventListener("click", () => {

  //問題表示場所の初期化
  quizArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/siro.png?raw=true';

  allStop++

  //開始ボタンクリックから終了ボタンクリックまでの時間
  let currentGameTime = Date.now();
  let gameSeconds = (currentGameTime - startGameTime) / 1000;

  //ret[0]=jikyuu,ret[1]=buyCount,ret[2]=judgeCount
  let ret = salary(4);

  let byoukyuu = (ret[0] / 60) / 60;
  let gameSalary = gameSeconds * byoukyuu;
  let buyMony = -(ret[1] * 100);
  let sum = gameSalary + buyMony;

  let judgekaisuu = ret[2];

  //3秒毎に一回はパンの判定を行っているか確認する
  let sixGameSeconds = gameSeconds.toFixed(6);
  let hanntei = sixGameSeconds / 3.000000;

  if (allStop < 2) {
    if (judgekaisuu < hanntei) {
      resrutArea.innerText = '給料明細\n' + '　判断が遅いので、給料0円　買い取り個数は、' + ret[1] + '個\n' + '　' + -buyMony + '円支払ってください。';
    }
    else {
      resrutArea.innerText = '給料明細\n' + '　勤務時間：' + sixGameSeconds + '秒　給料：' + gameSalary.toFixed(6) + '円　買い取り：' + ret[1] + '個\n' + '　収支は、' + sum.toFixed(6) + '円です。';
    }
  }
  else {
    resrutArea.innerText = 'もう一度遊ぶ場合は、開始ボタンをおしてください'
  }
})


//画像ランダム表示
function image() {

  const answerImageNo = Math.floor(Math.random() * answerImages.length)
  answerArea.src = answerImages[answerImageNo];

  if (answerImageNo === 0) {
    const ZeroquizImageNo = Math.floor(Math.random() * ZeroquizImages.length)
    quizArea.src = ZeroquizImages[ZeroquizImageNo];
    if (ZeroquizImageNo < 5) {
      //正解メロンパン時の正解
      return 1;
    }
    else {
      //正解メロンパン時の不正解
      return 2;
    }
  }
  if (answerImageNo === 1) {
    const OnequizImageNo = Math.floor(Math.random() * OnequizImages.length)
    quizArea.src = OnequizImages[OnequizImageNo];
    if (OnequizImageNo < 5) {
      //正解食パン時の正解
      return 1;
    }
    else {
      //正解食パン時の不正解
      return 2;
    }
  }
  if (answerImageNo === 2) {
    const TwoquizImageNo = Math.floor(Math.random() * TwoquizImages.length)
    quizArea.src = TwoquizImages[TwoquizImageNo];
    if (TwoquizImageNo < 5) {
      //正解蒸しパン時の正解
      return 1;
    }
    else {
      //正解蒸しパン時の不正解
      return 2;
    }
  }
}



//問題表示
function start() {

  //updown表示場所の初期化
  updownArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/han_siro.png?raw=true';

  //問題表示時間の記録
  startTime = Date.now();

  //正解と問題の画像ランダム表示
  imageJudge = image();

  quizArea.animate(
    [
      { transform: 'translateX(0)' }, // 開始時の状態（左端）
      { transform: 'translateX(450px)' } // 終了時の状態（左端から450pxの位置）
    ],
    // タイミングに関する設定
    {
      fill: 'forwards', // 再生前後の状態（再生前、終了時の状態を適用）
      duration: 2000, // 再生時間（2000ミリ秒）
    },
  );
}


//キーボード入力
document.onkeydown = judge;
function judge(e) {

  //問題表示されてから回答までの時間
  let currentTime = Date.now();
  let seconds = (currentTime - startTime) / 1000;

  let keyname = e.key;

  if (imageJudge === 1) {
    if (keyname === 'y') {
      judgeCount++;
      judgeArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/maru.png?raw=true';
      if (seconds <= 1) {
        //時給up条件
        salary(1)
      }
      stop()
    }
    if (keyname === 'n') {
      judgeCount++;
      judgeArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/batu.png?raw=true';
      //買い取り条件
      salary(2)
    }
  }
  else {
    if (keyname === 'y') {
      judgeCount++;
      judgeArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/batu.png?raw=true';
      //時給down条件
      salary(3)
    }
    if (keyname === 'n') {
      judgeCount++;
      judgeArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/maru.png?raw=true';
      if (seconds <= 1) {
        //時給up条件
        salary(1)
      }
      stop()
    }
  }
}




function salary(resrut) {
  //時給up条件
  if (resrut === 1) {
    niceCount++
    if (niceCount % 3 === 0) {
      //時給up
      upCount++
      updownArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/up.png?raw=true'
    }
  }
  //買い取り条件
  if (resrut === 2) {
    //買い取り
    buyCount++
    updownArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/buy.png?raw=true'
  }
  //時給down条件
  if (resrut === 3) {
    badCount++
    if (badCount % 3 === 0) {
      //時給down
      downCount++
      updownArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/down.png?raw=true'
    }
  }

  jikyuu = 1200 + (100 * upCount) - (100 * downCount);

  //終了ボタンクリック時
  if (resrut === 4) {
    return [jikyuu, buyCount, judgeCount];
  }

  displayArea.innerText = '現在の時給' + jikyuu + '円';
  stop()
}



//問題と問題の間を0.2秒開ける
  function stop(){
    quizArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/siro.png?raw=true';
   setTimeout(() => {
      start()
    },200);
  }



