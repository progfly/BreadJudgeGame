//タイトル入力場所
const titleArea = document.getElementById('titleArea');
//見本画像表示場所(0：白紙、1:メロンパン,2:食パン,3:蒸しパン)
const answerImages = [document.getElementById('answerArea_img_00'), document.getElementById('answerArea_img_01'), document.getElementById('answerArea_img_02'), document.getElementById('answerArea_img_03')];
answerImages[1].style.display = "none";
answerImages[2].style.display = "none";
answerImages[3].style.display = "none";
//問題画像表示場所(img_00:白紙)
const quizArea = document.getElementById("quizArea");
const quizAreaImage = document.getElementById('quizArea_img_00');
//メロンパン画像(0:正解,1~5:不正解)
const melonpanImages = [document.getElementById('melonpan_quizArea_img_00'), document.getElementById('melonpan_quizArea_img_01'), document.getElementById('melonpan_quizArea_img_02'), document.getElementById('melonpan_quizArea_img_03'), document.getElementById('melonpan_quizArea_img_04'), document.getElementById('melonpan_quizArea_img_05')];
melonpanImages[0].style.display = "none";
melonpanImages[1].style.display = "none";
melonpanImages[2].style.display = "none";
melonpanImages[3].style.display = "none";
melonpanImages[4].style.display = "none";
melonpanImages[5].style.display = "none";
//食パン画像(0:正解,1~5:不正解)
const syokupanImages = [document.getElementById('syokupan_quizArea_img_00'), document.getElementById('syokupan_quizArea_img_01'), document.getElementById('syokupan_quizArea_img_02'), document.getElementById('syokupan_quizArea_img_03'), document.getElementById('syokupan_quizArea_img_04'), document.getElementById('syokupan_quizArea_img_05')];
syokupanImages[0].style.display = "none";
syokupanImages[1].style.display = "none";
syokupanImages[2].style.display = "none";
syokupanImages[3].style.display = "none";
syokupanImages[4].style.display = "none";
syokupanImages[5].style.display = "none";
//蒸しパン画像(0:正解,1~5:不正解)
const mushipanImages = [document.getElementById('mushipan_quizArea_img_00'), document.getElementById('mushipan_quizArea_img_01'), document.getElementById('mushipan_quizArea_img_02'), document.getElementById('mushipan_quizArea_img_03'), document.getElementById('mushipan_quizArea_img_04'), document.getElementById('mushipan_quizArea_img_05')];
mushipanImages[0].style.display = "none";
mushipanImages[1].style.display = "none";
mushipanImages[2].style.display = "none";
mushipanImages[3].style.display = "none";
mushipanImages[4].style.display = "none";
mushipanImages[5].style.display = "none";
//判断表示(0:空白,1:〇,2:×)
const judgeImages = [document.getElementById('judgeArea_resultimg_00'), document.getElementById('judgeArea_img_01'), document.getElementById('judgeArea_img_02')];
judgeImages[1].style.display = "none";
judgeImages[2].style.display = "none";
//時給updown表示(0:空白,1:up,2:down,3:buy)
const updownImages = [document.getElementById('updownArea_img_00'), document.getElementById('updownArea_img_01'), document.getElementById('updownArea_img_02'), document.getElementById('updownArea_img_03')];
updownImages[1].style.display = "none";
updownImages[2].style.display = "none";
updownImages[3].style.display = "none";
//時給表示場所
const displayArea = document.getElementById('displayArea');
//ボタンふたつ
const gameStart = document.getElementById("gameStart");
const gameStop = document.getElementById("gameStop");
//給料明細表示場所
const resultArea = document.getElementById("resultArea");
//全ての画像
const images = ['https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_melonpan.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/food_melonpan.png?raw=true',  'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad1_pan_melonpan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad2_pan_melonpan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad3_pan_melonpan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bread_syokupan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bread_syokupan_usui.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_toast_kongari.png?raw=true',  'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad1_bread_syokupan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad2_bread_syokupan.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_mushipan_yellow.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_mushipan_white.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad1_pan_mushipan_yellow.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad2_pan_mushipan_yellow.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad3_pan_mushipan_yellow.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/melonpan_board.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/syokupan_board.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/mushi_board.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/log.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/board.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/siro.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/han_siro.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/konbea.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/maru.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/batu.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/up.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/down.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/buy.png?raw=true'];

