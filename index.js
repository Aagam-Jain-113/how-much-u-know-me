var readlineSync = require('readline-sync');

var username = readlineSync.question("Your Good Name Please: ");
console.log('\nWelcome,' , username, "to Aagam's quiz! Let's Start !!! \n");

var score = 0;
function quiz(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log('You are Right!!');
    score = score + 1;
  }else{
    console.log('You are Wrong!!');
    score = score - 1;
  }

  if(score < 0){
    score = 0;
  }
  console.log('Your Score is: ', score);
  console.log('-----------------------');
}

var questions = [
  {
    question: 'Where does Aagam live? ',
    answer: 'Kakinada'
  },
  {
    question: "What's Aagam's Age? ",
    answer: '19'
  },
  {
    question: "What's Aagam's Favourite Color? ",
    answer: 'Blue'
  },
  {
    question: "What's Aagam's Favourite Food? ",
    answer: 'Pizza'
  }
];

for(var i = 0;i<questions.length;i++){
  quiz(questions[i].question,questions[i].answer);
}

console.log('Your Final Score is: ', score);