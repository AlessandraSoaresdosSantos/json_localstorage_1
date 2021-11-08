btnJson.addEventListener('click', function(e) {

    var valor = document.body.querySelector('textarea');

    var objeto = JSON.parse(valor.textContent);

    var resultado = `Nome: ${objeto.nome}  - idade: ${objeto.idade}`;
    document.getElementById('resultado').value = resultado;


    //criar o arquivo do tipo JSON e realizar donwload
    var file_download = new Blob([resultado], { type: "json;charset=utf-8" });
    saveAs(file_download, "valor_json.json");
});