const divs = document.querySelector(".container");
const askButton = document.querySelector(".button__ask");

let isDefaultGridDisable = false;

/**
 *
 * @param {HTMLElement} tagname
 * @returns {HTMLElement}
 */
function createElement(tagname) {
  const element = document.createElement(tagname);

  return element;
}

/**
 * Create a 16x16 square grid
 */
function createDefaultGrid(a) {
  let total = a * a;
  console.log("la");
  if (isDefaultGridDisable) return;
  for (let i = 1; i <= total; i++) {
    let div = createElement("div");
    div.classList.add("square");
    divs.appendChild(div);

    div.addEventListener("mouseenter", (event) => {
      let currentDiv = event.currentTarget;
      currentDiv.style["background-color"] = "darkgray";
      setTimeout(() => {
        currentDiv.removeAttribute("style");
      }, 1500);
    });
  }
}

/**
 * Ask the user how many suqare he want and generate it
 * @param {number} number
 */
function askNumberSquare(number) {
  number = prompt("entrez un chiffre");
  const resultGrid = number * number;

  if (number >= 100) {
    return alert("Nombre beaucoup trop grand");
  } else {
    isDefaultGridDisable = true;
    const customDiv = divs;
    divs.remove();
    for (let i = 0; i <= resultGrid; i++) {}
  }
}

askButton.addEventListener("click", (event) => {
  event.preventDefault();
  askNumberSquare();
});

createDefaultGrid(16);
