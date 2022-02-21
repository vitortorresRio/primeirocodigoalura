var botaoAdicionar = document.querySelector("#buscar-Aluno");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-Aluno.herokuapp.com/Aluno");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var Aluno = JSON.parse(resposta);

            Aluno.forEach(function(aluno) {
                adicionaAlunoNaTabela(aluno);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});
