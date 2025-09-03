/* Var VS Let (Escopo de Variável) */

/* 
*   Var - Escopo global, função
*   Let - Escopo global, função e bloco
*/

// Var
// var numero = 10; // global

// {
//     var numero = 5;
//     console.log(numero); // 5
// }

// function calcular(){
//     numero = 20;
// }

// calcular();
// numero = 15
// console.log(numero); // 5

// Let

{
    let numero = 10; // visivel apenas dentro do bloco
    console.log(numero); // 10
}

console.log(numero); // erro, numero is not defined