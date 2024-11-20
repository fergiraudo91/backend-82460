let cadena1 = '     hola      ';

let mensaje = '       ';

const largoDelMensaje = mensaje.trim().length;
if(largoDelMensaje === 0){
    console.log("El mensaje esta vacio");
}
else{
    console.log("Hay mensaje");
}

const arrAnidado = [1,2,3, [455, 33, 22, [99]], [5]];

const arrFlat = arrAnidado.flat(99);

console.log({arrFlat});