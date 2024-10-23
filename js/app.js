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

function createGrid() {
  for (let i = 0; i <= 255; i++) {
    const div = createElement("div");

    div.classList.add("square");
    div.innerText = `${i}`;
    divs.appendChild(div);
  }
}
createGrid();
