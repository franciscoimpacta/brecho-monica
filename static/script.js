var form = document.getElementById("form1")

form.onsubmit = function(event){

event.preventDefault(); // Mata o evento padrão

var dados = { } //Cria um JSON vazio, podemos usar o new Object()

for (var i = 0; i < form.elements.length; i++){
    
    var input= form.elements[i];

    if(input.email){
        dados[input.email] = input.value;
    } else if (input.whatsapp) {
        dados[input.whatsapp] = input.value;
    } else if (input.diasemana) {
        dados[input.diasemana] = input.value;
    } else if (input.horarios) {
        dados[input.horarios] = input.value;
    } else if (input.mensagem) {
        dados[input.mensagem] = input.value;
    }

}

// Constrói a requisição

var xhr = new XMLHttpRequest();

// xhr.onreadystatechange(… fazer algo …); // Veremos adiante

xhr.open(form.method, form.action, true); // Abre a requisição

xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

// Envia configurando o JSON como uma String/serializando

xhr.send(JSON.stringify(dados));

}