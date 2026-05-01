const questions = [
  {
    category: "Trump", 
    question: "WHAT IS TRUMP DO?", 
    choices: ["SPANKING BIGYAHOOO", "YAOI WITH BIDEN", "CALLING MALENIA A N WORD"],
    answer: "SPANKING BIGYAHOOO"
  },
  {
    category: "COOCKING", 
    question: "CAN I PUT CUCUMBER ON MY BUM?", 
    choices: ["YES", "NO", "IDK IF YOU NASTY"],
    answer: "IDK IF YOU NASTY"
  },
  {
    category: "EDUCATION", 
    question: "DOES EIPSTEIN KILL HIMSELF?", 
    choices: ["YES", "NO", "I FUCK LITTLE KIDS"],
    answer: "I FUCK LITTLE KIDS"
  },
  {
    category: "RAPPER", 
    question: "DOES KANYE WEST HATE JEWS?", 
    choices: ["YES", "NO", "HE MADE GRADUATION..."],
    answer: "HE MADE GRADUATION..."
  },
  {
    category: "BALOON DOR", 
    question: "WHO'S GONNA WIN BALOON DOR?", 
    choices: ["SAKA", "MICHALE JACKSON", "LEBRON JAMES"],
    answer: "SAKA"
  }
];

let randomQuestion;

// console.log(questions.length)
// console.log(Math.floor(Math.random() * (questions.length - 0 + 1)+0));

const getRandomQuestion = questionsArr =>{
  let randomNumber = Math.floor(Math.random() * ((questionsArr.length-1) - 0 + 1)) + 0;
  randomQuestion = randomNumber;
  return questions[randomNumber].question;
}

console.log(getRandomQuestion(questions));
// console.log(randomQuestion);

let computerChoice;

const getRandomComputerChoice = choicesArr => {
  let randomChoices = Math.floor(Math.random()*((questions[choicesArr].choices.length-1) - 0 + 1) + 0);
  computerChoice = randomChoices;
  return questions[randomQuestion].choices[randomChoices];
}

console.log(getRandomComputerChoice(randomQuestion));
// console.log(computerChoice)

const getResults = (question, choice) =>{
  if(questions[question].answer == questions[question].choices[choice]){
    return "The computer's choice is correct!"
  }
  else{
    return `The computer's choice is wrong. The correct answer is: ${questions[question].answer}`;
  }
}

console.log(getResults(randomQuestion,computerChoice));
// ??