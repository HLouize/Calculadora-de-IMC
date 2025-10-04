function valorInvalido(peso, altura) {
    return isNaN(peso) || isNaN(altura) || peso < 0 || altura < 0;
}

let peso;
let altura;


do {
    peso = parseFloat(prompt("Digite seu peso (em kg): "));
    altura = parseFloat(prompt("Digite sua altura (em metros): "));

    if (valorInvalido(peso, altura)) {
        console.log("Valor inválido! Tente novamente.");
    }

} while (valorInvalido(peso, altura));


const imc = peso / (altura * altura);

if (imc > 40)
    console.log("Obesidade grau 3");
else if (imc < 40 && imc >= 35)
    console.log("Obesidade grau 2")
else if (imc < 35 && imc >= 30)
    console.log("Obesidade grau 1")
else if (imc < 30 && imc >= 25)
    console.log("Pré-Obesidade")
else if (imc < 25 && imc >= 18.5)
    console.log("Peso Normal")
else if (imc < 18.5)
    console.log("Abaixo do peso")

process.exit();
