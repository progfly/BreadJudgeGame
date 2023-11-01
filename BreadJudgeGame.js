//タイトル入力場所
const titleArea = document.getElementById('titleArea');
//ボタンふたつ
const gameStart = document.getElementById("gameStart");
const gameStop = document.getElementById("gameStop");
//給料明細表示場所
const resrutArea = document.getElementById("resrutArea");
//画像表示場所
const answerArea_img_01 = document.getElementById('answerArea_img_01');
const answerArea_img_02 = document.getElementById('answerArea_img_02');
const answerArea_img_03 = document.getElementById('answerArea_img_03');
const answerArea_img_04 = document.getElementById('answerArea_img_04');
//answerArea_img_01.style.display = "none";
answerArea_img_02.style.display = "none";
answerArea_img_03.style.display = "none";
answerArea_img_04.style.display = "none";
const quizArea = document.getElementById('quizArea');
//見本画像
const answerImages = ['./img/melonpan_board.png', './img/syokupan_board.png', './img/mushi_board.png'];
//No0～4正しい画像　5~9間違え画像
const ZeroquizImages = ['./img/pan_melonpan.png', './img/pan_melonpan.png', './img/pan_melonpan.png', './img/pan_melonpan.png', './img/pan_melonpan.png', './img/food_melonpan.png', './img/bread_syokupan.png', './img/bad1_pan_melonpan.png', './img/bad2_pan_melonpan.png', './img/bad3_pan_melonpan.png'];
const OnequizImages = ['./img/bread_syokupan.png', './img/bread_syokupan.png', './img/bread_syokupan.png', './img/bread_syokupan.png', './img/bread_syokupan.png', './img/bread_syokupan_usui.png', './img/pan_toast_kongari.png', './img/pan_mushipan_yellow.png', './img/bad1_bread_syokupan.png', './img/bad2_bread_syokupan.png'];
const TwoquizImages = ['./img/pan_mushipan_yellow.png', './img/pan_mushipan_yellow.png', './img/pan_mushipan_yellow.png', './img/pan_mushipan_yellow.png', './img/pan_mushipan_yellow.png', './img/pan_mushipan_white.png', './img/pan_melonpan.png', './img/bad1_pan_mushipan_yellow.png', './img/bad2_pan_mushipan_yellow.png', './img/bad3_pan_mushipan_yellow.png'];
//他の画像
const images = ['./img/log.png','./img/board.png','./img/siro.png','./img/han_siro.png','./img/konbea.png','./img/maru.png','./img/batu.png','./img/up.png','./img/down.png','./img/buy.png'];
//判断表示場所
const judgeArea_img_01 = document.getElementById('judgeArea_img_01');
const judgeArea_img_02 = document.getElementById('judgeArea_img_02');
const judgeArea_img_03 = document.getElementById('judgeArea_img_03');
judgeArea_img_02.style.display = "none";
judgeArea_img_03.style.display = "none";
const updownArea_img_01 = document.getElementById('updownArea_img_01');
const updownArea_img_02 = document.getElementById('updownArea_img_02');
const updownArea_img_03 = document.getElementById('updownArea_img_03');
const updownArea_img_04 = document.getElementById('updownArea_img_04');
updownArea_img_02.style.display = "none";
updownArea_img_03.style.display = "none";
updownArea_img_04.style.display = "none";
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

  //見本表示場所の初期化
  answerArea_img_02.style.display = "none";
  answerArea_img_03.style.display = "none";
  answerArea_img_04.style.display = "none";
  //判断結果表示場所の初期化
  judgeArea_img_02.style.display = "none";
  judgeArea_img_03.style.display = "none";
  //給料明細表示場所の初期化
  resrutArea.innerText = '　　　　　'
  //時給表示場所の初期化
  displayArea.innerText = '現在の時給1200円';
  //初期化
  allStop = 0;
  niceCount = 0;
  upCount = 0;
  buyCount = 0;
  badCount = 0;
  downCount = 0;
  judgeCount = 0;

  start()
})



