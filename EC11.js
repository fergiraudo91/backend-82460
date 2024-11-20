//falsey values = 0, NaN, undefined, null, false, ""

let valor = false;
let variableAsignada = valor || "Sin valor";
let variableAsignadaConNullish = valor ?? "Sin valor";

console.log({variableAsignada});
console.log({variableAsignadaConNullish});

class Persona {
    #fullName
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.#fullName = `${nombre} ${apellido}`
    }

    getFullName(){
        return this.#fullName;
    }
}

const persona1 = new Persona("Fernando", "Giraudo");

console.log(persona1.getFullName());

