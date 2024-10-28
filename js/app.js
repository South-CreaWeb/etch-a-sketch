const body = document.querySelector("body")
const containerGrid = document.querySelector(".container__grid");
const containerButton = document.querySelector(".container__button")
const askButton = document.querySelector(".button__ask");
const containerWidth = containerGrid.offsetWidth;

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






/**
 * Create a 16x16 square grid
 * @param {Number} number 
*/
function createDefaultGrid(number) {
  const multipNumber = number * number;
  const squareSize = Math.floor(containerWidth / number);
  containerGrid.innerHTML = "";
  
  for (let i = 1; i <= multipNumber; i++) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    let defaultSquare = createElement("div", "");
    defaultSquare.setAttribute("class", "square");
    defaultSquare.style.width = squareSize + "px";
    defaultSquare.style.height = squareSize + "px";
    containerGrid.appendChild(defaultSquare);

    defaultSquare.addEventListener("mouseenter", (event) => {
      defaultSquare.style["background-color"] = "#" + randomColor;
      setTimeout(() => {
        defaultSquare.style.removeProperty("background-color");
      }, 2000);
    });
  }
}

createDefaultGrid(64);

/**
 * Create a custom grid 
 */
function createCustomGrid() {

  
  askButton.addEventListener("click", (event) => {
    //Create grid size request
    const labelSize = createElement("label","Entre un nombre pour modifier la taille de la grille");
    labelSize.setAttribute("class", "label__size");
    const inputSize = createElement("input", "");
    inputSize.setAttribute("class", "size__grid");
    labelSize.insertAdjacentElement("beforeend", inputSize);
    labelSize.appendChild(inputSize);
    containerButton.appendChild(labelSize);

    // Confirm button
    const confirmButton = createElement("button", "Confirmer")
    confirmButton.setAttribute("class", "confirm__button");
    labelSize.insertAdjacentElement("beforeend", confirmButton);

    // Create reset button
    const resetButton = createElement("button", "Reset")
    resetButton.setAttribute("class", "reset__button")
    confirmButton.insertAdjacentElement("afterend", resetButton)

    //Create new container
    const customGrid = createElement("div", "");
    customGrid.setAttribute("class", "container__custom");
    customGrid.insertAdjacentElement("afterend", containerButton);
    body.appendChild(customGrid);

    
      confirmButton.addEventListener("click", (event) => {
        let numberForSize = Math.floor(inputSize.value);
        const customSquare = numberForSize * numberForSize;
        console.log(customSquare);
        const squareSize = Math.floor(containerWidth / numberForSize);
        console.log(squareSize);


        for (let i = 1; i <= customSquare; i++) {
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);
          let square = createElement("div", "");
          square.setAttribute("class", "square");
          square.style.width = squareSize + "px";
          square.style.height = squareSize + "px";
          customGrid.appendChild(square);

          square.addEventListener("mouseenter", (event) => {
            square.style["background-color"] = "#" + randomColor;
            setTimeout(() => {
              square.style.removeProperty("background-color");
            }, 2000);
          });
          resetButton.addEventListener("click", (event) => {
            inputSize.value = ""
            square.remove();
          });
        }
      });

      
      
      containerGrid.remove();
    });
}
  
  createCustomGrid();