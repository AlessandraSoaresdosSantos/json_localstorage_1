function uploadJson(e) {
    var arquivo_json = e.files[0];

    if (!arquivo_json.name.includes('.json')) {
        return false;
    }

    var fr = new FileReader();

    fr.onload = function(event) {

        var formato_json = JSON.parse(event.target.result);
        var valor_json = JSON.stringify(formato_json, null, 2);

        localStorage.clear();
        localStorage.setItem('pessoas', valor_json);

        document.getElementById('resultado').value = valor_json;

    }

    fr.readAsText(arquivo_json);
}