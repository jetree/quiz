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

//
// let qList = [];
//
//   qList.push(new question(
//     "日本一高い山は？",
//     "富士山",
//     "高尾山",
//     "阿蘇山",
//     "エベレスト",
//   ));
//
// console.log(qList)

for (let i = 0; i < qList.length; i++){

//divやul,liを生成
let qaBox = document.createElement('div');
let questionBox = document.createElement('div');
let qText = document.createElement('div')
let answerBox = document.createElement('ul');
let answer = document.createElement('li');

//生成したdivなどにclassを追加
qaBox.classList.add('qa-box','my-3','py-2');
questionBox.classList.add('question','mx-auto','my-2');
qText.classList.add('question-text','my-auto');
answerBox.classList.add('answer-box','text-center')
answer.classList.add('answer','mx-auto');

//問題文や選択肢を入力
qText.textContent = qList[i][0];

for (let n = 0; n < qList[i].length; n++){
 answer.textContent = qList[i][1][n];
}


}
//let qaBox = document.createElement('div');
//生成したdivにclassを追加
//  qaBox.classList.add('qa-box','my-3','py-2');
//divを生成
//let questionBox = document.createElement('div');
//生成したdivにclassを追加
//questionBox.classList.add('question','mx-auto','my-2');
  //divを生成
//let qText = document.createElement('div');
//生成したdivにclassを追加
//qText.classList.add('question-text','my-auto');
//生成したdivに問題文のテキストを追加
//qText.innerHTML = '問題文';
//divを生成
//let answerBox = document.createElement('div');
//  answerBox.classList.add('answer-box','text-center')
//let answer = document.createElement('div');
  answer.classList.add('answer','mx-auto');
  answer.innerHTML = '選択肢';

//このdivをHTMLに追加する
qaBox.appendChild(questionBox);
qaBox.appendChild(answerBox);
answerBox.appendChild(answer);
questionBox.appendChild(qText);
document.getElementById('container').appendChild(qaBox);
// 問題を
// 問題を問題Listの配列に入れる
// 問題Listの配列からdivを生成する（foreach）
}


















