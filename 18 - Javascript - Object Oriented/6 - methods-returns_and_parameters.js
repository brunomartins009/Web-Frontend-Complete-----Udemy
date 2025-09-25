// Métodos - parametros e retornos

class Usuario {
    constructor() {
        this.email = "";
        this.senha = "";
        this.subtotalCompra = 0;
    }

    logar() {
        let emailBD = "bm@gmail.com";
        let senhaBD = "1234";

        if (senhaBD == this.senha) {
            // console.log("Senha válida");
            return "Senha válida";
        } else {
            // console.log("Senha inválida");
            return "Senha inválida";
        }
    }

    calcularDesconto(cupom) {
        let desconto = 0;
        if (cupom == "DESC20") {
            desconto = 20;
        } else if (cupom == "FESTA10") {
            desconto = 10;
        }

        return this.subtotalCompra - desconto;
    }
}

const usuario = new Usuario();
usuario.subtotalCompra = 500;
let mensagem = usuario.calcularDesconto("DESC20");
console.log(mensagem);

/*
usuario.email = "bm@gmail.com";
usuario.senha = "1234";

let mensagem = usuario.logar();
console.log(mensagem);
*/
