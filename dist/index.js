Object.defineProperty(exports, "__esModule", { value: true });

class Poo {
    constructor(_nombre, _codigo, _labo, _parcial) {
        this.nombre = _nombre;
        this.codigo = _codigo;
        this.laboratorio = _labo;
        this.parcial = _parcial;
    }
    mostrarDatos() {
        console.log("Estudiante: " + this.nombre + " Sus notas son Laboratorio: " + this.laboratorio
            + " Parcial: " + this.parcial);
    }
}
class Redes {
    constructor(nombre, laboratorio1, laboratorio2, laboratorio3, parcial1, parcial2, parcial3) {
        this.nombre = nombre;
        this.laboratorio1 = laboratorio1;
        this.laboratorio2 = laboratorio2;
        this.laboratorio3 = laboratorio3;
        this.parcial1 = parcial1;
        this.parcial2 = parcial2;
        this.parcial3 = parcial3;
    }
    Notafinal() {
        let Prom1 = ((this.laboratorio1 * 0.60) + (this.parcial1 * 0.40)) / 3;
        let Prom2 = ((this.laboratorio2 * 0.60) + (this.parcial2 * 0.40)) / 3;
        let Prom3 = ((this.laboratorio3 * 0.60) + (this.parcial3 * 0.40)) / 3;
        let nota_Final = Prom1 + Prom2 + Prom3;
        console.log("Dereck Enrique Ventura Benitez " + this.nombre + " su nota final de redes es: " + nota_Final);
    }
}
let estudiante1 = new Poo('Dereck Enrique Ventura Benitez', 'u20250944', 8, 9);
let nombre = "Chepe trompo";
let estudiante2 = new Redes(nombre, 8, 9, 8, 10, 10, 8);


estudiante1.mostrarDatos();
estudiante2.Notafinal();
