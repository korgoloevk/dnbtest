let currentQuestion = 0;
let totalCount = 0;
const liElem = document.querySelectorAll(".answers li");
const question = document.querySelector(".question");
const counts = document.querySelectorAll(".count");
const questionLength = Math.max(...Object.keys(questions));
const test = document.querySelector(".test");

function setQuestion(obj, index) {
  liElem.forEach((elem, i) => {
    elem.textContent = obj[index].answers[i][0];
    elem.setAttribute("score", obj[index].answers[i][1]);
  });
  question.textContent = obj[index].question;
  counts[index].setAttribute("data-visibility", "visible");
}

function setAnswer() {
  if (currentQuestion >= +questionLength) {
    setResult();
    return false;
  }
  currentQuestion++;
  totalCount += +this.getAttribute("score");
  setQuestion(questions, currentQuestion);
}

function setResult() {
  const resultText = document.createElement("div");
  resultText.classList.add("qst");
  let resultImage = document.createElement("img");

  if (totalCount < 8) {
    resultText.textContent = images.vldl.text;
    resultImage = images.vldl.img;
  } else if (totalCount < 20) {
    resultText.textContent = images.oxi.text;
    resultImage = images.oxi.img;
  } else if (totalCount < 54) {
    resultText.textContent = images.fixik.text;
    resultImage = images.fixik.img;
  } else if (totalCount < 72) {
    resultText.textContent = images.romeo.text;
    resultImage = images.romeo.img;
  } else if (totalCount < 90) {
    resultText.textContent = images.ded.text;
    resultImage = images.ded.img;
  } else if (totalCount < 108) {
    resultText.textContent = images.brsrk.text;
    resultImage = images.brsrk.img;
  }
  resultImage.classList.add("resultImage");
  test.innerHTML = "";
  test.append(resultText);
  test.append(resultImage);
}

liElem.forEach((elem) => {
  elem.addEventListener("click", setAnswer);
});

setQuestion(questions, currentQuestion);
