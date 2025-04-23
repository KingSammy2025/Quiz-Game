// Quiz Game

let currentQuestion = 0;
let score = 0;
let wrong = 0;

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const scoreText = document.getElementById("score-text");

// Quiz Questions
// Store your quiz questions, multiple choice options, and correct answer in an associative array
// Step 1 = Create the different numbers(1-10), after that, create the different questions(question 1 - 10), then create the different options that the User has to select from (A-C)
// Step 2 = Verify the selected answer to see if it is correct.
// Step 3 = Move on to the next question repeating the steps.

let quiz = [
  {
    question: "What is 2 + 2 ?",
    questionOptions: [4, 0, 10],
    answerIndex: 4,
  },
  {
    question: "What is the Capital of Canada?",
    questionOptions: ["Toronto", "Ottawa", "Saskatchewan"],
    answerIndex: "Ottawa",
  },
  {
    question: "In What year did World War II end?",
    questionOptions: [1945, 1960, 1933],
    answerIndex: 1945,
  },
  {
    question: "What is 7 X 8? ",
    questionOptions: [56, 60, 64],
    answerIndex: 56,
  },
  {
    question: "Who is the Current President of the United States? ",
    questionOptions: ["Obama", "The Citizens", "Donald-Trump"],
    answerIndex: "Donald-Trump",
  },
  {
    question: "What is the Largest Continent in the World? ",
    questionOptions: ["Antartica", "Asia", "NorthAmerica"],
    answerIndex: "Asia",
  },
  {
    question: "What is the hottest Planet in the Solar System?",
    questionOptions: ["Pluto", "Mercury", "Venus"],
    answerIndex: "Venus",
  },
  {
    question: "If i was born in 2004, how old will I be in 2040?",
    questionOptions: [40, 35, 36],
    answerIndex: 36,
  },
  {
    question: "How many planets do we have in the Solar System?",
    questionOptions: [7, 8, 10],
    answerIndex: 8,
  },
  {
    question: "When did Canada gain Independence?",
    questionOptions: [1982, 1970, 2000],
    answerIndex: 1982,
  },
];

// ------

// ------

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  currentQuestion = 0;
  score = 0;
  wrong = [];

  showQuestion();
}

// Displays the appropriate question onscreen. You may add a parameter if you like.
function showQuestion() {
  questionText.innerHTML = quiz[currentQuestion].question;
  answerButtons.innerHTML =
    `<form id="quiz-form">
  <label id="quiz1 1"><input type="radio" name="answer" value=` +
    quiz[currentQuestion].questionOptions[0] +
    `></label><br>
  <label id="quiz1 2"><input type="radio" name="answer" value=` +
    quiz[currentQuestion].questionOptions[1] +
    `></label><br>
  <label id="quiz1 3"><input type="radio" name="answer" value=` +
    quiz[currentQuestion].questionOptions[2] +
    `></label><br>
  
  <button type="button" id="submit-btn">Submit</button>
</form>`;

  // add event listener
  let submitBtn = document
    .getElementById("submit-btn")
    .addEventListener("click", checkAnswer);

  document.getElementById("quiz1 1").innerHTML +=
    quiz[currentQuestion].questionOptions[0];
  document.getElementById("quiz1 2").innerHTML +=
    quiz[currentQuestion].questionOptions[1];
  document.getElementById("quiz1 3").innerHTML +=
    quiz[currentQuestion].questionOptions[2];
}

// Checks if the answer is correct. This answer should be read from the site and passed as a parameter.
// You may add additional parameters, as needed.
function checkAnswer() {
  let radios = document.getElementsByName("answer");
  let userGuess;

  for (let radio of radios) {
    if (radio.checked) {
      userGuess = radio.value;
      break;
    }
  }

  if (userGuess == quiz[currentQuestion].answerIndex) {
    currentQuestion++;
    score++;
  } else if (userGuess != quiz[currentQuestion].answerIndex) {
    currentQuestion++;
    wrong.push(quiz[currentQuestion]);
  }
  showQuestion();

  if (currentQuestion == 4) {
    showResults();
    console.log(quiz);
    console.log(wrong);
  }
}

// Displays results of the quiz:  The more detailed results, the better! Users should see feedback from
// each question.
function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  scoreText.innerHTML = `Your score is ${score}/ 9`;
  for (let key in quiz) {
    scoreText.innerHTML += `<p>You failed this question: ${wrong[key]["question"]}</p>`;
  }
}

// You do not have to alter this function.
function restartQuiz() {
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
}

// Incorrect answers for review
// function wrongResults() {
//   quizScreen.classList.add("hidden");
//   resultScreen.classList.remove("hidden");
// }

// Program one of the following extensions, or come up with one of your own:
// - Randomize question order or shuffle answers

// - Use  buttons or dropdowns instead of radio buttons

// - Add a countdown timer

// - Track incorrect answers for review

// - Store high scores in localStorage
