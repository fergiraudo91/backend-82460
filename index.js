// // const person = {name: "Fernando"};
// // // person = {name: "Agustina"}

// // const arr = [1, 2, 3];

// // console.log({arr});

// // person.name = "Sergio";

// // console.log({person});

// function saludar(nombre){
//     console.log(nombre)
//     return `Hola ${nombre}`;
// }


// const saludar2 = nombre => `Hola ${nombre} como estas`;

// const sumar = (num1, num2) => {
//     const suma = num1 + num2;
//     const doble = suma * 2;
//     return doble;
// };

// function sumar2(num1, num2){
//     return num1 + num2;
// }
 
// const saludo1 = saludar("Fernando");

// const saludo2 = saludar2("Sergio");

// console.log({saludo1});
// console.log({saludo2});

// function mostrarLista(elementos){
//     if(elementos.length === 0){
//         return "Lista vacia";
//     }
//     elementos.forEach(elemento => {
//         console.log(elemento);
//     });
//     return `La longitud de la lista es de ${elementos.length}`;
// }

// const lista1 = [1, 2, 3, 4, 5];
// const lista2 = [];

// const valorLista1 = mostrarLista(lista1);
// const valorLista2 = mostrarLista(lista2);

// console.log({valorLista1});
// console.log({valorLista2});

// function sumar(numero){
//     return function(numero2){
//         return numero + numero2;
//     }
// }

// function crearContador(){
//     let contador = 0;
//     function sumar(){
//         contador++;
//         console.log(contador);
//     }

//     function restar(){
//         contador--;
//         console.log(contador);
//     }

//     return {
//         sumar, restar
//     }
// }

// const contador1 = crearContador();

// contador1.sumar();
// contador1.sumar();
// contador1.sumar();
// contador1.restar();

class Person {
    constructor(nombre){
        this.nombre = nombre;
    }

    static especie = "Humano";

    getNombre(){
        return this.nombre;
    }

    saludar(){
        return `Hola ${this.nombre}`;
    }

    getEspecie(){
        return Person.especie;
    }
}

const persona1 = new Person("Fernando");
const persona2 = new Person("Sergio");

const nombrePersona1 = persona1.getNombre();
const nombrePersona2 = persona2.getNombre();

console.log(nombrePersona1);
console.log(persona1.saludar());

console.log(nombrePersona2);
console.log(persona2.saludar());

console.log(persona1.getEspecie());
console.log(persona2.getEspecie());