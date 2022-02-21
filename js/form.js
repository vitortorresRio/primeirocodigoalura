var botaoAdicionar = document.querySelector("#adicionar-Aluno");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var Aluno = obtemAlunoDoFormulario(form);

    var erros = validaAluno(Aluno);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaAlunoNaTabela(Aluno);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemAlunoDoFormulario(form) {

    var Aluno = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return Aluno;
}

function montaTr(Aluno) {
    var AlunoTr = document.createElement("tr");
    AlunoTr.classList.add("Aluno");

    AlunoTr.appendChild(montaTd(Aluno.nome, "info-nome"));
    AlunoTr.appendChild(montaTd(Aluno.peso, "info-peso"));
    AlunoTr.appendChild(montaTd(Aluno.altura, "info-altura"));
    AlunoTr.appendChild(montaTd(Aluno.gordura, "info-gordura"));
    AlunoTr.appendChild(montaTd(Aluno.imc, "info-imc"));

    return AlunoTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaAluno(Aluno) {

    var erros = [];

    if (Aluno.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (Aluno.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (Aluno.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (Aluno.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(Aluno.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(Aluno.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaAlunoNaTabela(Aluno) {
    var AlunoTr = montaTr(Aluno);
    var tabela = document.querySelector("#tabela-Alunos");
    tabela.appendChild(AlunoTr);
}
