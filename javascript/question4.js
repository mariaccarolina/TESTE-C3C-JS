const note = document.getElementById("note");

const buttonResult = document.getElementById("buttonResult");

const areaContentResult = document.getElementById("area-list");

function result(event) {
  event.preventDefault();

  const arrayNumbers = Array.from({ length: note.value }, (x, i) => ++i);
  for (var index = 0; index <= arrayNumbers?.length - 1; index++) {
    if (arrayNumbers[index] % 5 == 0) {
      arrayNumbers[index] = "Luidy";
    }
    if (arrayNumbers[index] % 9 == 0) {
      arrayNumbers[index] = "Moura";
    }
    if (arrayNumbers[index] % 5 == 0 && arrayNumbers[index] % 9 == 0) {
      arrayNumbers[index] = "LuidyMoura";
    }
    areaContentResult.innerHTML += `<div class="item-list">${arrayNumbers[index]}</div>`;
  }
  return arrayNumbers;
}

buttonResult.addEventListener("click", result);
