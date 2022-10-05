/* Array creado con objetos en su interior, en este caso odenes de compra de clientes */
const orders = [
    {
        customerName: "Santiago",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Nicolas",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Laura",
        total: 870,
        delivered: true,
    },
    {
        customerName: "Diego",
        total: 55,
        delivered: false,
    },
    {
        customerName: "Flor",
        total: 98,
        delivered: true,
    }
];


/*En la siguiente línea se imprime por consola un mensaje denominado original seguido del arreglo con los objetos originales */
console.log("original", orders);

/* Implementando el método map se seleccionan todos los valores del total de cada cliente */
let resp = orders.map(item => item.total);

/*En la siguiente línea se imprime por consola un mensaje denominado modificado seguido del arreglo con los valores del total de todos los clientes */
console.log("modificado", resp);

/*Se implementa el método map con el fin de agregar un nuevo atributo a cada objeto del array. Ojo, implementando esta forma de hacerlo, se esta modificando la referencia en memoria por lo que se modifica el arreglo original también*/
let agregarAtributoModificandoArrayOriginal = orders.map(item => {
    item.tax = .19;
    return item;
});

/*Se imprime el array con los objetos modificados*/
console.log("Atributo Agregado",agregarAtributoModificandoArrayOriginal);

/*Se implementa el método map con el fin de agregar un nuevo atributo a cada objeto del array. Implementando esta forma de hacerlo, no se esta modificando la referencia en memoria, por lo que usando ... (Spread Operator) Este operador indica que ya no se va a hacer referencia en memoria sino que se deberá trabajar sobre un nuevo array por lo que el original no es modificado */ 
let agregarAtributoSinCambioArrayOriginal = orders.map(item => {
    item.tax = .19;
    return {
        ...item,
        tax : .19
    };
});