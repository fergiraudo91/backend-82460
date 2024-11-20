const personaParte1 = {
    nombre: "Fernando",
    dni: 23555677,
    ead: 25,
    profesion: "Desarrollador",
    ciudad: "Cordoba"
}

const personaParte2 = {
    direccion: "La Plata 174",
    telefono: 355678966
}

const personaCompleta = {
    ...personaParte1,
    ...personaParte2
}

console.log({personaCompleta});

const obj1 = {
    a: 1,
    b:2,
    c: 3,
    d: 4
}

const { a, b, ...otrosNumeros } = obj1;

console.log({otrosNumeros});