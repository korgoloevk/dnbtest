let currentQuestion = 0;
let totalCount = 0;
const liElem = document.querySelectorAll("li");

function setQuestion(obj) {
  const question = document.querySelector(".question");

  liElem.forEach((elem, i) => {
    elem.textContent = obj[currentQuestion].answers[i][0];
    elem.setAttribute("score", obj[currentQuestion].answers[i][1]);
  });

  question.textContent = obj[currentQuestion].question;
}

function setAnswer() {
  currentQuestion++;
  totalCount += +this.getAttribute("score");
  setQuestion(questions);
}

function setNextCount(){
    
}

liElem.forEach((elem) => {
  elem.addEventListener("click", setAnswer);
});

setQuestion(questions);
