/* El método filter es muy útil, permite filtrar los elementos de un array existente mediante una condición */

/*Array con una lista de palabras aleatorias*/
const words = ["spray","limit","elite","exuberant"];

/*Realizamos la implementación del método filter que en este caso filtra las palabras que tengan una longitud de 6 o mas letras*/
let filtro = words.filter(item => item.length >= 6);

/*Imprimimos el arreglo original de palabras*/
console.log("original",words);

/*Imprimimos el arreglo con las palabras una vez realizado el filtro*/
console.log("filter",filtro);

/*Creamos el arreglo con las ordenes de compra*/ 
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

/*Se realiza el filtro con las órdenes de compra que tengan un estado true en delivered*/
let filtroCompras = orders.filter(item =>item.delivered);

/*Imprimimos el filtro realizado anteriormente*/
console.log(filtroCompras)

/*Nueva consulta mas compleja. busca a los clientes por su nombre*/
const filtro2 = (query) => {
    return orders.filter(item =>{
        return item.customerName.includes(query);
    });
}

/*Imprime la anterior consulta*/
console.log(filtro2("Santi"));