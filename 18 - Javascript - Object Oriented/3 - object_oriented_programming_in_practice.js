/* Paradigma -> exemplo ou padrão a ser seguido, não se trata de uma
linguagem, mas a forma como você soluciona problemas usando uma 
linguagem de programação. */

// Javascript é multi paradigma

// Procedural -> foco na função
// Funções que manipulam dados

// function verificarDisponibilidade(quartos, ocupados) {
//     let res = quartos - ocupados;
//     console.log(`Quartos disponíveis: ${res}`);    
// }

// let quartos = 20;
// let ocupados = 5;
// verificarDisponibilidade(quartos, ocupados);

// Orientado a objetos -> foco no objeto

const hotel = {
    quartos: 20,
    ocupados: 10,
    verificarDisponibilidade: function() {
        let res = this.quartos - this.ocupados;
        console.log(`Quartos disponíveis: ${res}`);   
    }
}

hotel.ocupados = 15;
hotel.verificarDisponibilidade();