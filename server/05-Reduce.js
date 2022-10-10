/*Arreglo que contiene cuatro valores*/
const totals = [1, 2, 3, 4];

/*Variable que permite almacenar temporalmente el resultado de la operación con reduce*/
let temp = 0;

/*Ejemplo del uso del método reduce que permite tomar todos los elementos del array y devuelve un valor, normalmente es un valor suelto aunque dependiendo de como se realice el código, puede devolver el valor en un array. Debemos enviarle dos parámetros, en este caso el primero es un arrow function y el segundo es el estado inicial de sum que en este caso es cero*/  
const rta = totals.reduce((temp, item) => temp + item, 0);

/*Imprimimos el resultado de la suma de todos los elementos del array*/
console.log(rta);

/*Creamos un nuevo array con el fin de visualizar otro ejemplo*/
let totals2 = [1,2,3,4,5,5,5,6,1,8,9,7,11,2,2,4,11,8,7,19,17,14];

/*Segundo ejemplo del método reduce, se pretende contar la cantidad de veces que se repite cada número. En este caso se retorna un objeto, por lo que se colocan al final los {}. Se colocan los condicionales que identifican el numero de veces que se repite cada número */
const rta2 = totals2.reduce((obj,item) => {
    if(!obj[item]){
        obj[item] = 1;
    }else{
        obj[item] = obj[item] + 1;
    }
    return obj;
},{});


/*Se imprime el resultado de la función anterior*/
console.log(rta2);

/*Se crea una lista de objetos*/
const data = [
    {
        customerName: "Santiago",
        level : "low",
    },
    {
        customerName: "Santiago",
        level : "medium",
    },
    {
        customerName: "Zulema",
        level : "high",
    },
    {
        customerName: "Nicolas",
        level : "low",
    },
    {
        customerName: "Laura",
        level : "low",
    },
    {
        customerName: "Diego",
        level : "medium",
    },
    {
        customerName: "Flor",
        level : "high",
    }
];

/*Se realiza una fusion entre map y reduce*/
const te = data.map(item => item.level);
const rta3 = te.reduce((obj,item) => {
    if(!obj[item]){
        obj[item] = 1;
    }else{
        obj[item] = obj[item] + 1;
    }
    return obj;
},{});

/*Se imprime el resultado*/
console.log(rta3);

/*Ejercicio resuelto como práctica del método reduce*/
let totals3 = [1,2,3,4,5,5,5,6,1,8,9,7,11,2,2,4,11,8,7,19,17,14];
let range1 = "0-5";
let range2 = "6-8";
let range3 = "9-20";
const temp4 = totals3.reduce((obj,item) => {
    if(!obj[range1] && item >= 0 && item <= 5){
        obj[range1] = 1;
    }else if(obj[range1] && item >= 0 && item <= 5){
        obj[range1] = obj[range1] + 1;
    }else if(!obj[range2] && item >= 6 && item <= 8){
        obj[range2] = 1;
    }else if(obj[range2] && item >= 6 && item <= 8){
        obj[range2] = obj[range2] + 1;
    }else if(!obj[range3] && item >= 9 && item <= 20){
        obj[range3] = 1;
    }else if(obj[range3] && item >= 9 && item <= 20){
        obj[range3] = obj[range3] + 1;
    }
    return obj;
},{});

console.log(temp4);