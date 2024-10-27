class Persona{
    nombre: string;
    edad: number;
    documentoIdentidad: number;

    constructor(nombre: string, edad: number, documentoIdentidad: number){
        this.nombre = nombre;
        this.edad = edad;
        this.documentoIdentidad = documentoIdentidad;
    }

    caminar(): void{
        console.log(`${this.nombre} está caminando.`)
    }

    hablar(): void{
        console.log(`${this.nombre} está hablando.`)
    }

    comer(): void{
        console.log(`${this.nombre} está comiendo.`)
    }


}

const persona1 = new Persona("Anthony", 18, 1088811087);
const persona2 = new Persona("Antonella", 17, 1175821188);
const persona3 = new Persona("Alan", 16, 1286932288);

persona1.caminar();
persona1.hablar();
persona1.comer();

persona2.caminar();
persona2.hablar();
persona2.comer();

persona3.caminar();
persona3.hablar();
persona3.comer();