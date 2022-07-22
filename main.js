function setQuestion() {
  const question = document.querySelector(".question");
  const liElem = document.querySelectorAll("li");

  liElem.forEach((elem, i) => {
    elem.textContent = questions[0].answers[i][0];
    elem.setAttribute("score", questions[0].answers[i][1]);
  });

  question.textContent = questions[0].question;
}

setQuestion();
