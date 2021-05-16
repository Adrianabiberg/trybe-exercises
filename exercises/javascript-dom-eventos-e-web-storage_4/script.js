const inputB = document.querySelectorAll("#inputBackgroungColor");
const alvo = document.querySelector("body");

function backgroungColor() {
    alvo.style.backgroundColor = inputB.value;
};

inputB.addEventListener("keyup", backgroungColor);
