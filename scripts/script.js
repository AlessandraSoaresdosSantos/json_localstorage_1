function uploadJson(e) {
    var arquivo_json = e.files[0];

    if (!arquivo_json.name.includes('.json')) {
        return false;
    }

    var fr = new FileReader();

    fr.onload = function(event) {

        var formato_json = JSON.parse(event.target.result);
        var valor_json = JSON.stringify(formato_json, null, 2);
        document.getElementById('resultado').value = valor_json;

        localStorage.setItem('pessoas', valor_json);

        //criar o arquivo valor_json e realizar donwload
        var file_download = new Blob([valor_json], { type: "json;charset=utf-8" });
        saveAs(file_download, "valor_json.json");
    }

    fr.readAsText(arquivo_json);



}