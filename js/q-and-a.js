'use strict';

// //問題を定義
// function question(q,a1,a2,a3,a4){
//   this.q =  q;  //問題文
//   this.a1 = a1;  //正答
//   this.a2 = a2;  //誤答1
//   this.a3 = a3;  //誤答2
//   this.a4 = a4;  //誤答3
// };
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

// function divCreate(divname){
//   divname = document.createElement('div');
// }
// divCreate('qaBox');
// divCreate('questionBox');
// divCreate('qText');
// divCreate('answerBoxext');
// divCreate('answer');

//divを生成
let qaBox = document.createElement('div');
//生成したdivにclassを追加
  qaBox.classList.add('qa-box','my-3','py-2');
//divを生成
let questionBox = document.createElement('div');
//生成したdivにclassを追加
  questionBox.classList.add('question','mx-auto','my-2');
  //divを生成
let qText = document.createElement('div');
//生成したdivにclassを追加
  qText.classList.add('question-text','my-auto');
//生成したdivに問題文のテキストを追加
  qText.innerHTML = '問題文';
//divを生成
let answerBox = document.createElement('div');
  answerBox.classList.add('answer-box','text-center')
let answer = document.createElement('div');
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
