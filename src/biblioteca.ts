// 3. *Biblioteca Virtual:*
// Crea un sistema de biblioteca virtual en el que los alumnos puedan definir una clase `Libro` 
// con propiedades como `título`, `autor`, etc. Implementa métodos para prestar y devolver
// libros, y lleva un registro de los libros disponibles y prestados. Esto les permitirá practicar la
// encapsulación y el manejo de objetos.

// export class Libro{
//     private titulo: string;
//     private autor: string;

//     constructor(titulo: string, autor: string){
//         this.titulo = titulo;
//         this.autor = autor;
//     }

//     biblioteca : Libro[] = [];
//     prestamos : Libro[] = [];

//     agregarLibro(Libro: Libro){
//         this.biblioteca.push(Libro);
//         console.log(`El Libro: ${Libro.titulo} se agreó a la biblioteca`);
//     }

//     prestarLibro( titulo: string, autor: string) {
//         const libro = this.biblioteca.find(lib => lib.titulo === titulo && lib.autor === autor);
//         if (libro) {
//           this.biblioteca.splice(this.biblioteca.indexOf(libro), 1);
//           this.prestamos.push(libro);
//           console.log(`El libro ${libro.titulo} se prestó con éxito`);
//         }else{
//             console.log("El libro no existe en la biblioteca");
//         }
//         return libro;
//       }
      

//       devolverLibro( titulo: string, autor: string) {
//         const libro = this.prestamos.find(lib => lib.titulo === titulo && lib.autor === autor);
//         if (libro) {
//           this.prestamos.splice(this.prestamos.indexOf(libro), 1);
//           this.biblioteca.push(libro);
//           console.log(`El libro ${libro.titulo} se devolvió con éxito`);
//         }else{
//             console.log("El no está prestado");
//         }
//         return libro;
//       }
// }



export class Libro {
    private titulo: string;
    private autor: string;

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
    }

    biblioteca: Libro[] = [];
    prestamos: Libro[] = [];

    agregarLibro(Libro: Libro) {
        this.biblioteca.push(Libro);
        console.log(`El Libro: ${Libro.titulo} se agregó a la biblioteca`);
        console.log(this.biblioteca);
    }

    buscarLibroEnBiblioteca(Libro:Libro | undefined) {
        for (const lib of this.biblioteca) {
            if (lib.titulo === this.titulo && lib.autor === this.autor) {
                return lib;
            }
        }
        return undefined;
    }

    buscarLibroEnPrestamos(Libro:Libro | undefined ){
        for (const lib of this.prestamos) {
            if (lib.titulo === this.titulo && lib.autor === this.autor) {
                return lib;
            }
        }
        return undefined;
    }

    prestarLibro(Libro:Libro) {
        const libro = this.buscarLibroEnBiblioteca(Libro);
        if (libro) {
            this.biblioteca.splice(this.biblioteca.indexOf(libro), 1);
            this.prestamos.push(libro);
            console.log(`El libro ${libro.titulo} se prestó con éxito`);
        } else {
            console.log("El libro no existe en la biblioteca");
            console.log(this.prestamos);
        }
        return libro;
    }

    devolverLibro(Libro:Libro) {
        const libro = this.buscarLibroEnPrestamos(Libro);
        if (libro) {
            this.prestamos.splice(this.prestamos.indexOf(libro), 1);
            this.biblioteca.push(libro);
            console.log(`El libro ${libro.titulo} se devolvió con éxito`);
        } else {
            console.log("El libro no está prestado");
        }
        return libro;
    }
}

const miLibro1 =new Libro( "El Hobbit", "J.R.R. Tolkien")
miLibro1.agregarLibro(miLibro1);
const miLibro2 = new Libro( "La casa de papel","Álex Pina" );
miLibro2.agregarLibro(miLibro2); 
const miLibro3 =new Libro( "El Señor de los Anillos", "J.R.R. Tolkien")
miLibro1.agregarLibro(miLibro3);

miLibro1.prestarLibro(miLibro1);

miLibro1.devolverLibro(miLibro1);

