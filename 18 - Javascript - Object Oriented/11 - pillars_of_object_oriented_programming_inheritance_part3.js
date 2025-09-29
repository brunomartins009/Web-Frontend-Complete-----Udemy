// Herança - Reutilização e manutenção
// Classe: Cao Passaro

class Animal { // Superclasse - Classe pai
    constructor(cor, tamanho, peso) {
        this.cor = cor;
        this.tamanho = tamanho;
        this.peso = peso;
    }
    correr() {
        console.log("correr como um ");
    }

    dormir() {
        console.log("dormir");
    }
}

class Cao extends Animal { // Subclasse - Classe filha
    constructor(cor, tamanho, peso, tamanhoOrelha) {
        super(cor, tamanho, peso);
        this.tamanhoOrelha = tamanhoOrelha;
    }
    correr() {
        super.correr()
        console.log("cao")
    }
    latir() {
        console.log("latir");
    }

}

class Passaro extends Animal { // Subclasse - Classe filha
    constructor(cor, tamanho, peso) {
        super(cor, tamanho, peso);
    }
    correr() {
        super.correr()
        console.log("passaro")
    }
    voar() {
        console.log("voar");
    }
}

class Papagaio extends Passaro {
    constructor(cor, tamanho, peso, sabeFalar){
        super(cor, tamanho, peso);
        this.sabeFalar = sabeFalar;
    }
    falar(){
        console.log("falar");
    }
}


// Instancia
const animal = new Animal("Amarelo", 60, 3);
const cao = new Cao("Amarelo", 60, 3, 5);
const passaro = new Passaro();
const papagaio = new Papagaio("Verde", 20, 1, true);


//console.log(animal.peso)

// cao.correr();
console.log(papagaio.sabeFalar);

// passaro.correr()
// console.log("passaro.bico")

// papagaio.correr();
// papagaio.voar();
// papagaio.falar();