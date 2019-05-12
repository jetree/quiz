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

//divを生成
let qa = document.createElement('div');
//生成したdivにclassを追加
  qa.classList.add('q-and-a','my-3','py-2');
let qTextOuter = document.createElement('div');
  qTextOuter.classlist.add("text-center ques mx-auto my-2")
let qTextinner = document.createElement('div');
  qTextinner.classList.add("my-auto")

//このdivをHTMLに追加する
document.getElementById('container').appendChild(qa);
// 問題を
// 問題を問題Listの配列に入れる
// 問題Listの配列からdivを生成する（foreach）
