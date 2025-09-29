// Herança - Reutilização e manutenção
// Classe: Cao Passaro

class Animal { // Superclasse - Classe pai
    constructor() {
        this.cor = "";
        this.tamanho = 0;
        this.peso = 0;
    }
    correr() {
        console.log("correr");
    }

    dormir() {
        console.log("dormir");
    }
}

class Cao extends Animal { // Subclasse - Classe filha
    constructor() {
        super();
        this.focinho = "focinho grande";
    }
    latir() {
        console.log("latir");
    }

}

class Passaro extends Animal { // Subclasse - Classe filha
    constructor() {
        super();
        this.bico = "bico pequeno";
    }
    voar() {
        console.log("voar");
    }
}


// Instancia
const cao = new Cao();
const passaro = new Passaro();


cao.dormir();
console.log(cao.focinho);

passaro.correr()
console.log("passaro.bico")