class Electrodomestico {
    precio: number;
    color: string;

    constructor(precio: number, color: string) {
        this.precio = precio;
        this.color = color;
    }

    mostrarInformacion(): void {
        console.log(`Precio: $${this.precio} pesos, Color: ${this.color}`);
    }
}

class Televisor extends Electrodomestico {
    tamaño: number;

    constructor(precio: number, color: string, tamaño: number) {
        super(precio, color);
        this.tamaño = tamaño;
    }

    mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Tamaño: ${this.tamaño} pulgadas`);
    }
}

class Nevera extends Electrodomestico {
    capacidad: number;

    constructor(precio: number, color: string, capacidad: number) {
        super(precio, color);
        this.capacidad = capacidad;
    }

    mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Capacidad: ${this.capacidad} litros`);
    }
}

class Lavadora extends Electrodomestico {
    carga: number;

    constructor(precio: number, color: string, carga: number) {
        super(precio, color);
        this.carga = carga;
    }

    mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Carga: ${this.carga} kg`);
    }
}

const televisor = new Televisor(1000000, "Negro", 42);
const nevera = new Nevera(1200000, "Blanco", 300);
const lavadora = new Lavadora(1100000, "Gris", 8);

televisor.mostrarInformacion();

nevera.mostrarInformacion();

lavadora.mostrarInformacion();
