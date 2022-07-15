const arrow = document.querySelector(".share");
const share = document.querySelector(".container");

arrow.addEventListener("click", function () {
  share.classList.toggle("show");
});