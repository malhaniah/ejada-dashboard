const conversation = document.getElementById("conversations");
const chatBoxContainer = document.getElementById("chat-boxes-container");
const controlButton = document.querySelectorAll(".view-chat-btn");
const control = document.getElementById("control");

let activeClass = "active";
let username = "Ahmed Mohammed";

let spanElement = document.createElement("span");
spanElement.classList.add("path");
spanElement.textContent = ` / view Conversation (${username})`;

controlButton.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    control.appendChild(spanElement);
    conversation.classList.add("active");
    chatBoxContainer.classList.add("active");
    window.scrollTo({ top: 0 });
  });
});

control.addEventListener("click", (e) => {
  e.preventDefault();
  control.removeChild(spanElement);
  conversation.classList.remove("active");
  chatBoxContainer.classList.remove("active");
  window.scrollTo({ top: 0 });
});

// Analysis select type
const selectionsButton = [...document.querySelectorAll(".selection-btn")];

let buttonActive = selectionsButton.find((selection) =>
  selection.classList.contains(activeClass)
);

let buttonInactive = selectionsButton.find(
  (selection) => !selection.classList.contains(activeClass)
);

buttonInactive.addEventListener("click", (e) => {
  e.preventDefault();

  buttonInactive.classList.add(activeClass);
  buttonActive.classList.remove(activeClass);
});

buttonActive.addEventListener("click", (e) => {
  e.preventDefault();

  buttonActive.classList.add(activeClass);
  buttonInactive.classList.remove(activeClass);
});

// Analysis feedback
const feedbacks = [...document.querySelectorAll(".feedback")];
const feedbacksContent = [...document.querySelectorAll(".feedback-content")];
const feedbackArrow = [...document.querySelectorAll(".feedback-arrow")];

feedbacks.forEach((feedback, index) => {
  feedback.addEventListener("click", (e) => {
    for (let i = 0; i < feedbacks.length; i++) {
      feedbacksContent[i].classList.remove(activeClass);
      feedbackArrow[i].classList.remove(activeClass);
    }
    feedbacksContent[index].classList.add(activeClass);
    feedbackArrow[index].classList.add(activeClass);
  });
});
