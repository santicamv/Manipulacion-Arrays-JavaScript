/*El método flatMap es inmutable y consiste en la combinación de los métodos map y flat. Primero realiza la iteración de los elementos del array (como si fuera map), y después los aplana en una sola profundidad (como si fuera flat).*/

/*Array creado para el ejemplo de flatmap*/
const users = [
    {userId : 1, username : "Tom", attributes : ["Nice","Cute"]},
    {userId : 2, username : "Mike", attributes : ["Lovely"]},
    {userId : 3, username : "Niko", attributes : ["Nice","Cool"]}
];

/*Ejemplo de la implementación de flat y map por separado...*/
const ejemploMap = users.map(item => item.attributes).flat(Infinity);

/*Impresión por consola del ejemplo anterior*/
console.log(ejemploMap);

/* Ejemplo de la implementación de flatMap*/
const ejemploFlatMap = users.flatMap(item => item.attributes);

/*Impresión por consola del ejemplo anterior*/
console.log(ejemploFlatMap);

/* Conjunto de fechas creadas con el fin de hacer un nuevo ejemplo*/
const calendars = {
    primaryCalendar : [
        {
            startDate : new Date(2021, 1, 1, 15),
            endDate : new Date(2021, 1, 1, 15, 30),
            title : "Cita 1"
        },
        {
            startDate : new Date(2021, 1, 1, 17),
            endDate : new Date(2021, 1, 1, 18),
            title : "Cita 2"
        }
    ],
    secondaryCalendar : [
        {
            startDate : new Date(2021, 1, 1, 12),
            endDate : new Date(2021, 1, 1, 12, 30),
            title : "Cita 2"
        },
        {
            startDate : new Date(2021, 1, 1, 9),
            endDate : new Date(2021, 1, 1, 10),
            title : "Cita 4"
        }
    ]
};


/*En la constante calendars tenemos construido un objeto y dentro del objeto si tenemos arrays con las fechas tanto primarias como secundarias, para poder implementar adecuadamente flatmap con esta estructura, debemos primero pasar el objeto a array. Eso lo podemos lograr utilizando Object.keys o en su defecto Object.values */
const objetoAArray = Object.values(calendars);
/*En el método se implementan los arrays creados y lo que primero se hace es implementar flatMap para recorrer el primary calendar y el secondary calendar y por último se vuelve a recorrer implementando map cada una de las fechas en el interior de primary calendar y el secondary calendar*/
const respuesta = objetoAArray.flatMap(item => {
    return item.map(date => date.startDate);
});
/*Imprimimos por consola el resultado del anterior ejemplo que trae todas las startDate*/
console.log(respuesta);



/*Desafio solicitado al final de la clase, contar el número de palabras en el array*/
function solution(lines) {
    let arrayContenido = Object.values(lines);
    const srr = arrayContenido.flatMap(item => item.split(" "));
    const resultado = srr.length;
    console.log(resultado);
}; 

solution([
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ]);