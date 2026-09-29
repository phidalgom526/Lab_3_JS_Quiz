// Gets the Submit Quiz button
let submitButton = document.querySelector("#submit-button");

// Runs the quiz when the button is clicked
submitButton.addEventListener("click", gradeQuiz);


// Correct answer image
let correctImage =
  "https://img.magnific.com/free-vector/doodle-hand-drawn-cartoon-cute-girl-student-with-correct-agree-symbols-yes-tag-answer_40876-3283.jpg";

// Wrong answer image
let wrongImage =
  "https://img.magnific.com/free-vector/cute-girl-holding-wrong-symbol-sign-character-hand-drawn-cartoon-art-illustration_56104-974.jpg";


// Shuffles the choices for Question 5
function shuffleArray(array) {

  for (let i = array.length - 1; i > 0; i--) {

    let randomIndex = Math.floor(Math.random() * (i + 1));

    let temp = array[i];

    array[i] = array[randomIndex];

    array[randomIndex] = temp;
  }

  return array;
}


// Shuffles Question 5 when the page loads
let choices = document.querySelector(".choices");

let choiceLabels = Array.from(choices.querySelectorAll("label"));

shuffleArray(choiceLabels);

for (let label of choiceLabels) {
  choices.append(label);
}


// Grades the quiz
function gradeQuiz() {

  // Keeps track of the score
  let score = 0;

  // QUESTION 1

  let trueAnswer = document.querySelector("#true");

  let feedback1 = document.querySelector("#feedback1");

  if (trueAnswer.checked) {

    score += 20;

    feedback1.innerHTML =
      '<div style="text-align:center;">' +
      'Correct!<br>' +
      '<img src="' + correctImage +
      '" alt="Correct answer" style="width:130px !important; height:130px !important; object-fit:contain; display:block; margin:8px auto 0;">' +
      '</div>';

  } else {

    feedback1.innerHTML =
      '<div style="text-align:center;">' +
      'Incorrect!<br>' +
      '<img src="' + wrongImage +
      '" alt="Incorrect answer" style="width:130px !important; height:130px !important; object-fit:contain; display:block; margin:8px auto 0;">' +
      '</div>';
  }

  // QUESTION 2

  let nameInput = document.querySelector("#basic-input");

  let feedback2 = document.querySelector("#feedback2");

  if (nameInput.value.trim() !== "") {

    score += 20;

    feedback2.innerHTML =
      '<div style="text-align:center;">' +
      'Correct!<br>' +
      '<img src="' + correctImage +
      '" alt="Correct answer" style="width:130px !important; height:130px !important; object-fit:contain; display:block; margin:8px auto 0;">' +
      '</div>';

  } else {

    feedback2.innerHTML =
      '<div style="text-align:center;">' +
      'Incorrect!<br>' +
      '<img src="' + wrongImage +
      '" alt="Incorrect answer" style="width:130px !important; height:130px !important; object-fit:contain; display:block; margin:8px auto 0;">' +
      '</div>';
  }

  // QUESTION 3

  let statusInput = document.querySelector("#status-input");

  let feedback3 = document.querySelector("#feedback3");

  // Any option chosen is correct
  if (statusInput.value !== "") {

    score += 20;

    feedback3.innerHTML =
      '<div style="text-align:center;">' +
      'Correct!<br>' +
      '<img src="' + correctImage +
      '" alt="Correct answer" style="width:130px !important; height:130px !important; object-fit:contain; display:block; margin:8px auto 0;">' +
      '</div>';

  } else {

    feedback3.innerHTML =
      '<div style="text-align:center;">' +
      'Incorrect!<br>' +
      '<img src="' + wrongImage +
      '" alt="Incorrect answer" style="width:130px !important; height:130px !important; object-fit:contain; display:block; margin:8px auto 0;">' +
      '</div>';
  }

  // QUESTION 4

  let ageInput = document.querySelector("#age-input");

  let feedback4 = document.querySelector("#feedback4");

  if (ageInput.value !== "") {

    score += 20;

    feedback4.innerHTML =
      '<div style="text-align:center;">' +
      'Correct!<br>' +
      '<img src="' + correctImage +
      '" alt="Correct answer" style="width:130px !important; height:130px !important; object-fit:contain; display:block; margin:8px auto 0;">' +
      '</div>';

  } else {

    feedback4.innerHTML =
      '<div style="text-align:center;">' +
      'Incorrect!<br>' +
      '<img src="' + wrongImage +
      '" alt="Incorrect answer" style="width:130px !important; height:130px !important; object-fit:contain; display:block; margin:8px auto 0;">' +
      '</div>';
  }

  // QUESTION 5

  let tired = document.querySelector("#Tired");

  let okay = document.querySelector("#ok");

  let feedback5 = document.querySelector("#feedback5");

  if (tired.checked || okay.checked) {

    score += 20;

    feedback5.innerHTML =
      '<div style="text-align:center;">' +
      'Correct!<br>' +
      '<img src="' + correctImage +
      '" alt="Correct answer" style="width:130px !important; height:130px !important; object-fit:contain; display:block; margin:8px auto 0;">' +
      '</div>';

  } else {

    feedback5.innerHTML =
      '<div style="text-align:center;">' +
      'Incorrect!<br>' +
      '<img src="' + wrongImage +
      '" alt="Incorrect answer" style="width:130px !important; height:130px !important; object-fit:contain; display:block; margin:8px auto 0;">' +
      '</div>';
  }

  // SHOW SCORE

  let scoreDisplay = document.querySelector("#score");

  scoreDisplay.textContent =
    "Your score is " + score + " out of 100!";


  // CONGRATULATIONS

  if (score > 80) {

    scoreDisplay.textContent +=
      " 🎉 Congratulations! Great job!";
  }

  // LOCAL STORAGE

  let quizCount = localStorage.getItem("quizCount");

  if (quizCount === null) {

    quizCount = 0;
  }

  quizCount++;

  localStorage.setItem("quizCount", quizCount);

  scoreDisplay.textContent +=
    " You have taken this quiz " + quizCount + " time(s).";
}
