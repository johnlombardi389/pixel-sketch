const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;

const container_div = document.getElementById("container");
const defaultGridBlock_div =
  document.getElementsByClassName("defaultGridBlock");

const eight_btn = document.getElementById("eight");
const sixteen_btn = document.getElementById("sixteen");
const threetwo_btn = document.getElementById("threetwo");
const sixfour_btn = document.getElementById("sixfour");

const gridOn_btn = document.getElementById("radio-one");
const gridOff_btn = document.getElementById("radio-two");

const clear_btn = document.getElementById("clear");
const eraser_btn = document.getElementById("eraser");

// Show active canvas size when page loads
sixteen_btn.style.backgroundColor = "var(--clr-btnon";

/* Build grid inside container */
function buildGrid(size) {
  container_div.innerHTML = "";
  container_div.classList.remove("defaultGridBlock");
  container_div.style.setProperty("--grid-rows", size);
  container_div.style.setProperty("--grid-cols", size);

  for (let i = 0; i < size * size; i++) {
    const gridBlock = document.createElement("div");
    gridBlock.className = "defaultGridBlock";
    container_div.appendChild(gridBlock);
  }
}

buildGrid(currentSize);

/* Canvas size buttons */
eight_btn.addEventListener("click", (e) => {
  currentSize = 8;
  buildGrid(currentSize);
  resetGridLines();

  if (currentSize === 8) {
    eight_btn.style.backgroundColor = "var(--clr-btn";
    sixteen_btn.style.backgroundColor = "var(--clr-btn";
    threetwo_btn.style.backgroundColor = "var(--clr-btn";
    sixfour_btn.style.backgroundColor = "var(--clr-btn";
    e.target.style.backgroundColor = "var(--clr-btnon)";
  }
});

sixteen_btn.addEventListener("click", (e) => {
  currentSize = 16;
  buildGrid(currentSize);
  resetGridLines();

  if (currentSize === 16) {
    eight_btn.style.backgroundColor = "var(--clr-btn";
    sixteen_btn.style.backgroundColor = "var(--clr-btn";
    threetwo_btn.style.backgroundColor = "var(--clr-btn";
    sixfour_btn.style.backgroundColor = "var(--clr-btn";
    e.target.style.backgroundColor = "var(--clr-btnon)";
  }
});

threetwo_btn.addEventListener("click", (e) => {
  currentSize = 32;
  buildGrid(currentSize);
  resetGridLines();

  if (currentSize === 32) {
    eight_btn.style.backgroundColor = "var(--clr-btn";
    sixteen_btn.style.backgroundColor = "var(--clr-btn";
    threetwo_btn.style.backgroundColor = "var(--clr-btn";
    sixfour_btn.style.backgroundColor = "var(--clr-btn";
    e.target.style.backgroundColor = "var(--clr-btnon)";
  }
});

sixfour_btn.addEventListener("click", (e) => {
  currentSize = 64;
  buildGrid(currentSize);
  resetGridLines();

  if (currentSize === 64) {
    eight_btn.style.backgroundColor = "var(--clr-btn";
    sixteen_btn.style.backgroundColor = "var(--clr-btn";
    threetwo_btn.style.backgroundColor = "var(--clr-btn";
    sixfour_btn.style.backgroundColor = "var(--clr-btn";
    e.target.style.backgroundColor = "var(--clr-btnon)";
  }
});

/* Toggle grid lines on and off */
gridOn_btn.addEventListener("input", function (e) {
  gridLineStatus = "on";
  const gridLines = document.querySelectorAll(".defaultGridBlock");

  gridLines.forEach((border) => {
    border.style.border = "1px solid var(--gridline-color)";
  });
});

gridOff_btn.addEventListener("input", function (e) {
  gridLineStatus = "off";
  const gridLines = document.querySelectorAll(".defaultGridBlock");

  gridLines.forEach((border) => {
    border.style.border = "0px solid var(--gridline-color)";
  });
});

/* Reset grid lines to on when changing canvas size */
function resetGridLines() {
  let resetLines = document.getElementsByName("switch-one");

  for (let i = 0; i < resetLines.length; i++) {
    resetLines[0].checked = true;
  }
}

/* Clear canvas button */
function clearCanvas() {
  buildGrid(currentSize);
}

clear_btn.addEventListener("click", () => {
  clearCanvas();
  resetGridLines();
});

/* Set drawing color */
const DEFAULT_COLOR = "black";
let currentColor = DEFAULT_COLOR;

const blackColor = document.getElementById("black");
const redColor = document.getElementById("red");
const orangeColor = document.getElementById("orange");
const yellowColor = document.getElementById("yellow");
const greenColor = document.getElementById("green");
const blueColor = document.getElementById("blue");
const pinkColor = document.getElementById("pink");
const whiteColor = document.getElementById("white");
const purpleColor = document.getElementById("purple");
const greyColor = document.getElementById("grey");

blackColor.addEventListener("click", () => (currentColor = "black"));
redColor.addEventListener("click", () => (currentColor = "red"));
orangeColor.addEventListener("click", () => (currentColor = "orange"));
yellowColor.addEventListener("click", () => (currentColor = "yellow"));
greenColor.addEventListener("click", () => (currentColor = "green"));
blueColor.addEventListener("click", () => (currentColor = "blue"));
pinkColor.addEventListener("click", () => (currentColor = "pink"));
whiteColor.addEventListener("click", () => (currentColor = "white"));
purpleColor.addEventListener("click", () => (currentColor = "purple"));
greyColor.addEventListener("click", () => (currentColor = "grey"));

/* Draw on canvas by clicking and holding mouse */
let mouseDown = 0;
document.body.onmousedown = () => (mouseDown = 1);
document.body.onmouseup = () => (mouseDown = 0);

container_div.addEventListener("mouseover", function (e) {
  if (mouseDown === 1) {
    if (e.target.matches(".defaultGridBlock")) {
      e.target.style.backgroundColor = currentColor;
    }
  }
});

container_div.addEventListener("click", function (e) {
  if (e.target.matches(".defaultGridBlock")) {
    e.target.style.backgroundColor = currentColor;
  }
});
