function valorInvalido(peso, altura) {
  return isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0;
}

document.getElementById("calcular").addEventListener("click", function () {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  if (valorInvalido(peso, altura)) {
    alert("Por favor, insira valores válidos.");
    return;
  }

  const imc = (peso / (altura * altura))*10000;

  const linhas = document.querySelectorAll("table tbody tr");
  linhas.forEach(linha => linha.classList.remove("destaque"));

 
  let indiceLinha = -1;
  if (imc < 18.5) indiceLinha = 0;         // Abaixo do peso
  else if (imc < 25) indiceLinha = 1;      // Peso normal
  else if (imc < 30) indiceLinha = 2;      // Pré-obesidade
  else if (imc < 35) indiceLinha = 3;      // Obesidade grau 1
  else if (imc < 40) indiceLinha = 4;      // Obesidade grau 2
  else indiceLinha = 5;                    // Obesidade grau 3

  
  if (indiceLinha >= 0) {
    linhas[indiceLinha].classList.add("destaque");
  }
});
