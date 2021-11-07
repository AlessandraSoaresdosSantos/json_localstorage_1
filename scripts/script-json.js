btnJson.addEventListener('click', function(e) {

    var valor = document.body.querySelector('label');

    var objeto = JSON.parse(valor.textContent);

    document.getElementById('resultado').value = `Nome: ${objeto.nome}  - idade: ${objeto.idade}`;
});