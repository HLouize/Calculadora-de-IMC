
function valorInvalido(peso, altura) {
    return isNaN(peso) || isNaN(altura) || peso < 0 || altura < 0;
}
document.getElementById("calcular").addEventListener("click", function () {
const peso = parseFloat(document.getElementById("peso").value);
const altura = parseFloat(document.getElementById("altura").value);
const resultado =document.getElementById("resultado");

if (valorInvalido(peso, altura)) {
        alert("Por favor, insira valores válidos.")
        return;
}

const imc =peso/ (altura *altura);


if (imc > 40)
    resultado.textContent ="Obesidade grau 3";
else if (imc < 40 && imc >= 35)
    resultado.textContent ="Obesidade grau 2";
else if (imc < 35 && imc >= 30)
    resultado.textContent ="Obesidade grau 1";
else if (imc < 30 && imc >= 25)
    resultado.textContent ="Pré-Obesidade";
else if (imc < 25 && imc >= 18.5)
    resultado.textContent ="Peso Normal";
else if (imc < 18.5)
    resultado.textContent ="Abaixo do peso";

})
