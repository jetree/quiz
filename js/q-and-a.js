function question(q,a1,a2,a3,a4){
  this.q =  q;
  this.a1 = a1;
  this.a2 = a2;
  this.a3 = a3;
  this.a4 = a4;
};
let qList = [];
  qList[0] = new question(
    "問題",
    "回答1",
    "回答2",
    "回答3",
    "回答4",
  );
  qList[1] = new question(
    "問題2",
    "回答12",
    "回答23",
    "回答34",
    "回答45",
  );
  qList.push(new question(
    "問題2",
    "回答12",
    "回答23",
    "回答34",
    "回答45",
  ));

console.log(qList)

let array =[];
  array.push(1);


  console.log(array);


// 問題を
// 問題を問題Listの配列に入れる
// 問題Listの配列からdivを生成する（foreach）
