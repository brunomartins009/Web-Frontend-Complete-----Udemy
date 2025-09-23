let nomes = [
    "andré",
    "carlos",
    "cristina",
    "daniel",
    "débora",
    "eduardo",
    "fabiana",
    "fábio",
    "gabriela",
    "guilherme",
    "henrique",
    "daniel"
];

function pesquisarNome(){

    let nomePesquisado = document.getElementById("campoNome").value;
    let itensLista = "";

    for(indice in nomes){
        let nome = nomes[indice];
        if(nomePesquisado == nome){
            itensLista += `
            <li class="list-group-item">
                ${nome}
            </li>`            

            document.getElementById("lista").innerHTML = itensLista;
        }
    }

}

function carregarNomes(){
    
    let itensLista = "";

    for(indice in nomes){
        let nome = nomes[indice];
        itensLista += `
            <li class="list-group-item">
                ${nome}
            </li>`

        document.getElementById("lista").innerHTML = itensLista;
    }

}