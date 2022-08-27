function bhaskara(a, b, c) {
  let resultados = [];
  let delta = b ** 2 - 4 * a * c;
  if (delta < 0) {
    return "Delta é negativo";
  }
  let x1 = ((-b + Math.sqrt(delta)) / 2) * a;
  let x2 = ((-b - Math.sqrt(delta)) / 2) * a;
  resultados.push(x1);
  resultados.push(x2);
  return resultados;
}

const formulario = document.querySelector(".form");
const valueA = document.getElementById("valueA");
const valueB = document.getElementById("valueB");
const valueC = document.getElementById("valueC");
const valorFinal = document.querySelector(".resultadoFinal");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const resultado = bhaskara(valueA.value, valueB.value, valueC.value);
  if (typeof resultado === "string") {
    valorFinal.innerText = resultado;
  } else {
    valorFinal.innerText = `O valor de x1 vale = ${resultado[0]} \n O valor de x2 vale = ${resultado[1]}`;
  }
});
