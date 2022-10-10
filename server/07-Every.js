/*El método every es lo opuesto a some, para que devuelva true todos los elementos deben cumplir la condición en caso que uno o mas no la cumplan regresará un false*/

/*Arreglo de ejemplo con números dentro*/
const numbers = [1, 30, 49, 29, 10, 13];

/*Ejemplo que se realiza implementando el método every sobre el array de números, en este caso puntual como todos son menores a 50 retorna true*/
const ejemploEvery = numbers.every(item => item < 50);

/*Se imprime el resultado de la implementación de every*/
console.log(ejemploEvery);

/*Arreglo generado para almacenar a los miembros de un equipo para la realización de un nuevo ejemplo*/
const team = [
    {
        name : "Nicolas",
        age : 12
    },
    {
        name : "Andrea",
        age : 8
    },
    {
        name : "Zulema",
        age : 2
    },
    {
        name : "Santiago",
        age : 18
    }
];

/*Ejemplo número 2 de la implementación de every que permite evaluar si todas las personas que conforman al equipo anterior tienen menos de 15 años*/
const ejemploEvery2 = team.every(item => item.age < 15);

/*Impresión por consola del resultado de la implementación del método anterior*/
console.log(ejemploEvery2);
