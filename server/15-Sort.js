/*El método sort es mutable y consiste en ordenar un array a partir de los valores Unicode de los caracteres y este retorna un array con la misma referencia en memoria que el original.*/

/*Este proceso recibe un argumento:

Una función de comparación que compara cada elemento con otro. Por defecto, evalúa el valor Unicode del caracter.*/

/*Construcción de los arrays para los ejemplos de sort*/
const months = ["March", "Jan", "Feb", "Dec"];
const numbers = [1, 30, 4, 21, 100000];
const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

/*Se ejecuta el sort sobre el arreglo de meses, si observamos, no esta ordenado en el orden tradicional, eso sucede debido a que el lo ordena de acuerdo al código ASCII*/
months.sort()
console.log(months);

/*Sucede lo mismo, se ordena de acuerdo al código ASCII*/
numbers.sort()
console.log(numbers);

/*Si queremos que lo ordene en la forma que esperamos, podemos modificar el sort mediante una arrow function de la siguiente manera*/
numbers.sort((a,b) => a - b);
console.log(numbers);

/*Sucede lo mismo, se ordena de acuerdo al código ASCII*/
words.sort();
console.log(words);

/*Ordenando de acuerdo a los totales en los objetos*/
orders.sort((a,b) => b.total - a.total);
console.log(orders);



