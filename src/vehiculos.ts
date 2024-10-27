class Vehiculo{
    tipo: string;

        constructor(tipo: string){
            this.tipo = tipo;
        }

    desplazarse(): void {
        console.log(`${this.tipo} se está desplazando.`)
    }
}

class Coche extends Vehiculo{
    constructor(){
        super("Coche");
    }

    desplazarse(): void {
        console.log("El coche se desplaza por carretera.");
    }
}

class Barco extends Vehiculo{
    constructor(){
        super("Barco");
    }

    desplazarse(): void {
        console.log(`El barco navega por el agua.`);
    }
}

class Avion extends Vehiculo{
    constructor(){
        super("Avión");
    }

    desplazarse(): void {
        console.log(`El avión vuela por el aire.`);
    }
}

const carro = new Coche();
const barco = new Barco();
const avion = new Avion();

carro.desplazarse();  
barco.desplazarse(); 
avion.desplazarse();  