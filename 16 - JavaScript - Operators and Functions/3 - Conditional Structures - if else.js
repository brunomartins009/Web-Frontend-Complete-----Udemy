/* Estruturas condicionais if e else

    - Verificar idade para entrar no site
    - Verificar se a compra é maior que o mínimo para desconto
    - Verificar se tem acesso a recursos pagos
*/

/* 
*   Exemplo idade para entrar no site
*/

// let idade = 18;
// if(idade >= 18 && idade < 65) {
//     console.log("Pode entrar no site");
// }

/*
*   Exemplo compra mínima para desconto 
*/

// let idade = 30;
// let compras = 300;

// if(idade >= 40 || compras >= 400) {
//     console.log("Desconto de 20% aplicado");
// } else {
//     console.log("Sem desconto");
// }

/*
*   Exemplo menu de opções
*/

let opcao = 3;

if(opcao === 1) {
    console.log("Saldo conta");
} else if(opcao === 2) {
    console.log("Cartão de crédito");
} else if(opcao === 3) {
    console.log("Descontos indevidos");
} else {
    console.log("Opção inválida");
}