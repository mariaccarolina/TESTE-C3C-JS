const buttonResultNoteStudent = document.getElementById("resultNoteStudent");

const noteStudend = document.getElementById("noteStudend");

const areaContentResult = document.getElementById("area-result");

function resultNoteStudent(event) {
  event.preventDefault();
  const roundToNearest5 = (x) => Math.ceil(x / 5) * 5;

  const checkNoteStudent =
    roundToNearest5(Number(noteStudend.value)) - Number(noteStudend.value) < 3;

  if (noteStudend.value >= 0 && noteStudend.value <= 100) {
    if (noteStudend.value > 40 || noteStudend.value == 38) {
      if (checkNoteStudent) {
        let noteStudentLocal = roundToNearest5(noteStudend.value);
        areaContentResult.innerHTML = `Parabéns,você foi aprovado e sua nota foi: ${noteStudentLocal}`;
        return noteStudentLocal;
      } else {
        let noteStudentLocal = roundToNearest5(noteStudend.value);
        areaContentResult.innerHTML = `Parabéns,você foi aprovado e sua nota foi: ${noteStudentLocal}`;
        return noteStudentLocal;
      }
    } else {
      areaContentResult.innerHTML = "VOCÊ FOI REPROVADO";

      return "VOCÊ FOI REPROVADO";
    }
  } else alert("Digite uma nota entre 0 e 100");
}
buttonResultNoteStudent.addEventListener("click", resultNoteStudent);
