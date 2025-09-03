/* EXEMPLO 1 - COMER PIZZA */

// let numero = 4;

// while (numero >=1){
//     console.log("Restam " + numero + " pedaços de pizza");
//     numero--;
// }

// console.log("Acabou a pizza!");

/* EXEMPLO 2 - POSTAGENS EM REDE SOCIAL */

let postagens = [
    "Começando a aprender JavaScript",
    "JavaScript é muito legal",
    "Estou adorando aprender a programar",
    "Vou aprender React para fazer aplicações web"
]

let i = 0;

while (i < postagens.length){
    console.log("IMAGEM" + (i + 1));
    console.log(postagens[i]);
    console.log("-------------------");
    i++;
}