class Pelicula {
    titulo: string;
    duracion: number; 
    director: string;

    constructor(titulo: string, duracion: number, director: string) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.director = director;
    }

    mostrarInformacion(): void {
        console.log(`Título: ${this.titulo}, Duración: ${this.duracion} min, Director: ${this.director}`);
    }
}

class CatalogoPeliculas {
    private peliculas: Pelicula[] = [];

    agregarPelicula(pelicula: Pelicula): void {
        this.peliculas.push(pelicula);
    }

    buscarPorTitulo(titulo: string): Pelicula | undefined {
        return this.peliculas.find(pelicula => pelicula.titulo.toLowerCase() === titulo.toLowerCase());
    }

    filtrarPorDirector(director: string): Pelicula[] {
        return this.peliculas.filter(pelicula => pelicula.director.toLowerCase() === director.toLowerCase());
    }

    mostrarCatalogo(): void {
        console.log("Catálogo de Películas:");
        this.peliculas.forEach(pelicula => pelicula.mostrarInformacion());
    }
}

const catalogo = new CatalogoPeliculas();

const pelicula1 = new Pelicula("El cadáver de la novia", 77, "Tim Burton");
const pelicula2 = new Pelicula("Moana", 100, "John Musker");
const pelicula3 = new Pelicula("No respires", 88, "Federico Álvarez");

catalogo.agregarPelicula(pelicula1);
catalogo.agregarPelicula(pelicula2);
catalogo.agregarPelicula(pelicula3);

catalogo.mostrarCatalogo();

const buscarTitulo = "El cadáver de la novia";
const resultadoBusqueda = catalogo.buscarPorTitulo(buscarTitulo);
if (resultadoBusqueda) {
    console.log(`Resultado de búsqueda para "${buscarTitulo}":`);
    resultadoBusqueda.mostrarInformacion();
} else {
    console.log(`No se encontró la película con título "${buscarTitulo}".`);
}

const directorFiltro = "Federico Álvarez";
console.log(`Películas dirigidas por ${directorFiltro}:`);
const peliculasPorDirector = catalogo.filtrarPorDirector(directorFiltro);
peliculasPorDirector.forEach(pelicula => pelicula.mostrarInformacion());
