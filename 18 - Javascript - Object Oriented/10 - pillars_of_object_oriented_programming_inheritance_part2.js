// Herança - Reutilização e manutenção
// Classe: Cao Passaro

class Animal { // Superclasse - Classe pai
    constructor() {
        this.cor = "";
        this.tamanho = 0;
        this.peso = 0;
    }
    correr() {
        console.log("correr como um ");
    }

    dormir() {
        console.log("dormir");
    }
}

class Cao extends Animal { // Subclasse - Classe filha
    constructor() {
        super();
        this.tamanhoOrelha = 0;
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
    constructor() {
        super();
        this.bico = "bico pequeno";
    }
    voar() {
        console.log("voar");
    }
}

class Papagaio extends Passaro {
    falar(){
        console.log("falar");
    }
}


// Instancia
const cao = new Cao();
const passaro = new Passaro();
const papagaio = new Papagaio();


cao.correr();
// console.log(cao.focinho);

// passaro.correr()
// console.log("passaro.bico")

// papagaio.correr();
// papagaio.voar();
// papagaio.falar();