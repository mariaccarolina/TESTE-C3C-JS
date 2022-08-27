const partA = document.getElementById("partA");
const partB = document.getElementById("partB");
const partC = document.getElementById("partC");

const button = document.getElementById("buttonResult");

const areaContentResult = document.getElementById("area-result");

function getTriangleType(partA, partB, partC) {
  if (partA === partB && partB === partC) {
    areaContentResult.innerHTML = "equilátero";
    return "equilátero";
  }

  if (
    partA === partB ||
    partA === partC ||
    partB === partA ||
    partB === partC
  ) {
    areaContentResult.innerHTML = "isósceles";

    return "isosceles";
  }
  areaContentResult.innerHTML = "Escaleno";

  return "Escaleno";
}

function result(event) {
  event.preventDefault();

  getTriangleType(partA.value, partB.value, partC.value);
}
button.addEventListener("click", result);
