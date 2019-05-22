'use strict';

{
//問題集Listの配列
let qList = [];

//問題$questionを定義
function question(j,q,a0,a1,a2,a3,){

  let choices = [a0,a1,a2,a3]  //選択肢の配列

  let qArray = [j,q,choices]  //[ジャンル,問題,選択肢]

  qList.push(qArray)  //qListnに追加

 }

new question(
   "地理",
   "日本一高い山は？",
   "富士山",
   "高尾山",
   "阿蘇山",
   "エベレスト",
 );
new question(
   "理科",
   "次のうちトゲがない昆虫は？",
   "トゲナシトゲトゲ",
   "トゲトゲ",
   "トゲアリトゲナシトゲトゲ",
   "どれもトゲがある",
 );
new question(
   "国語",
   "次の書き出しで始まる文学作品は？<br>「私はその人を常に先生と呼んでいた・・・」",
   "こころ",
   "人間失格",
   "吾輩は猫である",
   "坊っちゃん",
 );
new question(
   "数学",
   "次の数列の名称は何か？<br>1　1　2　3　5　8・・・",
   "フィボナッチ数列",
   "階差数列",
   "等差数列",
   "等比数列",
 );
new question(
   "日本史",
   "唯一くじ引きによって選ばれた将軍は誰か？",
   "足利義教",
   "足利義満",
   "足利尊氏",
   "足利義政",
 );
new question(
   "歴史",
   "この中で日本の紙幣の肖像画に採用されたことがあるのは誰？",
   "高橋是清",
   "織田信長",
   "西園寺公望",
   "桂太郎",
 );

//選択肢のシャッフル関数を定義
function shuffle(arr){
  for (let i = arr.length - 1; i > 0; i--){
   const j = Math.floor(Math.random()*(i + 1));
   [arr[j],arr[i]] = [arr[i],arr[j]];
  }
  return arr;
}

//正誤判定
function answerCheck(answer,arr){
  if (answer.textContent === arr[0]){
    return 'OK';
  }
  else {
    return 'NG';
  }

}

console.log(qList)

  for (let i = 0; i < qList.length; i++){
    //divやul,liを生成
    let qaBox = document.createElement('div');
    let questionBox = document.createElement('div');
    let qText = document.createElement('div')
    let answerBox = document.createElement('ul');
    let result = document.createElement('div');

    //生成したdivなどにclassを追加
    qaBox.classList.add('qa-box','my-3','py-2');
    questionBox.classList.add('question','mx-auto','my-3');
    qText.classList.add('question-text','my-auto');
    answerBox.classList.add('answer-box','text-center','close');
    result.classList.add('result','hidden');

    //ジャンルを入力
    qText.textContent = qList[i][0];

    //選択肢をシャッフルする
    //元の選択肢を定数化
      const choices = qList[i][2]
    //スプレッド演算子を使用し、元の配列順はそのまま
      const shuffledChoices = shuffle([...qList[i][2]]);


      // 4つの選択肢を表示
    for (let n = 0; n < shuffledChoices.length; n++){

      let answer = document.createElement('li');
      answer.textContent = shuffledChoices[n];
      answer.classList.add('answer','mx-auto','py-1');
      answerBox.appendChild(answer);

      // クリックイベントを追加(問題オープン)
      questionBox.addEventListener('click',()=> {
        // 問題文・選択肢を表示
        qText.innerHTML = qList[i][1];
        answerBox.classList.remove('close')
      },false);
      // クリックイベントを追加(正誤判定)
      answer.addEventListener('click',()=> {
        // 処理内容
        result.classList.remove('hidden');
        if (answerCheck(answer,choices) == 'OK'){
          result.textContent = '○';
          result.classList.add('OK');
          result.classList.remove('NG');
        }else{
          result.textContent = '✖';
          result.classList.add('NG');
          result.classList.add('OK');
        }
      },false);

      // 選択肢の順番で色のclassを追加
      if(n == 0){
        answer.classList.add('blue');
      }else if (n == 1) {
        answer.classList.add('red');
      }else if (n == 2) {
        answer.classList.add('green');
      }else{
        answer.classList.add('yellow');
      }

    }

    // HTMLの表示
    qaBox.appendChild(questionBox);
    qaBox.appendChild(answerBox);
    questionBox.appendChild(qText);
    questionBox.appendChild(result);
    document.getElementById('container').appendChild(qaBox);

  }
}