//終了ボタンクリック
gameStop.addEventListener("click", () => {

  //開始ボタンクリックから終了ボタンクリックまでの時間
  let currentGameTime = Date.now();
  let gameSeconds = (currentGameTime - startGameTime) / 1000;

  //問題表示場所の初期化
  quizArea.src = './img/siro.png';

  //終了ボタン押された回数
  allStop++

  //ret[0]=jikyuu,ret[1]=buyCount,ret[2]=judgeCountを格納
  let ret = salary(4);

  let byoukyuu = (ret[0] / 60) / 60;
  let gameSalary = gameSeconds * byoukyuu;
  let buyMony = -(ret[1] * 100);
  let sum = gameSalary + buyMony;

  //3秒毎に一回はパンの判定を行っているか確認する
  let judgekaisuu = ret[2];
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

  //見本表示場所の初期化
  answerArea_img_02.style.display = "none";
  answerArea_img_03.style.display = "none";
  answerArea_img_04.style.display = "none";

  //見本の選択
  const answerImageNo = Math.floor(Math.random() * answerImages.length)

  //見本メロンパン
  if (answerImageNo === 0) {
    answerArea_img_02.style.display = "block";
    const ZeroquizImageNo = Math.floor(Math.random() * ZeroquizImages.length)
    quizArea.src = ZeroquizImages[ZeroquizImageNo];
    if (ZeroquizImageNo < 5) {
      //見本メロンパン時の正解
      return 1;
    }
    else {
      //見本メロンパン時の不正解
      return 2;
    }
  }
  //見本食パン
  if (answerImageNo === 1) {
    answerArea_img_03.style.display = "block";
    const OnequizImageNo = Math.floor(Math.random() * OnequizImages.length)
    quizArea.src = OnequizImages[OnequizImageNo];
    if (OnequizImageNo < 5) {
      //見本食パン時の正解
      return 1;
    }
    else {
      //見本食パン時の不正解
      return 2;
    }
  }
  //見本蒸しパン
  if (answerImageNo === 2) {
    answerArea_img_04.style.display = "block";
    const TwoquizImageNo = Math.floor(Math.random() * TwoquizImages.length)
    quizArea.src = TwoquizImages[TwoquizImageNo];
    if (TwoquizImageNo < 5) {
      //見本蒸しパン時の正解
      return 1;
    }
    else {
      //見本蒸しパン時の不正解
      return 2;
    }
  }
}



//問題表示
function start() {

  //問題表示時間の記録
  startTime = Date.now();

  //見本と問題の画像ランダム表示
  imageJudge = image();

  //問題表示場所のアニメーション
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

  //判断結果表示の初期化
  judgeArea_img_02.style.display = "none";
  judgeArea_img_03.style.display = "none";

  //問題表示されてから回答までの時間
  let currentTime = Date.now();
  let seconds = (currentTime - startTime) / 1000;

  let keyname = e.key;

  if (imageJudge === 1) {
    if (keyname === 'y') {
      judgeCount++;
      judgeArea_img_02.style.display = "block";
      if (seconds <= 1) {
        //時給up条件(1秒以内に正しい判断)
        salary(1)
      }
      // stop()
    }
    if (keyname === 'n') {
      judgeCount++;
      judgeArea_img_03.style.display = "block";
      //買い取り条件(見本通りなのにn)
      salary(2)
    }
  }
  else {
    if (keyname === 'y') {
      judgeCount++;
      judgeArea_img_03.style.display = "block";
      //時給down条件(見本と違うのにy)
      salary(3)
    }
    if (keyname === 'n') {
      judgeCount++;
      judgeArea_img_02.style.display = "block";
      if (seconds <= 1) {
        //時給up条件(1秒以内に正しい判断)
        salary(1)
      }
      //stop()
    }
  }
  start()
}




function salary(resrut) {

  //updown表示の初期化
  updownArea_img_02.style.display = "none";
  updownArea_img_03.style.display = "none";
  updownArea_img_04.style.display = "none";

  //時給up条件
  if (resrut === 1) {
    updownArea_img_01.style.display = "block";
    niceCount++
    if (niceCount % 3 === 0) {
      //時給up
      upCount++
      updownArea_img_02.style.display = "block";
    }
  }
  //買い取り条件
  if (resrut === 2) {
    //買い取り
    buyCount++
    updownArea_img_04.style.display = "block";
  }
  //時給down条件
  if (resrut === 3) {
    updownArea_img_01.style.display = "block";
    badCount++
    if (badCount % 3 === 0) {
      //時給down
      downCount++
      updownArea_img_03.style.display = "block";
    }
  }

  //時給計算
  jikyuu = 1200 + (100 * upCount) - (100 * downCount);

  //終了ボタンクリック時
  if (resrut === 4) {
    return [jikyuu, buyCount, judgeCount];
  }

  displayArea.innerText = '現在の時給' + jikyuu + '円';
  start()
}


/*
//問題と問題の間を0.2秒開ける
function stop(){
  quizArea.src = './img/siro.png';

    start()

}
*/

/*

//問題と問題の間を0.2秒開ける
  function stop(){
    quizArea.src = './img/siro.png';
   setTimeout(() => {
      start()
    },200);
  }

*/

