const box = document.querySelector(".box");
const button = document.querySelector("button");

const moveCircle = () => {
  if (box.classList.contains("box-white")) {
    box.classList.remove("box-white");
    box.classList.add("move-right");
  } else if (box.classList.contains("move-right")) {
    box.classList.remove("move-right");
    box.classList.add("move-left");
  } else {
    box.classList.remove("move-left");
    box.classList.add("move-right");
  }
};

button.addEventListener("click", moveCircle);