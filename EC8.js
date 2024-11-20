const persona = {
    nombre: "Fernando",
    dni: 35579511,
    edad: 30,
    telefono: 1234,
    email: "fer@gmail.com",
    fechaNacimiento: "21/08/1989"
}

const propiedadYValor = Object.entries(persona);
const soloPropiedades = Object.keys(persona);
const soloValores = Object.values(persona);

console.log({propiedadYValor});
console.log({soloPropiedades});
console.log({soloValores});

