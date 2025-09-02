/*
*   Funções
*/

/* Exemplo 1 */
// function desligarTorneira() {
//     console.log('Desligar a torneira');
// }

// desligarTorneira();

/* Exemplo 2 */
// function pedirCopoAgua() {
//     return "Copo de água";
// }

// let retorno = pedirCopoAgua();
// console.log(retorno);

/* Exemplo 3 */
// function irMercadoComprarArroz(dinheiro) {
//     // ("Pegar transporte");
//     // ("Ir ao mercado");
//     // ("Comprar arroz");
//     // ("Voltar para casa");
//     return "rroz";
// }

// let retorno2 = irMercadoComprarArroz(10);
// console.log(retorno2);

/* Exemplo 4 */
function calcularMedia(nota1, nota2) {
    let totalNotas = nota1 + nota2;
    let media = totalNotas / 2;
    return media;
}

let media = calcularMedia(8, 8);
console.log(media);