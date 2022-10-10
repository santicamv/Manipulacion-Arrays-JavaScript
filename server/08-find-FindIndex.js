/*Los métodos find y findIndex consisten en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback).*/

/*En el caso de find retornará el elemento completo, si cumple con la condición, caso contrario retornará undefined. El método findIndex retornará el índice del elemento encontrado, caso contrario retornará -1.*/

/*Arreglo que contiene los números para el ejemplo*/
const numbers = [1, 30, 49, 29, 10, 13];

/*Ejemplo que implementa el método find */
const ejemploFind = numbers.find(item => item === 30);

/*Se realiza la impresión del resultado del ejemplo anterior*/
console.log(ejemploFind);

/*Array de productos para un nuevo ejemplo*/
const products = [
    {
        name: "Pizza",
        price: 12,
        id: "🍕"
    },
    {
        name: "Hamburguesa",
        price: 23,
        id: "🍔"
    },
    {
        name: "Perro caliente",
        price: 34,
        id: "🌭"
    }
];

/*Nuevo ejemplo que involucra a find, en este caso se busca al objeto que tiene el id del perro caliente y retorna todo el objeto*/
const ejemploFind2 = products.find(item => item.id === "🌭");

/*Impresión por consola del anterior ejemplo*/
console.log(ejemploFind2);

/*Ejemplo de la variante findIndex, hace lo mismo que find, pero este devuelve la posición de ese item*/
const ejemploFindIndex = products.findIndex(item => item.id === "🌭");

/*Impresión por consola del resultado del ejemplo anterior*/
console.log(ejemploFindIndex);