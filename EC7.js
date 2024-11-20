const arr = [1, 2, 3, 4, 5];

const arrPotencia = arr.map((num, index) => num ** index);

console.log({arrPotencia});

const nombres = ["Fernando", "Sergio", "Luciana", "Abril", "Dylan"];

if(nombres.includes("Luciana")){
    console.log("Luciana esta dentro del array");
}
else{
    console.log("Luciana no esta en el array");
}