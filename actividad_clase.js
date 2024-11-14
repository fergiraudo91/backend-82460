class Contador {
    constructor(nombre){
        this.nombre = nombre;
        this.contador = 0;
    }

    static contadorGlobal = 0;

    getResponsable(){
        return this.nombre;
    }

    contar(){
        this.contador++;
        Contador.contadorGlobal++;
    }

    getCuentaIndividual(){
        return this.contador;
    }

    getCuentaGlobal(){
        return Contador.contadorGlobal;
    }
}

const count1 = new Contador("Fernando");
const count2 = new Contador("Sergio");

count1.contar();
count1.contar();
count1.contar();

count2.contar();
count2.contar();

console.log(`El responsable del contador 1 es ${count1.getResponsable()}`);
console.log(`El responsable del contador 2 es ${count2.getResponsable()}`);
console.log(`El contador 1 conto hasta ${count1.getCuentaIndividual()}`);
console.log(`El contador 2 conto hasta ${count2.getCuentaIndividual()}`);
console.log(`La cuenta global es de ${count1.getCuentaGlobal()}`);