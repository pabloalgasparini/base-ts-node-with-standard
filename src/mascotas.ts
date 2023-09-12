// Desarrolla un programa en el que los alumnos puedan crear mascotas virtuales
// como perros, gatos o incluso criaturas imaginarias. 
// Cada mascota podría tener propiedades como `nombre`, `nivel de felicidad`, etc.
// Implementa métodos para alimentar, jugar y cuidar a las mascotas.
// Esto les permitirá practicar conceptos de interacción y estado de objetos. 


export interface Animal{
    nombre: string;
    genero: string;
    nivel_de_felicidad: number;

    alimentar():number;
    jugar():number;
    cuidar_mascota(): number;
}

export class Gato implements Animal{
     nombre : string;
     genero : string;
     nivel_de_felicidad : number;

    constructor(nombre : string, genero:string, nivel_de_felicidad:number){
        this.nombre = nombre;
        this.genero = genero;
        this.nivel_de_felicidad = nivel_de_felicidad;
    }

    alimentar(){
        console.log("Su mascota está más contenta");
        return this.nivel_de_felicidad =+ 15;
        
    }

    jugar() {
        console.log("Su mascota está más contenta");
       return this.nivel_de_felicidad =+ 10;
      
    }

    cuidar_mascota(){
        console.log("Su mascota está más contenta");
       return this.nivel_de_felicidad=+20;
       
    }
}

export class Perro implements Animal{
    nombre: string;
    genero: string;
    nivel_de_felicidad: number;

    constructor(nombre: string,genero: string,nivel_de_felicidad: number){
        this.nombre=nombre;
        this.genero=genero;
        this.nivel_de_felicidad=nivel_de_felicidad;
    }

    alimentar() {
        console.log("Su mascota está más contenta");
        return this.nivel_de_felicidad=+25;
        
    }

    jugar() {
        console.log("Su mascota está más contenta");
        return this.nivel_de_felicidad=+20;
       
    }

    cuidar_mascota(){
        console.log("Su mascota está más contenta");
        return this.nivel_de_felicidad=+15;
        
    }
}

export class Criatura implements Animal{
    nombre: string;
    genero: string;
    nivel_de_felicidad: number;

    constructor(nombre: string,genero: string,nivel_de_felicidad: number){
        this.nombre=nombre;
        this.genero=genero;
        this.nivel_de_felicidad=nivel_de_felicidad;
    }

    alimentar() {
        console.log("Su mascota está más contenta");
        return this.nivel_de_felicidad=+28;
        
    }

    jugar() {
        console.log("Su mascota está más contenta");
        return this.nivel_de_felicidad=+28;
        
    }

    cuidar_mascota(){
        console.log("Su mascota está más contenta");
        return this.nivel_de_felicidad=+55;
        
    }
}

const miGato = new Gato("Casimiro", "Felino", 0);
miGato.alimentar()
miGato.jugar();
miGato.cuidar_mascota();

const miPerro = new Perro("Tronco", "Canino", 0);
miPerro.alimentar()
miPerro.jugar();
miPerro.cuidar_mascota();

const miMonstruo = new Criatura("Drago", "Criatura Fantástica", 0);
miMonstruo.alimentar()
miMonstruo.jugar();
miMonstruo.cuidar_mascota();