//昇給減給結果
let result= 0;
//昇給減給などに関するカウント
let niceCount = 0;
let upCount = 0;
let buyCount = 0;
let badCount = 0;
let downCount = 0;
let judgeCount = 0;
//時給
let hourSalary = 0;
//画像正誤判定
let imageJudge = 0;
//二回目以降の終了ボタン無効用
let allStop = 0;
//開始ボタンクリックされた時間
let startGameTime;
//問題表示された時間
let startTime;



// 画像プリロード
window.onload = function () {
  getImages();
}
// 画像プリロード用関数
function getImages() {
  for (i = 0; i < images.length; i++) {
    let img = document.createElement('img');
    img.src = images[i];
  }
}


//タイトル入力
let Name = prompt("働きたいパン屋の名前を入力してください");
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
  answerImages[1].style.display = "none";
  answerImages[2].style.display = "none";
  answerImages[3].style.display = "none";
  //判断表示場所の初期化
  judgeImages[1].style.display = "none";
  judgeImages[2].style.display = "none";
  //updown表示場所の初期化
  updownImages[1].style.display = "none";
  updownImages[2].style.display = "none";
  updownImages[3].style.display = "none";
  //給料明細表示場所の初期化
  resultArea.innerText = '　　　　　'
  //時給表示場所の初期化
  displayArea.innerText = '現在の時給1200円';
  //カウントの初期化
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

  //問題表示場所の初期化
  for (i = 0; i < 6; i++) {
    melonpanImages[i].style.display = "none";
    syokupanImages[i].style.display = "none";
    mushipanImages[i].style.display = "none";
  }

  //開始ボタンクリックから終了ボタンクリックまでの時間
  let currentGameTime = Date.now();
  let gameSeconds = (currentGameTime - startGameTime) / 1000;

  //終了ボタン押された回数
  allStop++

  //ret[0]=hourSalary,ret[1]=buyCount,ret[2]=judgeCountを格納
  let ret = salary(4);

  //ゲーム時間での給料計算
  let secondSalary = (ret[0] / 60) / 60;
  let gameSalary = gameSeconds * secondSalary;
  //買い取り額の計算
  let buyMony = -(ret[1] * 100);
  //収支の計算
  let sum = gameSalary + buyMony;

  //3秒毎に一回はパンの判定を行っているか確認する
  let breadJudge = ret[2];
  let sixGameSeconds = gameSeconds.toFixed(6);
  let breadJudgeTime = sixGameSeconds / 3.000000;

  //終了ボタン1回目まで
  if (allStop < 2) {
    if (breadJudge < breadJudgeTime) {
      resultArea.innerText = '給料明細\n' + '　判断が遅いので、給料0円　買い取り個数は、' + ret[1] + '個\n' + '　' + -buyMony + '円支払ってください。';
    }
    else {
      resultArea.innerText = '給料明細\n' + '　勤務時間：' + sixGameSeconds + '秒　給料：' + gameSalary.toFixed(6) + '円　買い取り：' + ret[1] + '個\n' + '　収支は、' + sum.toFixed(6) + '円です。';
    }
  }
  //終了ボタン2回目以降
  else {
    resultArea.innerText = 'もう一度遊ぶ場合は、開始ボタンをおしてください'
  }
})


