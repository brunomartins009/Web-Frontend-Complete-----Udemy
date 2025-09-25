// Pilar 1 - Abstração

/*
Modelo, Entidade, Identidade, Características e Ações
*/

// Modelo = Classe Carro
// Entidade = objeto Carro
// Identidade = carro1, carro2
// Características = marca, modelo, cor, placa
// Ações = ligar(), acelerar(), frear()

class Carro {
    constructor() {
        // Características
        this.marca = "Volkswagen";
        this.modelo = "Gol";
        this.cor = "Prata";
        this.placa = "ABC-1234";
    }

    ligar() {

    }
}

const carro1 = new Carro();
carro1.modelo = "Golf";
console.log(`Carro 1: ${carro1.modelo}`);

const carro2 = new Carro();
console.log(`Carro 2: ${carro2.modelo}`);


// Loja virtual
class Produto {
    constructor() {
        // roupas
        this.tamanho = "M";
        this.cor = "Vermelho";
        this.preco = 45.9;

        // eletrônicos
        this.altura = "50cm";
        this.largura = "30cm";
    }
}