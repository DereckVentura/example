"use strict";
//Desarrolle un algoritmo para Estudiante que trabaje con una materia donde se puedan observar las notas
//de laboratorio 1 y Parcial 1.
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
class Logica {
    constructor(nombre, lab1, lab2, lab3, par1, par2, par3) {
        this.nombre = nombre;
        this.lab1 = lab1;
        this.lab2 = lab2;
        this.lab3 = lab3;
        this.par1 = par1;
        this.par2 = par2;
        this.par3 = par3;
    }
    Notafinal() {
        let C1 = ((this.lab1 * 0.60) + (this.par1 * 0.40)) / 3;
        let C2 = ((this.lab2 * 0.60) + (this.par2 * 0.40)) / 3;
        let C3 = ((this.lab3 * 0.60) + (this.par3 * 0.40)) / 3;
        let NF = C1 + C3 + C3;
        console.log("El estudiante " + this.nombre + " su nota final de logica es: " + NF);
    }
}
// let estudiante1 = new Poo('William Jose Morales', 'u20110430', 8, 9);
let nombre = "Chepe trompo";
let estudiante2 = new Logica(nombre, 8, 9, 8, 10, 10, 8);
// let estudiante3= new Poo();
// estudiante1.mostrarDatos();
estudiante2.Notafinal();
//# sourceMappingURL=index.js.map