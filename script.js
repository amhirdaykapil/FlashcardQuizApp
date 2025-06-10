let flashcards = [
  { question: "What is the capital of India?", answer: "New Delhi" },
  { question: "2 + 2 = ?", answer: "4" },
  { question: "What color is the sky?", answer: "Blue" }
];

let currentCard = 0;

function showCard(index) {
  const questionEl = document.getElementById("question");
  const answerEl = document.getElementById("answer");

  questionEl.innerText = flashcards[index].question;
  answerEl.innerText = flashcards[index].answer;
  answerEl.style.display = "none";
}

document.getElementById("showAnswer").onclick = function () {
  document.getElementById("answer").style.display = "block";
};

function nextCard() {
  if (currentCard < flashcards.length - 1) {
    currentCard++;
    showCard(currentCard);
  }
}

function prevCard() {
  if (currentCard > 0) {
    currentCard--;
    showCard(currentCard);
  }
}

function addCard() {
  const newQ = document.getElementById("newQuestion").value.trim();
  const newA = document.getElementById("newAnswer").value.trim();

  if (newQ && newA) {
    flashcards.push({ question: newQ, answer: newA });
    document.getElementById("newQuestion").value = "";
    document.getElementById("newAnswer").value = "";
    currentCard = flashcards.length - 1;
    showCard(currentCard);
    alert("✅ Flashcard Added!");
  } else {
    alert("⚠️ Please enter both Question and Answer.");
  }
}

showCard(currentCard);
