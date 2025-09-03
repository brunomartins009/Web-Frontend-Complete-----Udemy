/* CONCATENAÇÃO E TEMPLATE STRING */

// CONCATENAÇÃO
const nome = "Bruno";
const sobrenome = "Martins";
const idade = 25;
const cidadeDeNascimento = "Capelinha - MG";

console.log("----- CONCATENAÇÃO -----");
console.log("Olá, meu nome é " + nome + " " + sobrenome + ", tenho " + idade + " anos e nasci em " + cidadeDeNascimento + ".");

console.log("\n");

// TEMPLATE STRING
console.log("----- TEMPLATE STRING -----");
console.log(`Olá, meu nome é ${nome} ${sobrenome}, tenho ${idade} anos e nasci em ${cidadeDeNascimento}.`);