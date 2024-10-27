class FiguraGeometrica {
    area(): number {
        throw new Error("Método 'area()' no implementado.");
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(private base: number, private altura: number) {
        super();
    }

    area(): number {
        return (this.base * this.altura) / 2;
    }
}

class Circulo extends FiguraGeometrica {
    constructor(private radio: number) {
        super();
    }

    area(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

class Cuadrado extends FiguraGeometrica {
    constructor(private lado: number) {
        super();
    }

    area(): number {
        return Math.pow(this.lado, 2);
    }
}

const triangulo = new Triangulo(5, 10);
console.log(`Área del triángulo: ${triangulo.area()} unidades cuadradas`);

const circulo = new Circulo(7);
console.log(`Área del círculo: ${circulo.area().toFixed(2)} unidades cuadradas`);

const cuadrado = new Cuadrado(4);
console.log(`Área del cuadrado: ${cuadrado.area()} unidades cuadradas`);
