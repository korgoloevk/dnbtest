let currentQuestion = 0;
let totalCount = 0;
const liElem = document.querySelectorAll("li");
const question = document.querySelector(".question");
const counts = document.querySelectorAll(".count");
const questionLength = Math.max(...Object.keys(questions));

function setQuestion(obj, index) {
  liElem.forEach((elem, i) => {
    elem.textContent = obj[index].answers[i][0];
    elem.setAttribute("score", obj[index].answers[i][1]);
  });
  question.textContent = obj[index].question;
  counts[index].setAttribute("data-visibility", "visible");
}

function setAnswer() {
  if (currentQuestion >= +questionLength) return false;
  currentQuestion++;
  totalCount += +this.getAttribute("score");
  setQuestion(questions, currentQuestion);
}

function setNextCount() {}

liElem.forEach((elem) => {
  elem.addEventListener("click", setAnswer);
});

setQuestion(questions, currentQuestion);
