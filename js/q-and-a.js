'use strict';

{
//問題集Listの配列
let qList = [];

//問題$questionを定義
function question(q,a0,a1,a2,a3,){

  let choices = [a0,a1,a2,a3]  //選択肢の配列

  let qArray = [q,choices]  //[問題,選択肢]

  qList.push(qArray)  //qListnに追加

 }

new question(
   "日本一高い山は？",
   "富士山",
   "高尾山",
   "阿蘇山",
   "エベレスト",
 );
new question(
   "1+1は？",
   "2",
   "3",
   "4",
   "5",
 );

//選択肢のシャッフル関数を定義
function shuffle(arr){
  for (let i = arr.length - 1; i > 0; i--){
   const j = Math.floor(Math.random()*(i + 1));
   [arr[j],arr[i]] = [arr[i],arr[j]];
  }
  return arr;
}

console.log(qList)

  for (let i = 0; i < qList.length; i++){
    //divやul,liを生成
    let qaBox = document.createElement('div');
    let questionBox = document.createElement('div');
    let qText = document.createElement('div')
    let answerBox = document.createElement('ul');


    //生成したdivなどにclassを追加
    qaBox.classList.add('qa-box','my-3','py-2');
    questionBox.classList.add('question','mx-auto','my-2');
    qText.classList.add('question-text','my-auto');
    answerBox.classList.add('answer-box','text-center');

    //問題文や選択肢を入力
    qText.textContent = qList[i][0];
    console.log(qList[i][1]);


    //選択肢をシャッフルする
    //スプレッド演算子を使用し、元の配列順はそのまま
      let shuffledChoices = shuffle([...qList[i][1]]);
      console.log(shuffledChoices);

    // 4つの選択肢を表示
    for (let n = 0; n < shuffledChoices.length; n++){

      let answer = document.createElement('li');
      answer.textContent = shuffledChoices[n];
      answer.classList.add('answer','mx-auto');
      answerBox.appendChild(answer);

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
    document.getElementById('container').appendChild(qaBox);

  }
}
