/*El método some permite evaluar si alguno de los items del arreglo cumple con una condición. Por ejemplo, en el ejemplo de abajo se esta determinando mediante some si en el array existe algun item que sea par. Si si existe devuelve true, si no envía false.*/

/*Arreglo de números generado para el ejemplo puntual*/
const numbers = [1, 2, 3, 4];

/*Implementación del método some para evaluar los números*/
const rta = numbers.some(item => item % 2 === 0);

/*Impresión por consola del resultado sobre la evaluación de las expresiones*/
console.log(rta);

/*Arreglo que tiene los objetos con las órdenens de compra para realizar un nuevo ejemplo*/
const orders = [
    {
        customerName: "Santiago",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Santiago",
        total: 255,
        delivered: false,
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

/*Se evalúa mediante el método some si algún item fue entregado, en caso positivo manda true y en caso contrario manda false*/
const evaluarEntregado = orders.some(item => item.delivered);

/*Se imprime el resultado de la evaluación del método anterior*/
console.log(evaluarEntregado);

/*Arreglo que contiene objetos de fechas para la realización de un nuevo ejemplo*/
const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo"
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con el jefe"
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena"
    }
];

const newAppoinment = {
    startDate: new Date(2021, 1, 1, 18),
    endDate: new Date(2021, 1, 1, 20, 30)
};

/*Se realiza la importacion de la función areIntervalsOverlapping de la librería date-fns, que fue instalada previamente implementando el comando npm install date-fns en el cmd, estando ubicados en la carpeta del proyecto*/
var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

/*Ejemplo de la implementación de some y la librería date-fns, en este caso se usa el arreglo de dates con la lista de fechas ya definidas para el ejemplo y en este método se comparan con new appoinment mediante areIntervalsOverlapping con el fin de saber si se cruzan las fechas. retorna true si si se cruzan y false si no.*/
const isOverlap = (newDate) =>{
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start : date.startDate, end : date.endDate},
            {start : newDate.startDate, end : newDate.endDate}

            )
    })
}

/*Impresión por consola del resultado obtenido luego de la ejecución de la anterior función*/ 
console.log("is overlap =>", isOverlap(newAppoinment));

