export interface figure{
    base?: number;
    altura?: number;
    radio?: number;

    getArea(): number;
}

export class Circulo implements figure{
     public radio: number;

    constructor(radio: number){
       this.radio = radio
    }

    getArea(){
        return Math.PI *(this.radio ** 2) 
    }
}

export class Cuadrado  implements figure{
    public base: number;
    public altura: number;  

    constructor(base: number, altura: number){
        this.base = base;
        this.altura = altura;
    }

    getArea(): number {
        return this.base * this.altura;
    }
};

export class Triangulo implements figure{
    public base: number;
    public altura: number;

    constructor(base: number, altura: number){
        this.base = base;
        this.altura = altura;
    };

    getArea() {
      return (this.base * this.altura)/2
    }
};

const miCuadrado = new Cuadrado(10,10);
console.log(`El area de miCuadrado es: ${miCuadrado.getArea()}`, '\n');

const miCirculo = new Circulo(10);
console.log(`El area de miCirculo es: ${miCirculo.getArea()}`, `\n`);

const miTriangulo = new Triangulo(10,20);
console.log(`El area de miTriangulo es: ${miTriangulo.getArea()}`, '\n');