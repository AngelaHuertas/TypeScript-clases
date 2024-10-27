class Habitacion {
    numero: number;
    precio: number;
    estado: boolean; 

    constructor(numero: number, precio: number, estado: boolean = false) {
        this.numero = numero;
        this.precio = precio;
        this.estado = estado;
    }

    reservar(): void {
        if (!this.estado) {
            this.estado = true;
            console.log(`La habitación ${this.numero} ha sido reservada.`);
        } else {
            console.log(`La habitación ${this.numero} ya está ocupada.`);
        }
    }

    liberar(): void {
        if (this.estado) {
            this.estado = false;
            console.log(`La habitación ${this.numero} ha sido liberada.`);
        } else {
            console.log(`La habitación ${this.numero} ya está libre.`);
        }
    }
}

class Hotel {
    nombre: string;
    ubicacion: string;
    habitaciones: Habitacion[];

    constructor(nombre: string, ubicacion: string, habitaciones: Habitacion[] = []) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.habitaciones = habitaciones;
    }

    agregarHabitacion(habitacion: Habitacion): void {
        this.habitaciones.push(habitacion);
    }

    mostrarHabitaciones(): void {
        console.log(`Habitaciones en el hotel ${this.nombre}, ${this.ubicacion}:`);
        this.habitaciones.forEach(habitacion => {
            const estado = habitacion.estado ? "Ocupada" : "Libre";
            console.log(`Habitación ${habitacion.numero}: $${habitacion.precio}, Estado: ${estado}`);
        });
    }
}

const habitacion1 = new Habitacion(101, 120);
const habitacion2 = new Habitacion(102, 150);
const habitacion3 = new Habitacion(201, 180);

const hotel = new Hotel("Hotel Paraíso", "Cartagena");
hotel.agregarHabitacion(habitacion1);
hotel.agregarHabitacion(habitacion2);
hotel.agregarHabitacion(habitacion3);

hotel.mostrarHabitaciones();

habitacion1.reservar();       
habitacion1.reservar();       
habitacion1.liberar();       
habitacion1.liberar();        

hotel.mostrarHabitaciones(); 
