const divs = document.querySelector(".container");

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
 * Create a 16x16 grid of square
 */
function createGrid() {
  let div = null;
  for (let i = 0; i <= 255; i++) {
    div = createElement("div");

    div.classList.add("square");
    divs.appendChild(div);

    div.addEventListener("mouseenter", (event) => {
      let currentDiv = event.currentTarget;
      currentDiv.style["background-color"] = "black";
      setTimeout(() => {
        currentDiv.style["background-color"] = "cyan";
      }, 1500);
    });
  }
  return div;
}

createGrid();
