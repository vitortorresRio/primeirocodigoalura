var titulo = document.querySelector(".titulo");
titulo.textContent = "KL Treino Funcional";

var aluno = document.querySelector("#primeiro-aluno");

var tdPeso = aluno.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = aluno.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = aluno.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
}

if (pesoEhValido && alturaEhValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