//画像ランダム表示
function image() {

  //見本表示場所の初期化
  answerImages[1].style.display = "none";
  answerImages[2].style.display = "none";
  answerImages[3].style.display = "none";
  //問題表示場所の初期化
  for (i = 0; i < 6; i++) {
    melonpanImages[i].style.display = "none";
    syokupanImages[i].style.display = "none";
    mushipanImages[i].style.display = "none";
  }

  //見本の選択(1:メロンパン2:食パン3:蒸しパン)
  let min = 1;
  let max = 3;
  let answerImageNo = Math.floor(Math.random() * (max + 1 - min)) + min;
  //アタリハズレの選択(0:アタリ画像,1:ハズレ画像)
  let minAtari = 0;
  let maxAtari = 1;
  let quizNo = Math.floor(Math.random() * (maxAtari + 1 - minAtari)) + minAtari;
  //ハズレ画像の選択(ハズレ画像5種類)
  let minImg = 1;
  let maxImg = 5;
  let quizImagNo = Math.floor(Math.random() * (maxImg + 1 - minImg)) + minImg;

  //見本の表示
  answerImages[answerImageNo].style.display = "block";

  //見本メロンパンの場合
  if (answerImageNo === 1) {
    if (quizNo === 0) {
      //見本メロンパン時の正解
      melonpanImages[0].style.display = "block";
      return 1;
    }
    if (quizNo === 1) {
      //見本メロンパン時の不正解
      melonpanImages[quizImagNo].style.display = "block";
      return 2;
    }
  }
  //見本食パンの場合
  if (answerImageNo === 2) {
    if (quizNo === 0) {
      //見本食パン時の正解
      syokupanImages[0].style.display = "block";
      return 1;
    }
    if (quizNo === 1) {
      //見本食パン時の不正解
      syokupanImages[quizImagNo].style.display = "block";
      return 2;
    }
  }
  //見本蒸しパンの場合
  if (answerImageNo === 3) {
    if (quizNo === 0) {
      //見本蒸しパン時の正解
      mushipanImages[0].style.display = "block";
      return 1;
    }
    if (quizNo === 1) {
      //見本蒸しパン時の不正解
      mushipanImages[quizImagNo].style.display = "block";
      return 2;
    }
  }
}


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
  judgeImages[1].style.display = "none";
  judgeImages[2].style.display = "none";
  updownImages[1].style.display = "none";
  updownImages[2].style.display = "none";
  updownImages[3].style.display = "none";

  //問題表示されてから回答までの時間
  let currentTime = Date.now();
  let seconds = (currentTime - startTime) / 1000;

  let keyname = e.key;

  //終了ボタン2回目以降
  if(allStop>0){
    return;
  }
  
  if (imageJudge === 1) {
    if (keyname === 'y') {
      judgeCount++;
      judgeImages[1].style.display = "block";
      if (seconds <= 1) {
        //時給up条件(1秒以内に正しい判断)
        salary(1)
      }
    }
    if (keyname === 'n') {
      judgeCount++;
      judgeImages[2].style.display = "block";
      //買い取り条件(見本通りなのにn)
      salary(2)
    }
  }
  else {
    if (keyname === 'y') {
      judgeCount++;
      judgeImages[2].style.display = "block";
      //時給down条件(見本と違うのにy)
      salary(3)
    }
    if (keyname === 'n') {
      judgeCount++;
      judgeImages[1].style.display = "block";
      if (seconds <= 1) {
        //時給up条件(1秒以内に正しい判断)
        salary(1)
      }
    }
  }
  start()
}


function salary(result) {

  //時給up条件
  if (result === 1) {
    niceCount++
    if (niceCount % 3 === 0) {
      //時給up
      upCount++
      updownImages[1].style.display = "block";
    }
  }
  //買い取り条件
  if (result === 2) {
    //買い取り
    buyCount++
    updownImages[3].style.display = "block";
  }
  //時給down条件
  if (result === 3) {
    badCount++
    if (badCount % 3 === 0) {
      //時給down
      downCount++
      updownImages[2].style.display = "block";
    }
  }

  //時給計算
  hourSalary = 1200 + (100 * upCount) - (100 * downCount);

  //終了ボタンクリック時
  if (result === 4) {
    return [hourSalary, buyCount, judgeCount];
  }

  displayArea.innerText = '現在の時給' + hourSalary + '円';
  start()
}

