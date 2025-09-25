// Pilar - Encapsulamento, modificadores de acesso e getters/setters

class ContaBancaria {
    constructor() {
        this._numeroConta = 0;
        this._saldo = 0;
    }
    
    sacar(valorSaque) {
        this._saldo = this._saldo - valorSaque;
    }

    depositar(valorDeposito) {
        this._saldo = this._saldo + valorDeposito;
    }

    get numeroConta() {
        return "Número da conta: " + this._numeroConta;
    }

    set numeroConta( numero ) {
        if(numero > 0 ) {
            this._numeroConta = numero;
        }
    }

    get saldo() {
        return this._saldo;
    }

    set saldo (novoSaldo) {
        if(novoSaldo > 0) {
            this._saldo = novoSaldo;
        }
    }
}

const conta1 = new ContaBancaria();

conta1.saldo = 500; 
conta1.sacar(50);
conta1.depositar(100);


console.log(conta1.saldo);