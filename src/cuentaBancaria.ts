class CuentaBancaria{
    numeroCuenta: number;
    titular: string;
    saldo: number;

    constructor(numeroCuenta: number, titular: string, saldo: number){
        this.numeroCuenta = numeroCuenta;
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(monto:number): void{
        if(monto > 0){
            this.saldo += monto;
            console.log(`Depósito de $${monto} pesos realizado. Nuevo saldo: $${this.saldo} pesos.`);
        } else{
            console.log("El monto debe ser mayor a 0.")
        }
    }

    retirar(monto: number): void{
        if(monto > 0 && monto <= this.saldo){
            this.saldo -= monto;
            console.log(`Retiro de $${monto} pesos realizado. Nuevo saldo: $${this.saldo} pesos.`)
        } else if(monto > this.saldo){
            console.log("Fondos insuficientes.");
        } else {
            console.log("El monto debe ser mayor a 0.")
        }
    }

    cosultarSaldo(): void{
        console.log(`El saldo de la cuenta ${this.numeroCuenta} es de: $${this.saldo} pesos.`)
    }
}

const cuenta1 = new CuentaBancaria(188, "Anthony", 500000);
const cuenta2 = new CuentaBancaria(288, "Antonella", 500000);
const cuenta3 = new CuentaBancaria(388, "Alan", 500000);

cuenta1.cosultarSaldo();
cuenta1.depositar(50000);
cuenta1.retirar(100000);
cuenta1.cosultarSaldo();

cuenta2.cosultarSaldo();
cuenta2.depositar(50000);
cuenta2.retirar(100000);
cuenta2.cosultarSaldo();

cuenta3.cosultarSaldo();
cuenta3.depositar(50000);
cuenta3.retirar(100000);
cuenta3.cosultarSaldo();