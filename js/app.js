const containerGrid = document.querySelector(".container__grid");
const askButton = document.querySelector(".button__ask");

const containerWidth = containerGrid.offsetWidth;

console.log(containerWidth);

/**
 * Create HTML element
 * @param {HTMLElement} tagname
 * @param {String} content
 * @returns
 */
function createElement(tagname, content) {
  let element = document.createElement(tagname);
  element.innerText = content;

  return element;
}

let div = createElement("div", "Salut !");
div.setAttribute("class", "square");

function createDefaultGrid(number) {
  const multipNumber = number * number;

  let squareWidth = containerWidth / number;
  let squareHeight = squareWidth;

  if (number >= 100) {
    alert("Nombre trop grand !");
  } else {
    for (let i = 0; i <= multipNumber; i++) {
      let defaultSquare = createElement("div", "");
      defaultSquare.setAttribute("class", "square");
      defaultSquare.style.width = squareWidth + "px";
      defaultSquare.style.height = squareHeight + "px";
      containerGrid.appendChild(defaultSquare);
    }
  }
}

createDefaultGrid(16);
