var media = document.getElementById('media');
var questions = document.getElementById('questions');
var acertou = document.getElementById('acertou');
var value = document.getElementById('value');
var resultado = document.getElementById('resultado');

function calcular() {
  let mediaF = parseInt(media.value);
  let questionsF = parseInt(questions.value);
  let acertouF = parseInt(acertou.value);
  let valueF = parseInt(value.value);

  questionsToPass = (mediaF / 10) * questionsF;

  eachQuestionValue = valueF / questionsF;

  grade = eachQuestionValue * acertouF;
  if (mediaF && questionsF && acertouF && valueF) {
    resultado.innerHTML = `<p>Para tirar a média, você deve acertar no mínimo ${questionsToPass.toFixed(
      2,
    )} questões!
        <br>
        Cada questão da prova vale ${eachQuestionValue.toFixed(2)}!
        <br>
        Você tirou nota ${grade.toFixed(2)}!
        </p`;
  } else {
    alert('Por favor, preencha todos os campos!');
  }
}
